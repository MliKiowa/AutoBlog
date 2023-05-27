const fs = require('fs');
const path = require('path');
var lang = null;
var langCode = null;
function loadLanguage(languageCode) {
  try {
    langCode = languageCode;
    const data = fs.readFileSync(
      path.join(__dirname, 'Languages', `${languageCode}.json`),
      'utf-8'
    );
    lang = JSON.parse(data);
    console.log(lang);
  } catch (error) {
    console.error(`Error loading langauge file for ${languageCode}: ${error}`);
    return undefined;
  }
}
module.exports = {
  loadLanguage: loadLanguage,
  langCode: () => langCode,
  lang: () => lang
};
