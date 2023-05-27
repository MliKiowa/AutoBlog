var fs = require('fs');
function loadLanguageFile(languageCode) {
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
// 解析命令行参数
const args = minimist(process.argv.slice(2));
// 获取语言参数，如果没有则默认为 'en'
const langCode = args.lang || defaultLang;
global.lang = loadLanguageFile(langCode);


