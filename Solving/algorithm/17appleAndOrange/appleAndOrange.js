function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApple = 0;
  let countOrange = 0;
  for (let i = 0; i < apples.length; i++) {
    apples[i] += a;
    if (apples[i] >= s && apples[i] <= t) {
      countApple++;
    }
  }
  for (let i = 0; i < oranges.length; i++) {
    oranges[i] += b;
    if (oranges[i] >= s && oranges[i] <= t) {
      countOrange++;
    }
  }

  console.log(countApple + "\n" + countOrange);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -5]);
