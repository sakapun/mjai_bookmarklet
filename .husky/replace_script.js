const fs = require("fs")

const html = fs.readFileSync('src/index.html').toString();
const replaced = html.replaceAll("{{be_replaced}}", process.env.MOJI);
fs.writeFileSync('docs/index.html', replaced);
