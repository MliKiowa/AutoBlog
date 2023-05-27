const fs = require('fs').promises;
const path = require('path');
let lang = null;
async function loadLanguage(languageCode) {
    const data = await fs.readFile(path.join(__dirname, 'Languages', `${languageCode}.json`), 'utf-8');
    return JSON.parse(data);
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
const langCode = args.lang || defaultLang;
const lang = await loadLanguage(langCode);
module.exports = {
  langCode: langCode,
  lang:lang
};

