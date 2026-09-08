import fs from "fs";
const base = "D:/下载文件/指纹浏览器/网站（豪华）/luxerank";
const replacements = [
  ["首页", "Home"],
  ["分类", "Categories"],
  ["关于我们", "About Us"],
  ["联系我们", "Contact"],
  ["博客", "Blog"],
  ["开始阅读", "Read Reviews"],
  ["返回顶部", "Back to Top"],
  ["查看全部文章", "View All Articles"],
  ["← 查看全部文章", "← View All Articles"],
  ["分钟阅读", "min read"],
  ["阅读更多", "Read More"],
  ["查看更多评测", "More Reviews"],
  ["浏览分类", "Browse Categories"],
  ["查看精选", "View Picks"],
  ["探索世界顶级产品，为品味卓越的生活方式甄选经典之作。", "Curated reviews and expert insights for discerning lifestyles."],
  ["团队故事", "Our Team"],
  ["编辑流程", "Editorial Process"],
  ["使命愿景", "Our Mission"],
  ["快速链接", "Quick Links"],
  ["法律声明", "Legal"],
  ["隐私政策", "Privacy Policy"],
  ["服务条款", "Terms of Service"],
  ["联盟营销披露", "Affiliate Disclosure"],
  ["作为亚马逊联盟会员，我们通过合格购买赚取佣金。所有推荐均为独立且公正的。", "As an Amazon Associate we earn from qualifying purchases. All reviews are independent and unbiased."],
  ["TRUSTED REVIEWS SINCE 2026", "TRUSTED REVIEWS SINCE 2026"],
  ["探索世界<br/>顶级产品", "Discover the World'"'s Best Products"],
  ["精选评论，专家见解，为品味卓越的生活方式甄选的经典之作。", "Curated reviews, expert insights, and hand-picked picks for discerning lifestyles."],
  ["按类别浏览", "Browse by Category"],
  ["从五大品类中探索精心甄选的优质产品", "Explore curated quality products across five categories"],
  ["款产品", "Products"],
  ["款产品评测", "Product Reviews"],
  ["家居与厨房", "Home & Kitchen"],
  ["健身与健康", "Fitness & Health"],
  ["美容与个人护理", "Beauty & Personal Care"],
  ["智能家居", "Smart Home"],
  ["户外与旅行", "Outdoor & Travel"],
  ["编辑精选", "Editor'"'s Picks"],
  ["本月最佳推荐", "Top Picks This Month"],
  ["阅读全文", "Read Full Review"],
  ["阅读评论", "Read Review"],
  ["加入超过5万名眼光独到的购物者", "Join 50,000+ Discerning Shoppers"],
  ["每周精选推荐，专家深度评测，第一时间获取顶级产品资讯。", "Weekly curated picks, expert deep-dive reviews, and first-access to top product insights."],
  ["请输入您的邮箱", "Enter your email address"],
  ["订阅周报", "Subscribe"],
  ["我们尊重您的隐私，绝不会发送垃圾邮件。", "We respect your privacy. No spam, ever."],
  ["产品评测博客", "Product Reviews"],
  ["专家深度评测，真实用户体验，帮助您做出明智的购买决策。", "Expert reviews, real user experiences, helping you make smart buying decisions."],
];

function translate(text) {
  let r = text;
  replacements.sort((a, b) => b[0].length - a[0].length).forEach(([cn, en]) => {
    r = r.split(cn).join(en);
  });
  r = r.replace(/(\d{4})年(\d+)月(\d+)日/g, "$2 $3, $1");
  return r;
}

const targetFiles = [
  "src/components/Header.astro",
  "src/components/Footer.astro",
  "src/pages/index.astro",
  "src/pages/about.astro",
  "src/pages/contact.astro",
  "src/pages/categories/index.astro",
  "src/pages/blog/index.astro",
  "src/pages/privacy.astro",
  "src/pages/terms.astro",
  "src/pages/affiliate-disclosure.astro",
  "src/pages/404.astro",
];
const blogDir = base + "/src/pages/blog/";
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith(".astro")).map(f => blogDir + f);
const allFiles = [...targetFiles, ...blogFiles];
console.log("Translating", allFiles.length, "files...");
for (const file of allFiles) {
  let c = fs.readFileSync(file, "utf8");
  const before = c;
  c = translate(c);
  if (c !== before) {
    fs.writeFileSync(file, c, "utf8");
    console.log("  " + file.split("/").pop());
  }
}
console.log("Done!");
