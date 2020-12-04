const fs = require('fs');
const { parse } = require('path');
const readline = require('readline');

(async () => {
  const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay: Infinity
  });
  
  const numbers = [];
  const occurences = {};
  
  for await (const line of rl) {
    if (line in occurences)
      occurences[line].push(numbers.length);
    else
      occurences[line] = [numbers.length];
    numbers.push(parseInt(line));
  }

  numbers.some((numberA, indexA) => {
    if (indexA == numbers.length - 1)
      return false;

    return numbers.slice(indexA+1).some((numberB, indexB) => {
      const possibleNumberC = 2020 - numberA - numberB;
      if (possibleNumberC.toString() in occurences) {
        const remainingIndexes = occurences[possibleNumberC.toString()].filter(i => i != indexA && i != indexA+1+indexB);
        if (remainingIndexes.length)
        {
          console.log('Numbers:', numberA, numberB, possibleNumberC);
          console.log('Sum:', numberA + numberB + possibleNumberC);
          console.log('The answer is:', numberA * numberB * possibleNumberC, '(product)');
          return true;
        }
      }
      return false;
    });
  });
})();