import { createAxios } from './pre-installed-resources';
import type EsManifestType from '../../dist/es/manifest.json';
import type IifeManifestType from '../../dist/iife/manifest.json';
import { version } from '../../package.json';
import { createScript, createStyle, isSupportModule } from './utils';
import { axios } from '@/utils/request';

const isModule = isSupportModule();

// purge.jsdelivr.net
const prefixUrl = `https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@v${version}-dist/${isModule ? 'es' : 'iife'}`;

// https://fastly.jsdelivr.net/gh/bosens-China/boss-outsourcing-tips@dev/dist/es/axios-Cf3dPNiV.js
const main = async function () {
  await createAxios();

  const { data: manifest } = await axios.get<
    typeof EsManifestType | typeof IifeManifestType
  >(`${prefixUrl}/manifest.json`);

  const { file: jsFile } = manifest['src/main.ts'];
  const { file: cssFile } = manifest['style.css'];

  createScript({
    src: `${prefixUrl}/${jsFile}`,
    type: isModule ? 'module' : 'text/javascript',
  });
  createStyle({
    href: `${prefixUrl}/${cssFile}`,
  });
};
main();

export {};
