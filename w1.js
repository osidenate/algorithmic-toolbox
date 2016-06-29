const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const add = (num1, num2) => num1 + num2;

rl.question('Input: ', (line) => {
  const words = line.split(' ');
  const numbers = words.map(word => parseInt(word, 10));

  console.log(add(...numbers));

  rl.close();
});
