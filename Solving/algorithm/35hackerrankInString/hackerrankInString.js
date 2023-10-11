function hackerrankInString(s) {
  const word = "hackerrank ";
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === word.charAt(index) && index < word.length) {
      index++;
    }
  }
  if (index === word.length - 1) {
    return "YES";
  } else {
    return "NO";
  }
}

hackerrankInString("hereiamstackerrank") // output => YES