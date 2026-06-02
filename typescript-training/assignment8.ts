let paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
let searchword: string ="Java";

let indexes: number[] = [];
let position:  number = paragraph.indexOf(searchword);

while (position !==-1) {
    indexes.push(position);
    position = paragraph.indexOf(searchword,position + searchword.length);
    
}

console.log(`Total occurrences  of "${searchword}": ${indexes.length}`);
console.log(`Indexes: ${indexes.join(" ")}`);