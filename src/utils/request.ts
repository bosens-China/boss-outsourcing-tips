import type { Axios } from 'axios';

// @ts-expect-error 忽略检查
export const axios = window.axios as Axios;
