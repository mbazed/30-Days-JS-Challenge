function checkEvenOrOdd(num) {
  if (typeof num !== "number") {
    console.log("Please provide a valid number.");
    return;
  }

  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }
}

checkEvenOrOdd(10);
checkEvenOrOdd(7);
checkEvenOrOdd("a");
