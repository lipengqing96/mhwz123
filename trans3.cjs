const fs = require("fs");
const deepRpls = [
  ["精选最", ""],
  ["的随身", "portable"],
  ["让你的", "let your"],
  ["是现代人", "is modern"],
  ["更加", "more"],
  ["充电", "charging"],
  ["单人", "single-serve"],
  ["基础", "basic"],
  ["配件", "accessories"],
  ["详细", "detailed"],
  ["是一款", "is a"],
  ["搅拌球", "whisk ball"],
  ["和饮料", "and drinks"],
  ["非常", "very"],
  ["放入包中携带", "carry in your bag"],
  ["足够满足您的常需求", "enough for your daily needs"],
  ["式搅拌杯", "blender cup style"],
  ["的革命性", "revolutionary"],
  ["采用", "features"],
  ["三叶刀片能够轻松粉碎冰块和冷冻水果", "3-blade system easily crushes ice and frozen fruit"],
  ["让您可以", "lets you"],
  ["享受新鲜制作的果汁", "enjoy freshly made juice"],
  ["迷你", "mini"],
  ["以其可爱的外观和紧凑的", "Known for its cute appearance and compact"],
  ["赢得了众多", "won many"],
  ["的喜爱", "fans"],
  ["能够轻松搅拌", "easily blends"],
  ["水果和", "fruits and"],
  ["让您", "let you"],
  ["在评选", "In selecting"],
  ["我们的", "our"],
  ["考虑了多个关键因素", "considered multiple key factors"],
  ["搅拌能力", "blending power"],
  ["能否处理冰块和冷冻水果", "ability to handle ice and frozen fruit"],
  ["电池续航时间", "battery life"],
  ["大小", "size"],
  ["是否", "whether"],
  ["以及", "and"],
  ["我们测试了超过", "We tested over"],
  ["最终选出了这", "finally selected these"],
  ["款最值得", "most worth"],
  ["能打碎冰块吗", "Can it crush ice"],
  ["这取决于", "It depends on"],
  ["的功率", "power"],
  ["等大功率机型可以", "high-power models can"],
  ["等小型机型", "smaller models"],
  ["充电式", "rechargeable"],
  ["可以", "can"],
  ["多少次", "how many times"],
  ["大多数充电式", "Most rechargeable"],
  ["充满电后可以制作", "on a full charge can make"],
  ["次搅拌", "blends"],
  ["具体取决于", "depends on"],
  ["的食材和搅拌时间", "ingredients and blending time"],
  ["建议每", "Recommended every"],
  ["周充电一次", "week"],
  ["如何清洁", "How to clean"],
  ["大多数", "Most"],
  ["对于顽固污渍", "For stubborn stains"],
  ["如果您追求极致的", "If you追求"],
  ["性和充电便利性", "and charging convenience"],
  ["是我们的", "is our"],
  ["它的", "its"],
  ["使其成为", "makes it"],
  ["的不二之选", "top choice"],
  ["对于", "For"],
  ["提供了", "offers"],
  ["便携式搅拌机", "portable blender"],
  ["是近年来", "has been"],
  ["厨房最火爆的小家电之一", "one of the hottest kitchen appliances"],
  ["瑜伽练习中最基础也最重要的装备", "the most basic and important equipment for yoga practice"],
  ["智能速度感应技术可根据按压力度自动调整转速", "Smart speed感应 adjusts automatically"],
  ["多项研究证实站立办公可减少久坐相关疾病风险", "Studies confirm standing desks reduce sedentary risks"],
  ["用户评价普遍称赞其柔软触感和帮助入睡的效果", "Users praise soft touch and sleep aid"],
  ["系列以其超柔软的长绒面料赢得了众多用户喜爱", "Series known for ultra-soft long pile fabric"],
  ["让每个人都能在家中轻松制作咖啡馆品质的咖啡", "Anyone can make cafe-quality coffee at home"],
  ["的多种杯量和冰咖啡功能是日常使用的最佳选择", "Multiple cup sizes and iced coffee function"],
  ["智能感应技术根据灰尘量自动调节吸力", "Smart sensor adjusts suction automatically"],
  ["高端型号的吸力已达到或超过传统有线", "Premium models match or exceed corded vacuums"],
  ["独特的自动断电保护功能确保使用安全", "Auto shut-off ensures safety"],
  ["香气更浓烈但可能破坏精油的有效成分", "Stronger aroma but may degrade essential oils"],
  ["低温环境可以有效延长护肤品保质期", "Cool temperatures extend skincare shelf life"],
  ["度精度和半导体静音技术是最佳选择", "Temperature precision and semiconductor silent tech"],
  ["气动转换器适合已有满意桌面的用户", "Pneumatic converter suits users with existing desk"],
  ["的临床认证和精准重量分布无可替代", "Clinical certification and precise weight distribution"],
  ["是近年来厨房最火爆的小家电之一", "One of the hottest kitchen appliances recently"],
  ["是近年来最受欢迎的波西米亚风格", "Most popular Bohemian style recently"],
  ["波西米亚和斯堪的纳维亚风格家居", "Bohemian and Scandinavian style homes"],
  ["方便快捷但成本较高且产生废弃物", "Convenient but higher cost and waste"],
  ["有宠物的家庭建议选择带有防缠绕滚刷的型号", "Pet families should choose anti-tangle brush"],
  ["但高温烹饪仍可能产生丙烯酰胺等有害物质", "High heat cooking may produce acrylamide"],
  ["其经典的鹅颈壶嘴设计最初为手冲咖啡而生", "Classic gooseneck spout designed for pour-over"],
  ["能让您的饮品在数小时后仍保持理想的温度", "Keeps drinks at ideal temp for hours"],
  ["建议在炎热环境下预冷杯子以获得最佳效果", "Pre-chill cup in hot weather for best results"],
  ["无边界设计让机器人在光滑地面上自由移动", "Boundary-free design allows free movement"],
  ["带有自动集尘功能的型号可以减少人工干预", "Auto-empty model reduces manual intervention"],
  ["的超大台面和气动升降是最优雅的升级方案", "Extra-large top and pneumatic lift most elegant upgrade"],
  ["更经济环保但需要自行控制粉量和研磨度", "More economical and eco-friendly but manual control needed"],
  ["压电声学传感器实时计数并自动调节吸力", "Piezo acoustic sensor counts and adjusts suction"],
  ["大多数扫地机器人可以自动完成清洁任务", "Most robot vacuums auto-complete cleaning"],
  ["近年来在全球范围内掀起了一股助眠热潮", "Recent sleep-aid trend worldwide"],
  ["对于追求性价比和波西米亚风格的用户", "For budget-conscious Bohemian style seekers"],
  ["防污技术使其成为有孩家庭的理想选择", "Stain resistance ideal for families with kids"],
  ["型号可以制作接近传统意式浓缩的咖啡", "Models make near-traditional espresso coffee"],
  ["让您能够快速完成各个角落的清洁工作", "Quickly clean every corner"],
  ["视觉导航和陀螺仪导航等多种技术路线", "Visual and gyroscope navigation options"],
  ["又不会导致精华液等质地过稠难以使用", "Without making serums too thick"],
  ["的冷却加重毯专为容易出汗的用户设计", "Cooling weighted blanket for sweaty users"],
  ["用少量油就能制作出酥脆可口的食物", "Crispy food with minimal oil"],
  ["革命性的双篮设计让烹饪变得更高效", "Revolutionary dual-basket design for efficient cooking"],
  ["超高绒高带来赤脚踩踏的极致舒适感", "Extra high pile for barefoot comfort"],
  ["分钟强劲模式续航足以应对中等户型", "Min high-power mode lasts for medium homes"],
  ["是一款将功能与设计完美融合的高端", "High-end with perfect function-design fusion"],
  ["让您有更多时间享受生活和陪伴家人", "More time to enjoy life and family"],
  ["导航技术可识别不同房间并分区清洁", "Navigation recognizes rooms for zone cleaning"],
  ["可能导致机器人无法通过或吸力不足", "May block robot or reduce suction"],
  ["对于追求扫拖一体和智能导航的用户", "For users wanting sweep-mop and smart nav"],
  ["智能感应技术根据灰尘量自动调节吸力", "Smart sensor adjusts suction by dust amount"],
];
function t(text) {
  let r = text;
  deepRpls.sort((a,b)=>b[0].length-a[0].length).forEach(([c,e])=>{r=r.split(c).join(e)});
  return r;
}
const blogDir=process.cwd()+"/src/pages/blog/";
const files=fs.readdirSync(blogDir).filter(f=>f.endsWith(".astro"));
let total=0;
for(const f of files){
  let c=fs.readFileSync(blogDir+f,"utf8");
  const b=c; c=t(c);
  const m=c.match(/[\u4e00-\u9fff]/g);
  if(m) total+=m.length;
  if(c!==b) fs.writeFileSync(blogDir+f,c,"utf8");
}
console.log("blog remaining:",total);

// Also fix static pages
const staticFiles=[
  "src/pages/index.astro","src/pages/about.astro","src/pages/contact.astro",
  "src/pages/categories/index.astro","src/pages/blog/index.astro",
  "src/pages/privacy.astro","src/pages/terms.astro","src/pages/affiliate-disclosure.astro",
];
let stotal=0;
for(const f of staticFiles){
  const fp=process.cwd()+"/"+f;
  let c=fs.readFileSync(fp,"utf8");
  const b=c; c=t(c);
  const m=c.match(/[\u4e00-\u9fff]/g);
  if(m) stotal+=m.length;
  if(c!==b) fs.writeFileSync(fp,c,"utf8");
}
console.log("static remaining:",stotal);
