/*
包含多个接口请求函数的模块
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/${geohash}');   /*geohash为param参数，需要传到路径里面*/
// 2、获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category');
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('/shops', {longitude,latitude});  /*参数为query，传到问号后面*/
// 4、根据经纬度和关键字搜索商铺列表
export const reqShopSearch = (geohash, keyword) => ajax('/search_shops', {keyword,geohash});
// 5、获取一次性验证码
export const reqOneCaptcha = () => ajax('/captcha');
// 6、用户名密码登陆
export const reqUserPwd = (name, ped, captcha) => ajax('/login_pwd', {}, 'POST');
// 7、发送短信验证码
export const reqShortCaptcha = (phone) => ajax('/sendcode',{phone});
// 8、手机号验证码登陆
export const reqPhoneCode = (phone,code) => ajax('/login_sms', {}, 'POST');
// 9、根据会话获取用户信息
export const reqUserMessage = () => ajax('/userinfo');
// 10、用户登出
export const reqUserLogout = () => ajax('/logout');

