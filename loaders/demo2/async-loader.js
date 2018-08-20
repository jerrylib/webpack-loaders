/*
 * @Author: libin 
 * @Date: 2018-08-20 17:16:34 
 * @Last Modified by: libin
 * @Last Modified time: 2018-08-20 21:06:09
 * 这是一个异步的loader
 */

/*
 * 获取用户信息
 */
const getUserPromise = function (userId) {
  return new Promise((resolve, reject) => {
    const user = {
      name: userId === '180505' ? '李彬' : '张三',
      age: 15,
    }
    resolve(user)
  })
}

module.exports = function (content, map, meta) {
  console.log('-->this.query=', this.query)
  var callback = this.async();
  const {
    userId = ''
  } = this.query
  // 根据loader上配置的信息，异步获取用户数据，完成加载
  getUserPromise(userId).then(function (user) {
    return callback(null, content, map, meta);
  }).catch(function (error) {
    return callback(error);
  })
}