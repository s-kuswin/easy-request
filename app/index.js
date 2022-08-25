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
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let firstPrompList = [
  {
    type: "list",
    name: "isType",
    message: "请选择swagger类型",
    choices: ["获取swagger数据URL", "swagger文件"],
    default: "获取swagger数据URL"
  }
]

const secondPrompList = [
  {
    type: "input",
    name: "className",
    message: "请输入生成器 className",
    default: "Api"
  },
  {
    type: "list",
    name: "templateType",
    message: "请选择模板文件",
    choices: ["js.ejs"],
    default: "js.ejs"
  },
  {
    type: "input",
    name: "outPutFile",
    message: "请输入输出文件名(没有文件后缀)",
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
  default: "http://rrzb-client-admin.test-rrzhibo-admin.test.rrinner.cn/v2/api-docs"
};

inquirer.prompt(firstPrompList).then(firstAnswer => {
  secondPrompList.push(
    firstAnswer.isType === "swagger文件" ? filePrompt : urlPrompt
  );
  inquirer.prompt(secondPrompList).then(secondAnswer =>{
    console.log(secondAnswer);
    secondAnswer.isType = firstAnswer.isType;
    writing(secondAnswer)
    // console.log(__dirname);
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
    let outPutFile =
      props.templateType === "js.ejs"
        ? props.outPutFile + ".js"
        : props.outPutFile + ".ts";
    let sourceFile;
    if (props.isType !== "swagger文件") {
      let res = await axios.get(swaggerUrl);
      sourceFile = res.data;
    } else {
      sourceFile = props.sourceFile
        ? this.fs.read(props.sourceFile)
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
    const template = templatePath(templateType)
    const animalKotlin = ejs.render(fs.readFileSync(template, 'utf8'), swaggerData);
    writeIfModified(
      destinationPath(outPutFile),
      animalKotlin
    );
    spinner.succeed()
    console.log(chalk.green(symbols.success), chalk.green(`create ${outPutFile} successfully!\n`))
  } catch(e) {
    console.log(chalk.red(e))
    spinner.fail()
  }
}

function templatePath(type) {
  return `${__dirname.toString().split('\\app')[0]}\\template\\${type}`
}

function destinationPath(outPutFile) {
  return `${process.cwd()}/${outPutFile}`
}

function writeIfModified(filename, newContent) {
  try {
    const oldContent = fs.readFileSync(filename, 'utf8');
    if(oldContent == newContent) {
      console.log(chalk.yellow(`* Skipping file '${filename}' because it is up-to-date`));
      return;
    }
  }catch(err) {}

  fs.writeFileSync(filename, newContent)
}