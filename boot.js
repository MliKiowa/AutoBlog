const minimist = require('minimist'); // 引入minimist模块，用于数字命令行参数
var langHelper = require("./lang.js");
const defaultLang= 'zh-cn';
const args = minimist(process.argv.slice(2));

var langCode = args.lang || defaultLang;
// 语言加载
langHelper.loadLanguage(langCode);
var lang = langHelper.lang();
const action = args.action || "all";
//运行action来自 Action库 在运行前加载所有脚手架
console.log(lang);
const path = require('path');
const fs = require('fs');

const path = require('path');
const fs = require('fs');

function readDirFiles(dirPath) {
  const fileList = [];
  const libPath = path.join(__dirname, '../Lib');
  const files = fs.readdirSync(libPath, { withFileTypes: true });
  for (const file of files) {
    if (file.isFile() && path.extname(file.name) === '.js') {
      fileList.push(path.join(libPath, file.name));
    }
  }
  return fileList;
}

const files = readDirFiles('./Lib');
for (const file of files) {
  require(file);
  consolo(lang["debugo1"]+file);
}
