const minimist = require('minimist'); // 引入minimist模块，用于数字命令行参数
var langHelper = require("./lang.js");
const path = require('path');
const fs = require('fs');
const defaultLang= 'zh-cn';
const args = minimist(process.argv.slice(2));

var langCode = args.lang || defaultLang;
// 语言加载
langHelper.loadLanguage(langCode);
var lang = langHelper.lang();
switch (args['_'][0]) {
  case 'run':
    const files = readDirFiles('./Lib');
    for (const file of files) {
      require("./"+file);
      console.log(lang["debugo1"]+file);
     }
    // 处理 run 任务
    break;
  case 'help':
    // 处理 help 任务
    break;
  case 'script':
    // 处理 script 任务
    break;
  case 'version':
    console.log(' _____     _   _        _ _       ');
    console.log('|_   _|_ _| |_| |_ __ _| | | ___  ');
    console.log('  | |/ _` | __| __/ _` | | |/ _ \\ ');
    console.log('  | | (_| | |_| || (_| | | | (_) |');
    console.log('  |_|\\__,_|\\__|\\__\\__,_|_|_|\\___/ ');
    console.log('AutoBlog - 自动化博客处理工具');
    // 处理 version 任务
    break;
  default:
    console.error('未知的任务类型');
    break;
}

//运行action来自 Action库 在运行前加载所有脚手架
console.log(lang);
function readDirFiles(dirPath) {
  const fileList = [];
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const file of files) {
    if (file.isFile() && path.extname(file.name) === '.js') {
      fileList.push(path.join(dirPath, file.name));
    }
  }
  return fileList;
}


