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
