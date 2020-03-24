export const prod = {
  portal: 'https://cmsserver.jrerdangjia.com/',
  crm: 'https://crmserver.jrerdangjia.com/',
  saps: 'https://sapsserver.jrerdangjia.com/saps/',
  etc: 'https://etc3server.jrerdangjia.com/etc3/',
  auth: 'https://authserver.jrerdangjia.com/',
  wechat: 'https://www.jrerdangjia.com/',
  ems: 'https://emsserver.jrerdangjia.com/',
  paySys: 'https://pay.jrerdangjia.com/jr-pay/',
  appId: 'wx2880589f92550600'
}

export const stag = {
  portal: 'http://114.55.251.123:9873/',
  crm: 'http://114.55.251.123:8772/',
  saps: 'http://114.55.251.123:8134/saps/',
  sapsLocal: 'http://192.168.22.198:8134/saps/',
  etc: 'http://114.55.251.123:8234/etc3/',
  paySys: 'http://114.55.251.123:8089/jr-pay/',
  auth: 'http://114.55.251.123:9765/',
  wechat: 'http://uat.jrerdangjia.com/'
}

export const dev = {
  ems: 'http://114.55.251.123:9871/',
  portal: 'http:// 114.55.251.123:9873/',
  crm: 'http://114.55.251.123:8772/',
  saps: 'http://114.55.251.123:8134/saps/',
  etc: 'http://114.55.251.123:8234/etc3/',
  paySys: 'http://114.55.251.123:8089/jr-pay/',
  auth: 'http://114.55.251.123:9765/',
  wechat: 'http://uat.jrerdangjia.com/'
}

const sourceObj = {
  dev,
  prod: prod
}

const source = sourceObj[process.env.VUE_APP_INFO] || dev
export default source
