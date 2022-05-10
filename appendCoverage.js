const fs = require("fs");
const coverage = require("./coverage/coverage-final.json");
const reportFileName = "./coverage/report.json";
const report = require(reportFileName);

console.log(process.env);

report.coverageMap = coverage;
fs.writeFileSync(reportFileName, JSON.stringify(report, null, 2));
