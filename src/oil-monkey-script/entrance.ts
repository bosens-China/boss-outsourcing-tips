import { promiseAxios } from './pre-installed-resources';
import type EsManifestType from '../../dist/es/manifest.json';
import type IifeManifestType from '../../dist/iife/manifest.json';
import { version } from '../../package.json';
import { createScript, createStyle, isSupportModule } from './utils';
import type { Axios } from 'axios';

const isModule = isSupportModule();

const prefixUrl = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@v${version}-dist`;

// https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@dev/dist/es/axios-Cf3dPNiV.js
const main = async function () {
  await promiseAxios;
  // @ts-expect-error 忽略检查
  const axios = window.axios as Axios;

  const [{ data: esManifest }, { data: iifeManifest }] = await Promise.all([
    axios.get<typeof EsManifestType>(`${prefixUrl}/es/manifest.json`),
    axios.get<typeof IifeManifestType>(`${prefixUrl}/iife/manifest.json`),
  ]);

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
    src: `${prefixUrl}/iife/${jsFile}`,
  });
  createStyle({
    href: `${prefixUrl}/iife/${cssFile}`,
  });
};
main();

export {};
