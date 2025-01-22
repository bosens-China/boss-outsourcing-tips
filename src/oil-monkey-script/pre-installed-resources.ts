import { createScript } from './utils';

const axiosCnd = `https://cdn.jsdelivr.net/npm/axios@1.7.9/dist/axios.min.js`;

export const promiseAxios = createScript({
  src: `${axiosCnd}`,
  defer: true,
});
