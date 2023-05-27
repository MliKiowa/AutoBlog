var fs = require('fs');
function loadLanguage(languageCode) {
  try {
    const data = fs.readFileSync(`./Languages/${languageCode}.json`);
    const language = JSON.parse(data);
    return language;
  } catch (error) {
    console.error(`Error loading language file for ${languageCode}: ${error}`);
    return undefined;
  }
}
const defaultLang= 'zh-cn'; // 语言代码，例如 'en' 表示英语
const minimist = require('minimist');
if (process.argv.length <= 2) {
  // 处理没有传递任何参数的情况
  console.log('No command line arguments provided.');
} 
// 解析命令行参数
const args = minimist(process.argv.slice(2));
// 获取语言参数，如果没有则默认为 'zh-cn'
global.langCode = args.lang || defaultLang;
global.lang = loadLanguage(langCode);
// 挂载语言到 Global
const action = args.action || "all";
//运行action来自 Action库 在运行前加载所有脚手架
