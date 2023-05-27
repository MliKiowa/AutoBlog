var langHelper = require("./lang.js");
const args = minimist(process.argv.slice(2));
const langCode = args.lang || defaultLang;
// 语言加载
langHelper.loadLanguage(langCode);
var lang = langHelper.lang;
const action = args.action || "all";
//运行action来自 Action库 在运行前加载所有脚手架
