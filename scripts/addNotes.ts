import {
  version,
  description,
  author,
  license,
  greasemonkey,
  homepage,
} from '../package.json';

export default function addNotes() {
  return {
    name: 'add_notes',
    renderChunk(code: string) {
      const text = `
// ==UserScript==
// @name         ${greasemonkey.name}
// @namespace    ${homepage}
// @version      ${version}
// @description  ${description}
// @author       ${author}
// @match        ${greasemonkey.match}
// @grant        none
// @license      ${license}
// ==/UserScript==
`.trim();

      return `${text}\n${code}`;
    },
  };
}
