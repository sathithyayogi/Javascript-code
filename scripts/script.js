// code to read file and print each line
const readLine = require('readline');
const f = require('fs');
var file = './password.txt';
var rl = readLine.createInterface({
    input : f.createReadStream(file),
    output : process.stdout,
    terminal: false
});
rl.on('line', function (text) {
  console.log("wiener");
  console.log("carlos");
});