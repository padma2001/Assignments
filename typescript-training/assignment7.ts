let sentence: string = "Java programming is fun and challenging";

let words: string[] = sentence.split(" ");
console.log(`Total words: ${words.length}`);

let reversedWords: string = words.reverse().join(" ");
console.log(`Reversed sentence : ${reversedWords}`);

let capitalizedSentence: string = words .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

console.log(`Captials starting of the word: ${capitalizedSentence}`);