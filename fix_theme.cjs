const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Custom replacements
  if (file === 'Navbar.jsx') {
    content = content.replace(/bg-\[#5C3A21\]/g, 'bg-white shadow-sm border-b border-gray-100');
    content = content.replace(/text-white/g, 'text-text-main');
    content = content.replace(/text-orange-200/g, 'text-text-muted');
    content = content.replace(/text-orange-100 hover:text-white/g, 'text-text-main hover:text-punjabi-saffron');
    content = content.replace(/bg-earthy-brown/g, 'bg-white border-b border-gray-100');
  }
  
  if (file === 'Reviews.jsx') {
    content = content.replace(/bg-earthy-brown/g, 'bg-white');
    content = content.replace(/text-white/g, 'text-text-main');
    content = content.replace(/bg-white\/10/g, 'bg-gray-50 border border-gray-100');
    content = content.replace(/text-white\/60/g, 'text-text-muted');
    content = content.replace(/text-white\/50/g, 'text-text-muted');
    content = content.replace(/border-white\/20/g, 'border-gray-200');
    content = content.replace(/bg-white\/20/g, 'bg-gray-200');
    content = content.replace(/hover:bg-white/g, 'hover:bg-gray-100');
    content = content.replace(/hover:text-earthy-brown/g, 'hover:text-text-main');
  }
  
  if (file === 'Footer.jsx') {
    content = content.replace(/bg-earthy-brown/g, 'bg-white border-t border-gray-100');
    content = content.replace(/text-cream-bg\/60/g, 'text-text-muted');
    content = content.replace(/text-cream-bg\/70/g, 'text-text-muted');
    content = content.replace(/text-cream-bg\/50/g, 'text-text-muted');
    content = content.replace(/text-cream-bg/g, 'text-text-main');
    content = content.replace(/border-cream-bg\/20/g, 'border-gray-200');
    content = content.replace(/border-cream-bg\/10/g, 'border-gray-100');
  }
  
  if (file === 'About.jsx') {
    content = content.replace(/bg-earthy-brown text-white/g, 'bg-gray-50 border border-gray-100 text-text-main');
  }

  fs.writeFileSync(filePath, content, 'utf8');
}
