const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  crlfDelay: Infinity
});

const numbers = [];

rl.on('line', (line) => {
  const current = parseInt(line);
  numbers.some(number => {
    if (number + current == 2020)
    {
      console.log('Numbers:', number, current);
      console.log('Sum:', number + current);
      console.log('The answer is:', number * current, '(product)');
      return true;
    }
  });
  numbers.push(current);
});