
const studentNames: string[] = ['Radha', 'Madhu', 'Bindu'];


const studentMarks: number[] = [10, 11, 12];

let total: number = 0;


const updatedMarks: number[] = [];


console.log("Updated Marks:");


for (let i = 0; i < studentMarks.length; i++) {

    
    updatedMarks[i] = studentMarks[i]! + 10;

    
    total += updatedMarks[i]!;

    
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}


const average: number = total / updatedMarks.length;


console.log(`Average Marks: ${average}`);