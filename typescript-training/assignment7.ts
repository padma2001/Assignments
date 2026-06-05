let sentence: string = "Java programming is fun and challenging";

let words: string[] = sentence.split(" ");
console.log(`Total words: ${words.length}`);

let reversedWords: string ="";
for(let i: number=words.length-1; i>=0;i--){
     reversedWords = reversedWords + words[i] + " ";
}
console.log("Reversedwords are " + reversedWords.trim());
let capitalizedSentence: string = words .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

console.log(`Captials starting of the word: ${capitalizedSentence}`);