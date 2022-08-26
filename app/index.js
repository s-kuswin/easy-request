#!/usr/bin/env node
import inquirer from 'inquirer';
import fs from 'fs';
import chalk from 'chalk';
import path from "path"
import ejs from "ejs"
import symbols from "log-symbols"
import swaggerJs from "./dataAnalysis/swaggerJs.js"
import axios from "axios"
import ora from "ora"
import _ from "lodash";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let firstPrompList = [
  {
    type: "list",
    name: "isType",
    message: "请选择swagger数据获取方式",
    choices: ["从URL获取swagger数据", "上传swagger文件"],
    default: "从URL获取swagger数据"
  }
]

const secondPrompList = [
  {
    type: "list",
    name: "templateType",
    message: "请选择生成文件类型",
    choices: ["js"],
    default: "js"
  },
  {
    type: "input",
    name: "outPutFolder",
    message: "请输入输出文件夹",
    default: "api"
  },
  {
    type: "input",
    name: "profix",
    message: "请输入接口前缀",
    default: ""
  }
];

const filePrompt = {
  type: "input",
  name: "sourceFile",
  message: "请把 swagger.json 文件拖拽到这里"
};
const urlPrompt = {
  type: "input",
  name: "swaggerUrl",
  message: "请输入swagger文档连接",
  default: "https://petstore.swagger.io/v2/swagger.json"
};

inquirer.prompt(firstPrompList).then(firstAnswer => {
  secondPrompList.push(
    firstAnswer.isType === "上传swagger文件" ? filePrompt : urlPrompt
  );
  inquirer.prompt(secondPrompList).then(secondAnswer =>{
    console.log(secondAnswer);
    secondAnswer.isType = firstAnswer.isType;
    writing(secondAnswer)
  })
})

async function writing(props) {
  // 出现加载图标
  const spinner = ora('Generating...')
  spinner.start()
  try{
    let clsName = props.className;
    let templateType = props.templateType;
    let swaggerUrl = props.swaggerUrl;
    let profix = props.profix;
    let outPutFolder = props.outPutFolder;
    let sourceFile;
    if (props.isType !== "上传swagger文件") {
      let res = await axios.get(swaggerUrl);
      sourceFile = res.data;
    } else {
      sourceFile = props.sourceFile
        ? JSON.parse(fs.readFileSync(props.sourceFile, 'utf8'))
        : props.sourceFile;
    }
  
    if (!sourceFile) {
      spinner.fail()
      return console.log(chalk.red("未检测到swaggerJSON数据，请输入正确url重试！"));
    }
  
    let swaggerData = swaggerJs.getViewForSwagger({
      swagger: sourceFile,
      className: clsName,
      profix: profix
    });

    _.forEach(swaggerData, function(swaggerList, pageNmae){
      let outPutFile =
      props.templateType === "js"
        ? pageNmae + ".js"
        : pageNmae + ".ts";
      const template = templatePath(templateType)
      const animalKotlin = ejs.render(fs.readFileSync(template, 'utf8'), swaggerList);
      writeIfModified(
        destinationFolder(outPutFolder),
        destinationPath(outPutFolder,outPutFile),
        animalKotlin
      );
    })

    spinner.succeed()
    console.log(chalk.green(symbols.success), chalk.green(`create ${outPutFolder} successfully!\n`))
  } catch(e) {
    console.log(chalk.red(e))
    spinner.fail()
  }
}

function templatePath(type) {
  return path.join(__dirname, `../template/${type}.ejs`)
}

function destinationPath(outPutFolder,outPutFile) {
  return path.join(process.cwd(), `/${outPutFolder}/${outPutFile}`)
}
function destinationFolder(outPutFolder) {
  return path.join(process.cwd(), `/${outPutFolder}`)
}

function writeIfModified(outPutFolder, filename, newContent) {
  try {
    const oldContent = fs.readFileSync(filename, 'utf8');
    if(oldContent == newContent) {
      console.log(chalk.yellow(`* Skipping file '${filename}' because it is up-to-date`));
      return;
    }
  }catch(err) {}
  fs.mkdir(outPutFolder,()=>{});
  fs.writeFileSync(filename, newContent)
}