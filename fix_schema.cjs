const fs = require('fs');

// Fix portable blenders
let c = fs.readFileSync('src/pages/blog/top-10-best-portable-blenders-smoothies-2026.astro', 'utf8');
c = c.replace("name: '2026portable blenderTop10'", 'name: "Top 10 Best Portable Blenders for Smoothies in 2026"');
c = c.replace('reviewBody: \'This article features10Bestportable blender,includingBlenderBottles,NutriBullet Go,PopBabiesand other popular brands,Price range: 20-100USD.\'', 'reviewBody: "This article features the 10 best portable blenders of 2026, including BlenderBottles, NutriBullet Go, PopBabies and other popular brands. Price range: $20-$100."');
fs.writeFileSync('src/pages/blog/top-10-best-portable-blenders-smoothies-2026.astro', c);
console.log('Fixed blenders');

// Fix yoga mats
c = fs.readFileSync('src/pages/blog/top-10-best-yoga-mats-beginners.astro', 'utf8');
c = c.replace("name: '2026yoga matTop10:newbiebeginnerguide'", 'name: "Top 10 Best Yoga Mats for Beginners in 2026"');
c = c.replace('reviewBody: \'This article features10Bestportable blender,includingBlenderBottles,NutriBullet Go,PopBabiesand other popular brands,Price range: 20-100USD.\'', 'reviewBody: "This article features the 10 best yoga mats for beginners of 2026, including Manduka PRO Lite, Lululemon The Mat, Gaiam and Jade Yoga. Price range: $25-$140."');
fs.writeFileSync('src/pages/blog/top-10-best-yoga-mats-beginners.astro', c);
console.log('Fixed yoga mats');

// Fix LED desk lamps
c = fs.readFileSync('src/pages/blog/top-10-best-led-desk-lamps-work-from-home.astro', 'utf8');
c = c.replace("name: '2026LED desk lampTop10'", 'name: "Top 10 Best LED Desk Lamps for Work From Home in 2026"');
c = c.replace('reviewBody: \'This article features10Bestportable blender,includingBlenderBottles,NutriBullet Go,PopBabiesand other popular brands,Price range: 20-100USD.\'', 'reviewBody: "This article features the 10 best LED desk lamps of 2026, including BenQ ScreenBar, Xiaomi Mi Home, TaoTronics and OllieLED. Price range: $30-$150."');
fs.writeFileSync('src/pages/blog/top-10-best-led-desk-lamps-work-from-home.astro', c);
console.log('Fixed LED lamps');

// Fix essential oil diffusers
c = fs.readFileSync('src/pages/blog/top-10-best-essential-oil-diffusers.astro', 'utf8');
c = c.replace('headline:"2026essential oil diffuserTop10"', 'headline:"Top 10 Best Essential Oil Diffusers in 2026"');
c = c.replace('description:"URPOWER,Innogear,ASAKUKI, and morebrandin-depth review,.Price range: 20-80USD."', 'description:"Comprehensive guide to the best essential oil diffusers, featuring URPOWER, Innogear, ASAKUKI, Muji, and doTERRA. Price range: $20-$80."');
fs.writeFileSync('src/pages/blog/top-10-best-essential-oil-diffusers.astro', c);
console.log('Fixed diffusers');
