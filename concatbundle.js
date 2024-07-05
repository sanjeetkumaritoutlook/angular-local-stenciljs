const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/web-components/main-es5.js',
    './dist/web-components/main-es2015.js',
    './dist/web-components/polyfills-es5.js',
    './dist/web-components/polyfills-es2015.js',
    './dist/web-components/runtime-es5.js',
    './dist/web-components/runtime-es2015.js',
    './dist/web-components/vendor-es5.js',
    './dist/web-components/vendor-es2015.js',
  ];

  await fs.ensureDir('elements');

  await concat(files, 'elements/fluid-element.js');
})();
