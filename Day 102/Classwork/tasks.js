const wordLengths = new Map([
    ["luka", 4],
    ["ana", 3],
    ["lua", 3],
    ["luka", 4]
]);

let wordLens = new Set(wordLengths.values());

let sum = 0;
for (let len of wordLens) {
    sum += len;
};

console.log(sum);