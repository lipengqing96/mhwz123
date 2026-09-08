const fs = require('fs');
const blogDir = 'src/pages/blog/';

function reviewCard(num, product, pros, cons) {
  const prosHtml = pros.map(p => 
    '<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D5A4C" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span class="font-inter text-sm text-secondary">' + p + '</span></div>'
  ).join('');
  const consHtml = cons.map(p =>
    '<div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg><span class="font-inter text-sm text-secondary">' + p + '</span></div>'
  ).join('');
  const stars = "\u2605".repeat(product.rating) + "\u2606".repeat(5 - product.rating);
  return '<div class="bg-cream rounded-2xl p-8">\n            <div class="flex items-start gap-4 mb-4">\n              <span class="font-playfair text-4xl font-bold text-gold-primary">' + num + '</span>\n              <div class="flex-1">\n                <h3 class="font-playfair text-xl font-bold text-dark-bg mb-2">' + product.name + '</h3>\n                <div class="flex items-center gap-2 mb-3">\n                  <span class="text-gold-primary">' + stars + '</span>\n                  <span class="font-inter text-sm text-muted">|</span>\n                  <span class="font-inter text-sm text-gold-primary font-semibold">' + product.price + '</span>\n                </div>\n              </div>\n            </div>\n            <p class="font-inter text-secondary leading-relaxed mb-4">' + product.desc + '</p>\n            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">\n              ' + prosHtml + '\n              ' + consHtml + '\n            </div>\n            <a href="#" class="inline-flex items-center gap-2 btn-gold text-sm">Check Price on Amazon &rarr;</a>\n          </div>';
}

// Write Astro file directly with hardcoded values
function genArticle(data) {
  const tblRows = data.products.map(p =>
    '<tr class="hover:bg-cream transition-colors">' +
    '<td class="px-4 py-4"><span class="font-bold text-gold-primary">#' + p.rank + '</span></td>' +
    '<td class="px-4 py-4 font-semibold">' + p.name + '</td>' +
    '<td class="px-4 py-4">' + p.price + '</td>' +
    '<td class="px-4 py-4">' + p.cap + '</td>' +
    '<td class="px-4 py-4"><span class="text-gold-primary">' + "\u2605".repeat(p.rating) + "\u2606".repeat(5-p.rating) + '</span></td>' +
    '<td class="px-4 py-4 text-secondary">' + p.feat + '</td></tr>'
  ).join('\n');
  const reviews = data.reviews.map((r, i) => reviewCard(i + 1, r.product, r.pros, r.cons)).join('\n        ');
  const faqs = data.faq.map(function(f) {
    return '<div class="bg-cream rounded-xl p-6">' +
    '<h3 class="font-playfair font-semibold text-lg text-dark-bg mb-2">Q: ' + f[0] + '</h3>' +
    '<p class="font-inter text-secondary">' + f[1] + '</p></div>';
  }).join('\n          ');

  var esc = function(s) { return s.replace(/"/g, '\\"').replace(/\n/g, '\\n'); };

  // Build the schema JSON string with actual values (no ${} expressions)
  var schemaStr = '{"@context":"https://schema.org","@type":"Review","name":"' + esc(data.title) + '","reviewBody":"' + esc(data.schemaDesc) + '","author":{"@type":"Organization","name":"LuxeRank Editorial Team"},"datePublished":"' + data.date + '","dateModified":"' + data.date + '","reviewRating":{"@type":"Rating","ratingValue":"' + data.rating + '","bestRating":"5"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"' + data.rating + '","reviewCount":"' + data.reviews + '"}}';

  // Build the HTML body with Astro expressions
  var html = '<div class="mb-8" data-aos="fade-up">\n        <span class="inline-block font-inter text-xs bg-gold-primary text-dark-bg px-4 py-1 rounded-full font-semibold mb-4">' + data.cat + '</span>\n        <h1 class="font-playfair text-4xl md:text-5xl font-bold text-dark-bg leading-tight mb-4">' + data.title + '</h1>\n        <div class="flex items-center gap-4 font-inter text-sm text-muted">\n          <span>' + data.date + '</span><span>&bull;</span><span>' + data.readTime + '</span><span>&bull;</span>\n          <span class="flex items-center gap-1 text-gold-primary"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>' + data.rating + '/5 (' + data.reviews + ' ratings)</span>\n        </div>\n      </div>\n      <div class="rounded-2xl overflow-hidden h-64 md:h-96 mb-12 relative group" data-aos="fade-up">\n        <img src="' + data.heroImg + '" alt="' + esc(data.title) + '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />\n        <div class="absolute inset-0 bg-gradient-to-t from-dark-bg/30 to-transparent"></div>\n      </div>\n      <div class="prose prose-lg max-w-none" data-aos="fade-up">\n        <p class="font-inter text-secondary leading-loose text-lg mb-6">' + data.intro + '</p>\n        <h2 class="font-playfair text-2xl font-bold text-dark-bg mt-12 mb-6 flex items-center gap-3"><span class="w-8 h-px bg-gold-primary"></span>Product Comparison Table</h2>\n        <div class="overflow-x-auto mb-12"><table class="w-full font-inter text-sm"><thead><tr class="bg-cream">\n          <th class="px-4 py-3 text-left font-semibold text-dark-bg">Rank</th>\n          <th class="px-4 py-3 text-left font-semibold text-dark-bg">Product Name</th>\n          <th class="px-4 py-3 text-left font-semibold text-dark-bg">Price</th>\n          <th class="px-4 py-3 text-left font-semibold text-dark-bg">Key Specs</th>\n          <th class="px-4 py-3 text-left font-semibold text-dark-bg">Rating</th>\n          <th class="px-4 py-3 text-left font-semibold text-dark-bg">Key Features</th>\n        </tr></thead><tbody class="divide-y divide-border">\n' + tblRows + '\n        </tbody></table></div>\n        <h2 class="font-playfair text-2xl font-bold text-dark-bg mt-12 mb-6 flex items-center gap-3"><span class="w-8 h-px bg-gold-primary"></span>Detailed Reviews</h2>\n        <div class="space-y-12">\n        ' + reviews + '\n        </div>\n        <h2 class="font-playfair text-2xl font-bold text-dark-bg mt-12 mb-6 flex items-center gap-3"><span class="w-8 h-px bg-gold-primary"></span>How We Chose</h2>\n        <p class="font-inter text-secondary leading-loose mb-6">' + data.methodology + '</p>\n        <h2 class="font-playfair text-2xl font-bold text-dark-bg mt-12 mb-6 flex items-center gap-3"><span class="w-8 h-px bg-gold-primary"></span>FAQ</h2>\n        <div class="space-y-6">\n          ' + faqs + '\n        </div>\n        <div class="mt-12 p-8 bg-gradient-to-r from-gold-primary/10 to-gold-light/10 rounded-2xl border-l-4 border-gold-primary"><h2 class="font-playfair text-2xl font-bold text-dark-bg mb-4">Final Verdict</h2><p class="font-inter text-secondary leading-relaxed mb-4">' + data.verdict + '</p><div class="flex flex-wrap gap-3 mt-6"><a href="#" class="btn-gold text-sm">Check Price on Amazon</a><a href="/blog" class="btn-gold-outline text-sm">More Reviews</a></div></div>\n      </div>';

  var full = '---\nimport BaseLayout from \'../../layouts/BaseLayout.astro\';\nimport Header from \'../../components/Header.astro\';\nimport Footer from \'../../components/Footer.astro\';\n\nconst schema = ' + schemaStr + ';\n---\n<BaseLayout title="' + esc(data.title) + ' - LuxeRank" description="' + esc(data.schemaDesc) + '">\n  <fragment slot="header"><Header /></fragment>\n  <fragment slot="footer"><Footer /></fragment>\n  <script type="application/ld+json">{JSON.stringify(schema)}</script>\n  <article class="py-16 bg-white">\n    <div class="max-w-4xl mx-auto px-6">\n      ' + html + '\n    </div>\n  </article>\n</BaseLayout>';

  return full;
}
module.exports = { genArticle: genArticle };
