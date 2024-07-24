const applyMultipleTimes = (func, times, initialValue) => {
  let result = initialValue;
  for (let i = 0; i < times; i++) {
    result = func(result);
  }
  return result;
};

const increment = (x) => {
  console.log(`Incrementing: ${x}`);
  return x + 1;
};

const times = 5;
const initialValue = 0;
const result = applyMultipleTimes(increment, times, initialValue);
console.log(
  `Applying 'increment' ${times} times to ${initialValue} results in: ${result}`
);
