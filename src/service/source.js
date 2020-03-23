export const prod = {
  portal: 'https://cmsserver.jrerdangjia.com/',
  crm: 'https://crmserver.jrerdangjia.com/',
  saps: 'https://sapsserver.jrerdangjia.com/saps/',
  etc: 'https://etc3server.jrerdangjia.com/etc3/',
  auth: 'https://authserver.jrerdangjia.com/',
  wechat: 'https://www.jrerdangjia.com/',
  ems: 'https://emsserver.jrerdangjia.com/',
  jumpUrl:
    'https://www.jrerdangjia.com/jr/v2/wechat/authorize?returnUrl=https://www.jrerdangjia.com/jr/collection/index.html',
  paySys: 'https://pay.jrerdangjia.com/jr-pay/',
  tplusProductId: {
    gantong: 17,
    yuetong: 21,
    yuetongEnterprise: 27,
    zhetong: 28,
    zhetongEnterprise: 29,
    guizhou: 31,
    guizhouEnterprise: 32,
    sutong: 33,
    sutongEnterprise: 34,
    mintong: 35,
    mintongEnterprise: 36
  },
  applyFormMap: {
    17: 'https://fileserver.jrerdangjia.com/group1/M00/05/4F/cjcfjVy0HPSAds5HAAIIAMqu0R8211.doc',
    21: 'https://fileserver.jrerdangjia.com/group1/M00/05/4F/cjcfjVy0HWWAUl9kAAKCAA6CYCg129.doc'
  },
  wechatLink:
    'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNTc2ODEwMw==&scene=126&bizpsid=0#wechat_redirect',
  appId: 'wx2880589f92550600',
  prod: true
}
export const stag = {
  portal: 'http://114.55.251.123:9873/',
  crm: 'http://114.55.251.123:8772/',
  // crm: 'http://192.168.22.222:9000/',
  saps: 'http://114.55.251.123:8134/saps/',
  sapsLocal: 'http://192.168.22.198:8134/saps/',
  etc: 'http://114.55.251.123:8234/etc3/',
  paySys: 'http://114.55.251.123:8089/jr-pay/',
  auth: 'http://114.55.251.123:9765/',
  wechat: 'http://uat.jrerdangjia.com/',
  jumpUrl:
    'http://uat.jrerdangjia.com/jr/v2/wechat/authorize?returnUrl=http://uat.jrerdangjia.com/jr/wxportal/index.html',
  tplusProductId: {
    gantong: 22,
    yuetong: 21,
    yuetongEnterprise: 27,
    zhetong: 28,
    zhetongEnterprise: 29
  },
  applyFormMap: {
    22: 'http://114.55.31.141:8888/group1/M00/05/4F/cjcfjVy0HPSAds5HAAIIAMqu0R8211.doc',
    21: 'http://114.55.31.141:8888/group1/M00/05/4F/cjcfjVy0HWWAUl9kAAKCAA6CYCg129.doc'
  },
  wechatLink:
    'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNTc2ODEwMw==&scene=126&bizpsid=0#wechat_redirect',
  appId: 'wx6df3051c6e964a9f'
}

export const dev = {
  ems: 'http://114.55.251.123:9871/',
  portal: 'http:// 114.55.251.123:9873/',
  crm: 'http://114.55.251.123:8772/',
  saps: 'http://114.55.251.123:8134/saps/',
  etc: 'http://114.55.251.123:8234/etc3/',
  paySys: 'http://114.55.251.123:8089/jr-pay/',
  auth: 'http://114.55.251.123:9765/',
  wechat: 'http://uat.jrerdangjia.com/',
  jumpUrl:
    'http://uat.jrerdangjia.com/jr/v2/wechat/authorize?returnUrl=http://uat.jrerdangjia.com/jr/wxportal/index.html',
  tplusProductId: {
    gantong: 22,
    yuetong: 21,
    yuetongEnterprise: 27,
    zhetong: 28,
    zhetongEnterprise: 29,
    guizhou: 31,
    guizhouEnterprise: 32,
    sutong: 33,
    sutongEnterprise: 34,
    mintong: 35,
    mintongEnterprise: 36
  },
  applyFormMap: {
    22: 'http://114.55.31.141:8888/group1/M00/05/4F/cjcfjVy0HPSAds5HAAIIAMqu0R8211.doc',
    21: 'http://114.55.31.141:8888/group1/M00/05/4F/cjcfjVy0HWWAUl9kAAKCAA6CYCg129.doc'
  },
  wechatLink:
    'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwNTc2ODEwMw==&scene=126&bizpsid=0#wechat_redirect',
  appId: 'wx6df3051c6e964a9f'
}

// let source = prod
// source = dev

const sourceObj = {
  dev,
  prod: prod
}

const source = sourceObj[process.env.VUE_APP_INFO] || dev
export default source
