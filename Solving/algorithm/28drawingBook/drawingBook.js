function pageCount(n, p) {
  if (n % 2 === 0) {
    return Math.min(p / 2, (n - p + 1) / 2);
  }
  return Math.min(p / 2, (n - p) / 2);
}

console.log(pageCount(5, 2));
