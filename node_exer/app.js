const path = require('path')
console.log(__dirname)
console.log(__filename)

console.log(path.basename(__filename));
console.log(path.basename(__filename, '.js'));
console.log(path.dirname(__filename))

const parsed = path.parse(__filename)
console.log(parsed)
