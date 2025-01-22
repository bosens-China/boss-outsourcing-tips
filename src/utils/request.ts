import type { Axios } from 'axios';

// @ts-expect-error 忽略检查
export const getAxios = () => window.axios as Axios;
