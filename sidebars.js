const fs = require('fs');
const path = require('path');

const docsPath = './docs';

const aToZ = (dir) => {
  let dirFiles = [];
  let dirPath = path.join(docsPath, dir);

  fs.readdirSync(dirPath).forEach(file => {
    dirFiles.push(`${dir}/${path.parse(file).name}`);
  });

  return dirFiles
}

// All of the above is because docusaurus can't auto generate the sidebar from a directory
// See: https://github.com/facebook/docusaurus/issues/3464


module.exports = {
  someSidebar: {
    'Getting Started': [
      'getting-started/introduction',
      'getting-started/principles',
      'getting-started/accessibility',
      'getting-started/working-with-nucleus',
      'getting-started/our-process',
      'getting-started/brand',
      'getting-started/design-tokens'
    ],
    'Foundations': [
      'foundations/names-of-things',
      'foundations/typography',
      'foundations/lists',
      'foundations/colours',
      'foundations/modular-scale',
      'foundations/viewports',
      'foundations/structure',
      'foundations/photography',
      'foundations/icons',
      'foundations/illustrations'
    ],
    'Components': aToZ('components'),
    'Patterns': [
      'patterns/journeys',
      'patterns/asking-for-information',
      'patterns/experiences',
      'patterns/loading',
      'patterns/messaging',
      'patterns/telephone-numbers'
    ],
    'Page types': aToZ('page-types'),
    'Community': [
      'community/working-agreement',
      'community/contribute-to-nucleus',
      'community/vanilla-first',
      'community/contribute-to-documentation',
      'community/events',
      'community/releases'
    ],
  }
};