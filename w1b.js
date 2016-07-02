const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const maxPairwiseProduct = (numbers) => {
    const length = numbers.length;
    let max = 0;

    for (let i = 0; i < length; i++) {
        for (let g = 0; g < length; g++) {
            if (i === g) continue;

            const product = numbers[i] * numbers[g];
            if (product > max) {
                max = product;
            }
        }
    }

    return max;
};

rl.question('Input: ', (line) => {
    const words = line.split(' ');
    const numbers = words.map(word => parseInt(word, 10));

    console.log(maxPairwiseProduct(numbers));

    rl.close();
});
