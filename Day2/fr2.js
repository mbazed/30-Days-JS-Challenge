let number1 = 10;
let number2 = 5;

let isEqual = number1 === number2;
let isNotEqual = number1 !== number2;
let isGreaterThan = number1 > number2;
let isLessThan = number1 < number2;
let isGreaterThanOrEqual = number1 >= number2;
let isLessThanOrEqual = number1 <= number2;

let andCondition = (number1 > number2) && (number1 > 0);
let orCondition = (number1 > number2) || (number2 < 0);
let notCondition = !(number1 === number2);

console.log(`Is Equal: ${number1} === ${number2} -> ${isEqual}`);
console.log(`Is Not Equal: ${number1} !== ${number2} -> ${isNotEqual}`);
console.log(`Is Greater Than: ${number1} > ${number2} -> ${isGreaterThan}`);
console.log(`Is Less Than: ${number1} < ${number2} -> ${isLessThan}`);
console.log(`Is Greater Than Or Equal: ${number1} >= ${number2} -> ${isGreaterThanOrEqual}`);
console.log(`Is Less Than Or Equal: ${number1} <= ${number2} -> ${isLessThanOrEqual}`);
console.log(`And Condition: (${number1} > ${number2}) && (${number1} > 0) -> ${andCondition}`);
console.log(`Or Condition: (${number1} > ${number2}) || (${number2} < 0) -> ${orCondition}`);
console.log(`Not Condition: !(${number1} === ${number2}) -> ${notCondition}`);
