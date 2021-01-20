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

// All of the above is because docusaurus can't auto generate the sidebar from a directory
// See: https://github.com/facebook/docusaurus/issues/3464

module.exports = {
  someSidebar: {
    Docs: [
      docsSidebar
    ]
  }
};
