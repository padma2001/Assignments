function isPrime(num: number): boolean {
    if (num <= 1) return false; 
    if (num === 2) return true; 
    if (num % 2 === 0) return false; 

    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


let number1 = 29;
console.log(`${number1} is prime? ${isPrime(number1)}`);

let number2 =25;
console.log(`${number2} is prime? ${isPrime(number2)}`);

let number3 =7;
console.log(`${number3} is prime? ${isPrime(number3)}`);