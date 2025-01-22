import {
  version,
  description,
  author,
  license,
  greasemonkey,
  homepage,
} from '../package.json';
import { type Rollup } from 'vite';
import path from 'path';
import fs from 'fs/promises';

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

export default function addNotes(): Rollup.Plugin {
  return {
    name: 'add_notes',
    async writeBundle(outputOptions, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === 'chunk') {
          const filePath = path.join(outputOptions.dir!, fileName);
          await fs.writeFile(filePath, `${text}\n${chunk.code}`, 'utf-8');
        }
      }
    },
  };
}
