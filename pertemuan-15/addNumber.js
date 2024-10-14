const addNumber = (...numbers) => {
  let sum = 0;
  numbers.map((num) => (sum += num));
  return sum;
};

export { addNumber };
