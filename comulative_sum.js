// Comulative Sum

const comulativeSum = (sum => value => sum += value)(0);
console.log([2,4,6,4,0,1].map(comulativeSum));