"use strict";

module.exports = options => {
  const { whiteList } = options;

  //如果传入的不是数组，则直接报错
  if (!Array.isArray(whiteList)) {
    throw Error("=======友情提示：白名单是个数组===========");
  }

  return async function setOringin(ctx, next) {
    // 当前的访问域名
    const { origin } = ctx.request.header;
    //  如果是*，就给访问的域名设置允许跨域
    if (whiteList.indexOf("*") > -1) {
      ctx.response.set("Access-Control-Allow-Origin", origin);
    } else if (whiteList.indexOf(origin) > -1) {
      ctx.response.set("Access-Control-Allow-Origin", origin);
    }

    await next();
  };
};
