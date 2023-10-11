function migratoryBirds(arr) {
  let counterType = 1;
  const store = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (store.has(arr[i])) {
      let currentType = store.get(arr[i]);
      store.set(arr[i], ++currentType);
    } else {
      store.set(arr[i], counterType);
    }
  }
  const entries = [...store];
  console.log(entries);
  const sorted = entries.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  return sorted[0][0];
}

const result = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
console.log(result);
