import esManifest from '../dist/es/manifest.json';
import iifeManifest from '../dist/iife/manifest.json';
import { version } from '../package.json';

let isModule = false;

try {
  isModule = HTMLScriptElement.supports('module');
} catch {
  isModule = false;
}

const prefixUrl = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@v${version}-dist`;

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
    const { file: jsFile } = esManifest['src/main.ts'];

    createScript({
      type: 'module',
      src: `${prefixUrl}/es/${jsFile}`,
    });

    const { file: cssFile } = esManifest['style.css'];
    createStyle({
      href: `${prefixUrl}/es/${cssFile}`,
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
