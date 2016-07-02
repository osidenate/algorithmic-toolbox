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

const maxPairwiseProductFast = (numbers) => {
    const length = numbers.length;
    const cache = [];
    let max = 0;

    for (let i = 0; i < length; i++) {
        cache[i] = [];

        for (let g = 0; g < length; g++) {
            if (i === g) continue;

            let product;

            if (cache[g] && cache[g][i]) {
                product = cache[g][i];
            } else {
                product = cache[i][g] = numbers[i] * numbers[g]
            }

            if (product > max) {
                max = product;
            }
        }
    }

    return max;
};

const maxPairwiseProductFaster = (numbers) => {
    const length = numbers.length;
    let max1index = 0, max2index = 0;

    for (let i = 0; i < length; i++) {
        if (numbers[i] > numbers[max1index]) {
            max1index = i;
        }
    }

    for (let g = 0; g < length; g++) {
        if (numbers[g] > max2index && g !== max1index) {
            max2index = g;
        }
    }

    return numbers[max1index] * numbers[max2index];
};

rl.question('Input: ', (line) => {
    const words = line.split(' ');
    const numbers = words.map(word => parseInt(word, 10));

    console.log(maxPairwiseProductFaster(numbers));

    rl.close();
});
