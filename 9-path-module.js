const {sep, join, resolve, basename} = require('path')

console.log(sep);

const filePath = join('/content/', 'subfolder', 'test.txt')

console.log(filePath);

const base = basename(filePath)
console.log(base);

const absolute = resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);