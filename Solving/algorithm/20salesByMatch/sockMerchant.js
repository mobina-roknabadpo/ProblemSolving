function sockMerchant(n, ar) {
  // Write your code here
  const currentCount = 1;
  let npairs = 0;
  let socks = new Map();
  for (let i = 0; i < n; i++) {
    if (socks.has(ar[i])) {
      let count = socks.get(ar[i]);
      //   console.log("count", count);
      socks.set(ar[i], ++count);
      //   console.log("get", socks.get(ar[i]));
      if (socks.get(ar[i]) % 2 === 0) {
        npairs++;
        // console.log("socksNumber", npairs);
      }
    } else {
      socks.set(ar[i], currentCount);
    }
  }
  return npairs;
}

const result = sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(result);
