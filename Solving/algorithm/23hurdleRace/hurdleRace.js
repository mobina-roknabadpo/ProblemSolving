function hurdleRace(k, height) {
  // Write your code here
  const max = Math.max(...height);
  const answer = max > k ? max - k : 0;

  return answer;
}

const answer = hurdleRace(4, [1, 6, 3, 5, 2]); //output:2
console.log(answer);
