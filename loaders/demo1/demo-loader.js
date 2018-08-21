/*
 * @Author: libin 
 * @Date: 2018-08-20 11:39:37 
 * @Last Modified by: libin
 * @Last Modified time: 2018-08-21 21:20:01
 * 这是一个普通的loader
 */
const fs = require('fs')

module.exports = function (data) {
  // 打印输出 loader 上下文
  console.log('-->this.version=', this.version)
  console.log('-->this.context=', this.context)
  console.log('-->this.options=', this.options)
  console.log('-->this.query=', this.query)
  console.log('-->this.resourcePath=', this.resourcePath)
  console.log('-->data start')
  console.log(data)
  console.log('-->data end')
  // const returnData = data + 'var level = 1; exports.level = level;'
  // fs.appendFileSync('./test.txt', this.resourcePath);
  // fs.appendFileSync('./test.txt', data);
  var out = fs.createWriteStream('./test.txt', {
    encoding: 'utf8'
  });
  out.write(`>> path: ${this.resourcePath}
<< content: ${data}
`);
  out.end();
  return data
}