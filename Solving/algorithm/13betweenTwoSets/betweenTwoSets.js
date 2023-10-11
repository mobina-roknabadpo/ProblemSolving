function getTotalX(a, b) {
  let countNumber = 0;
  for (let i = 1; i <= 100; i++) {
    if (a.every((num) => i % num == 0) && b.every((num) => num % i == 0)) {
      countNumber++;
    }
  }

  return countNumber;
}

const result = getTotalX([2, 4], [16, 32, 96]);
console.log(result); // output : 3
