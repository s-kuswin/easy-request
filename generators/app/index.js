"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
let beautify = require("gulp-beautify");
let axios = require("axios");
const codegen = require("./codegen/index");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the riveting ${chalk.red(
          "generator-yeoman-swagger"
        )} generator!`
      )
    );

    const fistPrompts = [
      {
        type: "list",
        name: "isType",
        message: "请选择swagger类型",
        choices: ["获取swagger数据URL", "swagger文件"],
        default: "获取swagger数据URL"
      }
    ];

    const someAnswer = await this.prompt(fistPrompts);
    const secondPrompts = [
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
      default: ""
    };

    secondPrompts.push(
      someAnswer.isType === "swagger文件" ? filePrompt : urlPrompt
    );

    const secondAnswer = await this.prompt(secondPrompts);
    this.props = secondAnswer;
    this.props.isType = someAnswer.isType;
  }

  async writing() {
    let clsName = this.props.className;
    let templateType = this.props.templateType;
    let swaggerUrl = this.props.swaggerUrl;
    let profix = this.props.profix;
    let outPutFile =
      this.props.templateType === "js.ejs"
        ? this.props.outPutFile + ".js"
        : this.props.outPutFile + ".ts";
    let sourceFile;
    // eslint-disable-next-line no-negated-condition
    if (this.props.isType !== "swagger文件") {
      let res = await axios.get(swaggerUrl);
      sourceFile = res.data;
    } else {
      sourceFile = this.props.sourceFile
        ? this.fs.read(this.props.sourceFile)
        : this.props.sourceFile;
    }

    if (!sourceFile) {
      return this.log("未检测到swaggerJSON数据，请输入正确url重试！");
    }

    let swaggerData = codegen.getViewForSwagger({
      swagger: sourceFile,
      className: clsName,
      profix: profix
    });
    this.fs.copyTpl(
      this.templatePath(templateType),
      this.destinationPath(outPutFile),
      swaggerData
    );
    this.registerTransformStream(beautify({ indentSize: 1 }));
  }

  install() {
    // This.installDependencies();
  }
};
