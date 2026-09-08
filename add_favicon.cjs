const fs = require('fs');
let c = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
const newTitle = '<title>{title} - LuxeRank</title>\n    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />\n    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />';
c = c.replace('<title>{title} - LuxeRank</title>', newTitle);
fs.writeFileSync('src/layouts/BaseLayout.astro', c);
console.log('Favicon links added to BaseLayout');
