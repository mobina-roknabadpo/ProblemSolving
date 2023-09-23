function reverseArray(a) {
  // return a.reverse()
  let b = [];
  for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
  }
  return b;
}

const answer = reverseArray([1, 2, 4, 5, 6]);
console.log(answer);
