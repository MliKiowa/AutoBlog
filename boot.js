const minimist = require('minimist'); // 引入minimist模块，用于数字命令行参数
var langHelper = require("./lang.js");
const defaultLang= 'zh-cn';
const args = minimist(process.argv.slice(2));

var langCode = args.lang || defaultLang;
// 语言加载
console.log(langCode);
langHelper.loadLanguage(langCode);
var lang = langHelper.lang;
console.log(lang);

const action = args.action || "all";
//运行action来自 Action库 在运行前加载所有脚手架
console.log(lang);
