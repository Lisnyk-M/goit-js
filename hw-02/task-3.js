
const findLongestWord = function (string) {
    const words = string.split(' ');
    let maxWordLength = words[0].length;
    let indexMaxWord = 0;

    for (let count = 1; count < words.length; count++){
        if (words[count].length > maxWordLength){
            maxWordLength = words[count].length;
            indexMaxWord = count;
        }
    }
    return words[indexMaxWord];
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'