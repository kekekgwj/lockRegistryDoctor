#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const filesToCheck = ["yarn.lock", "package-lock.json"]; // 检查文件是否存在
const deprecatedRegistry = [
  "//registry.npm.taobao.org",
  "//npm.taobao.org",
  "//registry.nlark.com",
];
const newRegistry = "//registry.npmmirror.com";

filesToCheck.forEach((file) => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    console.log(`${file} exists. Processing...`);
    let fileContent = fs.readFileSync(filePath, "utf8");

    deprecatedRegistry.forEach((deprecated) => {
      const regex = new RegExp(deprecated, "g");
      fileContent = fileContent.replace(regex, newRegistry);
    });

    fs.writeFileSync(filePath, fileContent, "utf8");
    console.log(`${file} has been updated.`);
  } else {
    console.log(`${file} does not exist.`);
  }
});
