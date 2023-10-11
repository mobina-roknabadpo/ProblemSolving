function beautifulDays(i, j, k) {
  let count = 0;
  while (i <= j) {
    let result = reverse(i);
    if (isInteger(Math.abs(i - result) / k)) {
      count++;
    }
    i++;
  }
  return count;
}

function isInteger(number) {
  if (number % 1 === 0) {
    return true;
  }
  return false;
}

function reverse(n) {
  const tempString = String(n);
  return +tempString.split("").reverse().join("");
}
