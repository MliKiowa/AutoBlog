const fs = require('fs').promises;
const path = require('path');
const minimist = require('minimist');
let lang = null;
async function loadLanguage(languageCode) {
  try {
    const data = await fs.readFile(
      path.join(__dirname, 'Languages', `${languageCode}.json`),
      'utf-8'
    );
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading langauge file for ${languageCode}: ${error}`);
    return undefined;
  }
}
const defaultLang= 'zh-cn';
if (process.argv.length <= 2) {
  console.log('No command line arguments provided.');
}
const args = minimist(process.argv.slice(2));
const langCode = args.lang || defaultLang;
const lang = await loadLanguage(langCode);
module.exports = {
  langCode: langCode,
  lang:lang
};

