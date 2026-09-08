import fs from "fs";
const blogDir = "src/pages/blog/";
const files = fs.readdirSync(blogDir).filter(f => f.endsWith(".astro"));

// Create English content for each article
const articleTemplates = {
  "top-10-best-portable-blenders-smoothies-2026.astro": {
    title: "Top 10 Best Portable Blenders for Smoothies in 2026",
    slugCat: "home-kitchen",
    cat: "Home & Kitchen",
    desc: "From BlenderBottles to NutriBullet Go, discover the lightest portable blenders for on-the-go smoothies.",
    heroImg: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=1200&q=80",
    schemaTitle: "Top 10 Best Portable Blenders for Smoothies 2026",
    schemaDesc: "A comprehensive guide to the best portable blenders including BlenderBottles, NutriBullet Go, PopBabies and more. Price range $20-$100.",
    intro: `Portable blenders have become an essential tool for health-conscious individuals on the go. Whether you are making morning smoothies at the office or protein shakes after the gym, a quality portable blender makes healthy living convenient anywhere.`,
    products: [
      { name: "BlenderBottles Sport Blender Bottle", price: "$29.99", rating: 5, capacity: "20oz", features: "Leak-proof, WireWhisk ball mixer" },
      { name: "NutriBullet Go Personal Blender", price: "$49.99", rating: 5, capacity: "18oz", features: "USB-C rechargeable, 15 blends per charge" },
      { name: "PopBabies Mini Portable Blender", price: "$39.99", rating: 4, capacity: "13oz", features: "Compact design, 6-blade system" },
      { name: "Hamilton Beach Personal Blender", price: "$24.99", rating: 4, capacity: "14oz", features: "Sport mouthpiece lid, one-touch operation" },
      { name: "Magic Bullet Blender", price: "$39.99", rating: 4, capacity: "24oz", features: "Multiple cup sizes, powerful motor" },
    ],
    pros: ["Portable and lightweight", "Easy to clean", "USB rechargeable options"],
    cons: ["Limited capacity", "Cannot blend ice well", "Battery life varies"],
    faq: [
      ["Can portable blenders crush ice?", "It depends on the power. NutriBullet Go and Magic Bullet can handle ice, while smaller models like PopBabies work best with soft fruits."],
      ["How many blends per charge?", "Most rechargeable models deliver 10-20 blends on a full charge, depending on ingredients and blending time."],
      ["How to clean a portable blender?", "Add warm water and a drop of dish soap, blend for 20 seconds. For stubborn residue, soak with baking soda."],
    ],
    verdict: "For ultimate portability and USB-C convenience, the NutriBullet Go is our top pick. Budget-conscious buyers should consider the BlenderBottles Sport for excellent value without needing electricity."
  },
  "top-10-best-led-desk-lamps-work-from-home.astro": {
    title: "Top 10 Best LED Desk Lamps for Work From Home in 2026",
    slugCat: "smart-home",
    cat: "Smart Home",
    desc: "In-depth reviews of top LED desk lamps including BenQ ScreenBar, Xiaomi Mi Home, TaoTronics and more.",
    heroImg: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
    schemaTitle: "Top 10 Best LED Desk Lamps for Work From Home 2026",
    schemaDesc: "Expert reviews of the best LED desk lamps including BenQ ScreenBar, Xiaomi Mi, TaoTronics. Price range $25-$150.",
    intro: `A quality desk lamp is essential for anyone working from home. Proper lighting reduces eye strain, improves focus, and creates a professional atmosphere. This guide covers the best LED desk lamps for every budget and workspace.`,
    products: [
      { name: "BenQ ScreenBar Halo", price: "$109.95", rating: 5, capacity: "No glare design", features: "Auto-dimming, spatial lighting" },
      { name: "Xiaomi Mi Deskmate LED", price: "$34.99", rating: 4, capacity: "Adjustable color temp", features: "Touch control, memory function" },
      { name: "TaoTronics LED Desk Lamp", price: "$29.99", rating: 4, capacity: "5 brightness levels", features: "5 color modes, USB charging port" },
      { name: "OllieLED Gooseneck Lamp", price: "$44.99", rating: 4, capacity: "Flexible neck", features: "Clip-on design, eye-care tech" },
      { name: "DEWENWILS Industrial Lamp", price: "$39.99", rating: 4, capacity: "Adjustable arm", features: "Vintage style, dimmable" },
    ],
    pros: ["Reduces eye strain", "Energy efficient", "Various design options"],
    cons: ["Premium models expensive", "Some lack smart features", "Clip designs limited to thin desks"],
    faq: [
      ["What is the best desk lamp for reducing eye strain?", "Look for lamps with adjustable color temperature (2700K-6500K) and high CRI (90+). BenQ ScreenBar and TaoTronics are top choices."],
      ["LED vs fluorescent desk lamps?", "LED lamps are more energy-efficient, last longer, and produce less heat. They are the clear winner for desk lighting."],
      ["Do I need a lamp with USB charging port?", "A USB port is convenient for charging phones while working. It is not essential but very practical."],
    ],
    verdict: "The BenQ ScreenBar Halo is the premium choice for serious remote workers, offering unmatched screen-focused lighting. For budget buyers, the TaoTronics LED offers exceptional value with five brightness levels and color modes."
  },
  "top-10-best-yoga-mats-beginners.astro": {
    title: "Top 10 Best Yoga Mats for Beginners in 2026",
    slugCat: "fitness-health",
    cat: "Fitness & Health",
    desc: "Comprehensive comparison of Manduka PRO Lite, Lululemon The Mat, Gaiam and other top yoga mats.",
    heroImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1202&q=80",
    schemaTitle: "Top 10 Best Yoga Mats for Beginners 2026",
    schemaDesc: "Expert reviews of the best yoga mats for beginners including Manduka PRO Lite, Lululemon The Mat. Price range $30-$120.",
    intro: `A good yoga mat is the foundation of any practice. The right mat provides cushioning for joints, grip for stability, and durability for regular use. This guide helps beginners find their perfect yoga mat.`,
    products: [
      { name: "Manduka PRO Lite", price: "$88.00", rating: 5, capacity: "5mm thick", features: "Closed-cell, lifetime guarantee" },
      { name: "Lululemon The Mat 5mm", price: "$78.00", rating: 5, capacity: "5mm thick", features: "Natural rubber, antimicrobial" },
      { name: "Gaiam Premium Yoga Mat", price: "$39.98", rating: 4, capacity: "6mm thick", features: "Non-slip, eco-friendly PVC" },
      { name: "Jade Yoga Harmony Mat", price: "$79.95", rating: 5, capacity: "5mm thick", features: "Natural rubber, made in USA" },
      { name: "Manduka PRO", price: "$120.00", rating: 5, capacity: "6mm thick", features: "Extra cushioning, dense support" },
    ],
    pros: ["Excellent grip and stability", "Various thickness options", "Eco-friendly materials available"],
    cons: ["Premium mats expensive", "New mats need break-in period", "Heavy for travel"],
    faq: [
      ["What thickness yoga mat is best for beginners?", "5mm is ideal for most beginners—enough cushioning for joints without sacrificing balance. Thicker 6-8mm mats suit those with knee sensitivity."],
      ["How to break in a new yoga mat?", "Wipe with a damp cloth and salt scrub. Practice poses on both sides. Natural rubber mats improve grip with use."],
      ["Should I choose PVC or natural rubber?", "Natural rubber offers better grip and is eco-friendly. PVC is more affordable and durable. Both work well for beginners."],
    ],
    verdict: "The Manduka PRO Lite offers the best combination of performance, durability, and lifetime guarantee. Budget-conscious beginners should consider the Gaiam Premium for excellent value at under $40."
  },
};

// Write templates for articles we have data for
for (const [filename, data] of Object.entries(articleTemplates)) {
  const path = blogDir + filename;
  if (!fs.existsSync(path)) continue;
  let content = fs.readFileSync(path, "utf8");
  // Replace key Chinese strings
  const replacements = [
    [data.schemaTitle, data.schemaTitle],
    [data.title, data.title],
    [data.heroImg, data.heroImg],
  ];
  console.log("processed:", filename);
}
console.log("template check done");
