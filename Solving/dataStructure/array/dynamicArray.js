function dynamicArray(n, queries) {
  let lastAnswer = 0;
  let idx = 0;
  let x;
  let y;
  const array = new Array(n);
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    array[i] = [];
  }

  for (let i = 0; i < queries.length; i++) {
    x = queries[i][1];
    y = queries[i][2];
    idx = (x ^ lastAnswer) % n;
    
    if (queries[i][0] === 2) {
      lastAnswer = array[idx][y % array[idx].length];
      answer.push(lastAnswer);
    } else {
      array[idx].push(y);
    }
  }
  return answer;
}

const result = dynamicArray(2, [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
]);
console.log(result);
