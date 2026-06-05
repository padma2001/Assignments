const n: number =5;
for(let i:number = 1; i<=n; i++) {
    let line: string = "";
    for (let j: number = i; j < n; j++) {
        line += " ";
    }for (let j: number = 1; j <= i; j++) {
        line += "*";
    }

    console.log(line);
}
