const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  demoDist: resolveApp('demo/dist'),
  demoSrc: resolveApp('demo/src'),
  demoHtml: resolveApp('public/index.html'),
  appStylelint: resolveApp('.stylelintrc'),
};
