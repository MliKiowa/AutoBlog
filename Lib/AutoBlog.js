var langHelper = require("../lang.js");
var lang = langHelper.lang();
function runShellScript(scriptName, callback) {
  const { exec } = require('child_process');
  const path = require('path'); 
  const scriptPath = path.join(__dirname, '../Script', scriptName);
  exec(`sh ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
      callback(lang["error"]+`：${error}`);
      return;
    }
    callback(null, {
      stdout: stdout,
      stderr: stderr
    });
  });
}
function method2() {
  console.log('这是方法2');
}
module.exports = {
  langHelper,
  method2
};
