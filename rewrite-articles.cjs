const fs = require("fs");
const blogDir = process.cwd() + "/src/pages/blog/";

// Article data with correct English content
const articles = {
  "top-10-best-portable-blenders-smoothies-2026.astro": {
    title: "Top 10 Best Portable Blenders for Smoothies in 2026",
    slugCat: "home-kitchen",
    cat: "Home & Kitchen",
    desc: "From BlenderBottles to NutriBullet Go, discover the lightest portable blenders for on-the-go smoothies.",
    heroImg: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=1200&q=80",
    schemaTitle: "Top 10 Best Portable Blenders for Smoothies 2026",
    schemaDesc: "Comprehensive guide to the best portable blenders including BlenderBottles, NutriBullet Go, PopBabies. Price range $20-$100.",
    date: "August 15, 2026",
    readTime: "8 min read",
    rating: "4.7",
    reviews: "156",
    intro: `Portable blenders have become an essential tool for health-conscious individuals on the go. Whether you are making morning smoothies at the office or protein shakes after the gym, a quality portable blender makes healthy living convenient anywhere.`,
    products: [
      {rank:1, name:"BlenderBottles Sport Blender Bottle", price:"$29.99", rating:5, capacity:"20oz", features:"Leak-proof, WireWhisk ball mixer", pros:["No electricity needed","Easy to clean","Affordable"], cons:["Manual mixing only","Limited to powders and soft foods"]},
      {rank:2, name:"NutriBullet Go Personal Blender", price:"$49.99", rating:5, capacity:"18oz", features:"USB-C rechargeable, 15 blends per charge", pros:["Powerful motor","Rechargeable","Portable"], cons:["Expensive","Small capacity"]},
      {rank:3, name:"PopBabies Mini Portable Blender", price:"$39.99", rating:4, capacity:"13oz", features:"Compact design, 6-blade system", pros:["Cute colors","Lightweight","Affordable"], cons:["Weak for ice","Small capacity"]},
      {rank:4, name:"Hamilton Beach Personal Blender", price:"$24.99", rating:4, capacity:"14oz", features:"Sport mouthpiece lid, one-touch operation", pros:["Very affordable","Easy to use","Dishwasher safe"], cons:["Plastic taste initially","Not rechargeable"]},
      {rank:5, name:"Magic Bullet Blender", price:"$39.99", rating:4, capacity:"24oz", features:"Multiple cup sizes, powerful motor", pros:["Versatile","Powerful","Multiple cups included"], cons:["Bulky","Noise level"]},
    ],
    faq: [["Can portable blenders crush ice?","Yes, but only models with powerful motors like NutriBullet Go and Magic Bullet can handle ice. Smaller models like PopBabies work best with soft fruits."], ["How many blends per charge?","Most rechargeable models deliver 10-20 blends on a full charge, depending on ingredients and blending time. We recommend charging every 2-3 weeks."], ["How to clean a portable blender?","Most portable blenders support self-cleaning: add warm water with a drop of dish soap, blend for 20 seconds. For stubborn residue, soak with baking soda solution."]],
    verdict: "The NutriBullet Go is our top pick for ultimate portability and USB-C convenience. Budget buyers should consider the BlenderBottles Sport for excellent value without needing electricity."
  },
  "top-10-best-led-desk-lamps-work-from-home.astro": {
    title: "Top 10 Best LED Desk Lamps for Work From Home in 2026",
    slugCat: "smart-home",
    cat: "Smart Home",
    desc: "In-depth reviews of top LED desk lamps including BenQ ScreenBar, Xiaomi Mi Home, TaoTronics and more.",
    heroImg: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
    schemaTitle: "Top 10 Best LED Desk Lamps for Work From Home 2026",
    schemaDesc: "Expert reviews of the best LED desk lamps including BenQ ScreenBar, Xiaomi Mi, TaoTronics. Price range $25-$150.",
    date: "August 10, 2026",
    readTime: "10 min read",
    rating: "4.8",
    reviews: "203",
    intro: `A quality desk lamp is essential for anyone working from home. Proper lighting reduces eye strain, improves focus, and creates a professional atmosphere. This guide covers the best LED desk lamps for every budget and workspace.`,
    products: [
      {rank:1, name:"BenQ ScreenBar Halo", price:"$109.95", rating:5, capacity:"Asymmetric optical design", features:"Auto-dimming, spatial lighting, no screen glare", pros:["Zero screen glare","Auto-dimming sensor","Premium build"], cons:["Expensive","Only fits most monitors"]},
      {rank:2, name:"Xiaomi Mi Deskmate LED", price:"$34.99", rating:4, capacity:"Adjustable color temp 2700K-6500K", features:"Touch control, memory function", pros:["Affordable","Memory function"," Sleek design"], cons:["Basic features","No auto-dimming"]},
      {rank:3, name:"TaoTronics LED Desk Lamp", price:"$29.99", rating:4, capacity:"5 brightness levels", features:"5 color modes, USB charging port", pros:["Great value","USB charging port","5 color modes"], cons:["Plastic build","No auto-dimming"]},
      {rank:4, name:"OllieLED Gooseneck Lamp", price:"$44.99", rating:4, capacity:"Flexible gooseneck", features:"Clip-on design, eye-care tech", pros:["Flexible positioning","Clip-on design","Eye-care certified"], cons:["Clip only fits thin desks","Limited brightness range"]},
      {rank:5, name:"DEWENWILS Industrial Lamp", price:"$39.99", rating:4, capacity:"Adjustable arm", features:"Vintage style, dimmable", pros:["Industrial aesthetic","Adjustable arm","Dimmable"], cons:["Bulky","Not ideal for small desks"]},
    ],
    faq: [["What is the best desk lamp for reducing eye strain?","Look for lamps with adjustable color temperature (2700K-6500K) and high CRI (90+). The BenQ ScreenBar Halo and TaoTronics are top choices."], ["LED vs fluorescent desk lamps?","LED lamps are more energy-efficient, last longer (50,000+ hours), and produce less heat. They are the clear winner for desk lighting."], ["Do I need a lamp with USB charging port?","A USB port is convenient for charging phones while working. It is not essential but very practical for modern workspaces."]],
    verdict: "The BenQ ScreenBar Halo is the premium choice for serious remote workers, offering unmatched screen-focused lighting. For budget buyers, the TaoTronics LED offers exceptional value at under $30."
  },
  "top-10-best-yoga-mats-beginners.astro": {
    title: "Top 10 Best Yoga Mats for Beginners in 2026",
    slugCat: "fitness-health",
    cat: "Fitness & Health",
    desc: "Comprehensive comparison of Manduka PRO Lite, Lululemon The Mat, Gaiam and other top yoga mats.",
    heroImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80",
    schemaTitle: "Top 10 Best Yoga Mats for Beginners 2026",
    schemaDesc: "Expert reviews of the best yoga mats for beginners including Manduka PRO Lite, Lululemon The Mat. Price range $30-$120.",
    date: "August 5, 2026",
    readTime: "7 min read",
    rating: "4.6",
    reviews: "189",
    intro: `A good yoga mat is the foundation of any practice. The right mat provides cushioning for joints, grip for stability, and durability for regular use. This guide helps beginners find their perfect yoga mat.`,
    products: [
      {rank:1, name:"Manduka PRO Lite", price:"$88.00", rating:5, capacity:"5mm thick, 71 inches", features:"Closed-cell, lifetime guarantee", pros:["Lifetime guarantee","Closed-cell prevents bacteria","Excellent grip"], cons:["Heavy for travel","Requires break-in period"]},
      {rank:2, name:"Lululemon The Mat 5mm", price:"$78.00", rating:5, capacity:"5mm thick, 71 inches", features:"Natural rubber, antimicrobial", pros:["Natural rubber","Antimicrobial additive","Great grip"], cons:["Expensive","Strong rubber smell initially"]},
      {rank:3, name:"Gaiam Premium Yoga Mat", price:"$39.98", rating:4, capacity:"6mm thick", features:"Non-slip, eco-friendly PVC", pros:["Very affordable","Good cushioning","Eco-friendly materials"], cons:["Less durable than premium options","Slippery when wet"]},
      {rank:4, name:"Jade Yoga Harmony Mat", price:"$79.95", rating:5, capacity:"5mm thick, 68 inches", features:"Natural rubber, made in USA", pros:["Made in USA","Eco-friendly","Excellent grip"], cons:["Shorter length","Heavy"]},
      {rank:5, name:"Manduka PRO", price:"$120.00", rating:5, capacity:"6mm thick", features:"Extra cushioning, dense support", pros:["Maximum cushioning","Lifetime guarantee","Professional grade"], cons:["Very expensive","Heavy","Requires break-in"]},
    ],
    faq: [["What thickness yoga mat is best for beginners?","5mm is ideal for most beginners enough cushioning for joints without sacrificing balance. Thicker 6-8mm mats suit those with knee sensitivity."], ["How to break in a new yoga mat?","Wipe with a damp cloth and salt scrub. Practice poses on both sides. Natural rubber mats improve grip with use."], ["Should I choose PVC or natural rubber?","Natural rubber offers better grip and is eco-friendly. PVC is more affordable and durable. Both work well for beginners."]],
    verdict: "The Manduka PRO Lite offers the best combination of performance, durability, and lifetime guarantee. Budget-conscious beginners should consider the Gaiam Premium for excellent value at under $40."
  },
};

// Write articles that have templates
for (const [filename, data] of Object.entries(articles)) {
  const filepath = blogDir + filename;
  if (!fs.existsSync(filepath)) continue;
  let content = fs.readFileSync(filepath, "utf8");
  
  // Replace key fields
  content = content.replace(/name: "[^"]*"/, `name: "${data.schemaTitle}"`);
  content = content.replace(/reviewBody: "[^"]*"/, `reviewBody: "${data.schemaDesc}"`);
  content = content.replace(/title="[^"]* - LuxeRank"/, `title="${data.title} - LuxeRank"`);
  content = content.replace(/description="[^"]*"/, `description="${data.schemaDesc}"`);
  content = content.replace(/2026年[\d]+月[\d]+日/, data.date);
  content = content.replace(/[\d]+分钟阅读/, data.readTime);
  content = content.replace(/4\.\d+\/5 \([\d]+条评价\)/, `${data.rating}/5 (${data.reviews} ratings)`);
  content = content.replace(/<span class="inline-block font-inter text-xs bg-gold-primary[^>]*>[^<]+<\/span>/, `<span class="inline-block font-inter text-xs bg-gold-primary text-dark-bg px-4 py-1 rounded-full font-semibold mb-4">${data.cat}</span>`);
  content = content.replace(/<h1[^>]*>[^<]+<\/h1>/, `<h1 class="font-playfair text-4xl md:text-5xl font-bold text-dark-bg leading-tight mb-4">${data.title}</h1>`);
  content = content.replace(/alt="hero"/, `alt="${data.title}"`);
  content = content.replace(/src="https:\/\/images.unsplash.com\/[^"]*"/, `src="${data.heroImg}"`);
  
  fs.writeFileSync(filepath, content, "utf8");
  console.log("updated:", filename);
}
console.log("Done rewriting article templates");
