import esManifest from '../dist/es/manifest.json';
import iifeManifest from '../dist/iife/manifest.json';

let isModule = false;

try {
  isModule = HTMLScriptElement.supports('module');
} catch {
  isModule = false;
}

const branch = __APP_BRANCH__;

const prefixUrl = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@${branch}/dist`;

function createScript({ src, type }: { src: string; type: string }) {
  const script = document.createElement('script');
  script.type = type;
  script.src = src;
  document.body.appendChild(script);
  return script;
}

function createStyle({ href }: { href: string }) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.body.appendChild(link);
  return link;
}

// https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@dev/dist/es/axios-Cf3dPNiV.js
const main = function () {
  if (isModule) {
    const { imports } = esManifest['src/main.ts'];
    imports.forEach((file) => {
      createScript({
        type: 'module',
        src: `${prefixUrl}/es/${file}`,
      });
    });
    const { file } = esManifest['style.css'];
    createStyle({
      href: `${prefixUrl}/es/${file}`,
    });
    return;
  }
  const { file: jsFile } = iifeManifest['src/main.ts'];
  const { file: cssFile } = iifeManifest['style.css'];
  createScript({
    type: 'text/javascript',
    src: `${prefixUrl}/iife/${jsFile}`,
  });
  createStyle({
    href: `${prefixUrl}/iife/${cssFile}`,
  });
};

main();

export {};
