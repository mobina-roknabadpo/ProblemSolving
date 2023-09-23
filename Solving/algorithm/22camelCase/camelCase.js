function camelcase(s) {
  let count = 1;
  const upperCase = s.toUpperCase();
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === upperCase.charAt(i)) {
      count++;
    }
  }
  return count;

  //or
  // const count = s.split(/[A-Z]/);
  // return count.length;
}

const answer = camelcase("oneTwoThree");
console.log(answer);
