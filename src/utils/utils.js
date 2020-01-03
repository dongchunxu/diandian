import { parse } from 'querystring';
import pathRegexp from 'path-to-regexp';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = path => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // 给官方演示站点用，用于关闭真实开发环境不需要使用的特性

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */

export const getAuthorityFromRouter = (router = [], pathname) => {
  const authority = router.find(({ path }) => path && pathRegexp(path).exec(pathname));
  if (authority) return authority;
  return undefined;
};


export const getHumanTime = (startTimestamp) => {
  const now = new Date().getTime();
  const diff = now - startTimestamp;
  if (diff <= 10000) {
    return '刚刚';
  }
  if (diff <= 1000 * 60) {
    const sec = Math.floor(diff / 1000);
    return `${sec}秒前`;
  }
  if (diff <= 1000 * 60 * 60) {
    const min = Math.floor(diff / (1000 * 60));
    return `${min}分钟前`;
  }
  if (diff <= 1000 * 60 * 60 * 60) {
    const hour = Math.floor(diff / (1000 * 60 * 60));
    return `${hour}小时前`;
  }
  const hour = Math.floor(diff / (1000 * 60 * 60 * 60));
  return `${hour}天前`;
};
