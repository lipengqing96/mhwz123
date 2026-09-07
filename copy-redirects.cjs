const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, 'src', 'pages', '_redirects');
const dest = path.join(__dirname, 'dist', '_redirects');
if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Copied _redirects to dist/');
} else {
  console.log('_redirects not found, skipping');
}

