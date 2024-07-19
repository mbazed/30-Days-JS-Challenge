let number = 5;
let fact = 1;

do{
    fact *= number;
    number--;
}while(number > 0);

console.log(`The factorial of 5 is ${fact}.`);