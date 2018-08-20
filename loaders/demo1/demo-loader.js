/*
 * @Author: libin 
 * @Date: 2018-08-20 11:39:37 
 * @Last Modified by: libin
 * @Last Modified time: 2018-08-20 21:17:26
 * 这是一个普通的loader
 */

module.exports = function (data) {
  console.log(this)
  console.log('-->this.version=', this.version)
  console.log('-->this.context=', this.context)
  console.log('-->this.options=', this.options)
  console.log('-->this.query=', this.query)
  console.log('-->this.resourcePath=', this.resourcePath)
  const returnData = data + 'var level = 1; exports.level = level;'
  return returnData
}