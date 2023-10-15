function pangrams(s) {
  let isPangram = 0;
  for (let i = 97; i <= 122; i++) {
    if (!s.toLowerCase().includes(String.fromCodePoint(i))) {
      console.log(String.fromCodePoint(i).toLowerCase());
      isPangram = 1;
      break;
    }
  }
  const result = isPangram ? "not pangram" : "pangram";
  return result;
}
