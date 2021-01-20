const fs = require('fs');
const path = require('path');

const docsPath = './docs';
const dirsToIncludeInSideBar = ['community','components','foundations','getting-started','page-types','patterns']; // order of these matters
let docsSidebar = {};

const prettyFileName = (fileName) => {
  return fileName.replace(/^./, str => str.toUpperCase()).replace(/-/g, ' ');
}

dirsToIncludeInSideBar.forEach(dir => {
  let dirPath = path.join(docsPath, dir);
  let dirFiles = [];

  fs.readdirSync(dirPath).forEach(file => {
    dirFiles.push(`${dir}/${path.parse(file).name}`);
  });

  docsSidebar[prettyFileName(dir)] = dirFiles;
});

module.exports = {
  someSidebar: {
    Docs: [
      docsSidebar
    ]
  }
};
