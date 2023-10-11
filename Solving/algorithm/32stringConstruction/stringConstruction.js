function stringConstruction(s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s.charAt(i))) {
      arr.push(s.charAt(i));
    }
  }
  return arr.length;
}
stringConstruction("abca"); //output => 3
