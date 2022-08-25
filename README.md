## 安装依赖

```bash
npm install -g easy-request-api
```

## 介绍

- 支持 `js.ejs`模板文件;
- 可以自定义 `className`， `OutPutFile`;

## 如何使用

 1. 从服务端人员获得`xxx.yaml` 文件，导入[editor.swagger.io](http://editor.swagger.io/) 生成 `swagger.json` 文件；或者输入能获取JSON数据的url
 2. 命令行输入`easerequest create`，按照提示操作；
  

```bash
easerequest create

? 请输入生成器 className Api
? 请选择模板文件 js.ejs
? 请输入输出文件名(没有文件后缀) api
? 请把 swagger.json 文件拖拽到这里 /Users/***/generators/swagger.json
   create api.ts
```