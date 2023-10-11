function angryProfessor(k, a) {
  let count = 0;
  for (let item of a) {
    if (item <= 0) {
      count++;
    }
  }
  if (count >= k) {
    return "NO";
  } else {
    return "YES";
  }
}

angryProfessor(4, [-93, -86, 49, -62, -90, -63, 40, 72, 11, 67]);
