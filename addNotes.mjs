import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { name, version, author, description } = require("./package.json");

export default function addNotes() {
  return {
    name: "add_notes",
    renderChunk(code) {
      const text = `
// ==UserScript==
// @name         boss外包公司提示
// @namespace    https://github.com/bosens-China/${name}
// @version      ${version}
// @description  ${description}
// @author       ${author}
// @match        https://www.zhipin.com/job_detail/*
// @match        http://www.zhipin.com/job_detail/*
// @grant        none
// ==/UserScript==
`.trim();

      return `${text}\n${code}`;
    },
  };
}
