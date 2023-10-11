function equalizeArray(arr) {
  const duplicate = new Map();
  const count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (duplicate.has(arr[i])) {
      let newCount = duplicate.get(arr[i]);
      duplicate.set(arr[i], ++newCount);
    } else {
      duplicate.set(arr[i], count);
    }
  }
  const maxDuplicate = Math.max(...duplicate.values());
  return arr.length - maxDuplicate;
}
const result = equalizeArray([1, 2, 3, 1, 2, 3, 3, 3]);
console.log(result);
