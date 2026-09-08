const fs = require("fs");
const rpls = [
  ["但有助于支持我们继续提供免费的产品评测内容","but helps support our continued free product review content"],
  ["如果您不同意本条款的任何部分","if you do not agree with any part of these terms"],
  ["存储和保护您的个人信息","store and protect your personal information"],
  ["网站即表示您同意遵守本","website means you agree to be bound by"],
  ["本网站包含联盟营销链接","This website contains affiliate marketing links"],
  ["这不会影响您的购买价格","This will not affect your purchase price"],
  ["说明了我们如何收集","explains how we collect"],
  ["我们可能会收集您的","We may collect your"],
  ["我们可能会获得佣金","we may earn a commission"],
  ["欢迎通过以下方式","feel free to reach out through"],
  ["请勿使用本网站","please do not use this website"],
  ["链接购买商品时","when purchasing through links"],
  ["您享有的权利","the rights you enjoy"],
  ["或参与调查时","or participate in surveys"],
  ["全方位对比","comprehensive comparison"],
  ["如果您对本","If you have any questions about"],
  ["有任何疑问","any questions"],
  ["访问和使用","Accessing and using"],
  ["石头科技","Roborock"],
  ["小型厨房","small kitchen"],
  ["精准控温","precise temperature control"],
  ["全站立式","Full Standing"],
  ["最后更新","Last updated"],
  ["当您订阅","When you subscribe"],
  ["电子邮件","email address"],
  ["当您通过","When you"],
  ["等性价比之选","and other cost-effective options"],
  ["等热门","and other popular"],
  ["飞利浦","Philips"],
  ["等信息","and other information"],
  ["请通过","please contact us at"],
  ["台灯","desk lamp"],
  ["潜在","potential"],
  ["浏览","Browse"],
  ["戴森","Dyson"],
  ["鲨客","Shark"],
  ["添可","Tineco"],
  ["测评","review"],
  ["文章","article"],
  ["使用","use"],
  ["通讯","newsletter"],
  ["声明","statement"],
];
function t(text) {
  let r = text;
  rpls.sort((a,b)=>b[0].length-a[0].length).forEach(([c,e])=>{r=r.split(c).join(e)});
  return r;
}
const files=[
  "src/pages/index.astro","src/pages/about.astro","src/pages/contact.astro",
  "src/pages/categories/index.astro","src/pages/blog/index.astro",
  "src/pages/privacy.astro","src/pages/terms.astro","src/pages/affiliate-disclosure.astro",
];
for(const f of files){
  let c=fs.readFileSync(f,"utf8");
  const b=c; c=t(c);
  if(c!==b){fs.writeFileSync(f,c,"utf8"); console.log("fixed "+f.split("/").pop());}
}
let total=0;
for(const f of files){const c=fs.readFileSync(f,"utf8"); const m=c.match(/[\u4e00-\u9fff]/g); if(m)total+=m.length;}
console.log("static remaining:",total);
