function findDigits(n) {
  let count = 0;
  let num = n;
  while (num > 0) {
    const result = num % 10;
    if (n % result === 0) {
      count++;
    }
    num = Math.trunc(num / 10);
  }
  return count;
}
