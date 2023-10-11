function twoStrings(s1, s2) {
  let flag = 0;
  for (let i = 0; i < s2.length; i++) {
    if (s1.indexOf(s2.charAt(i)) > -1) {
      flag = 1;
    }
  }
  if (flag === 1) {
    return "YES";
  } else {
    return "NO";
  }
}
