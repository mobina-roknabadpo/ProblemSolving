function funnyString(s) {
  let isFunny = 0;
  const charCode = [];
  for (let char of s) {
    charCode.push(char.charCodeAt());
  }
  const reverseArr = [...charCode];
  reverseArr.reverse();

  for (let i = 0; i < charCode.length - 1; i++) {
    charCode[i] = Math.abs(charCode[i] - charCode[i + 1]);
    reverseArr[i] = Math.abs(reverseArr[i] - reverseArr[i + 1]);
    if (charCode[i] === reverseArr[i]) {
      isFunny = 1;
    } else {
      isFunny = 0;
      break;
    }
  }
  const result = isFunny ? "Funny" : "Not Funny";
  return result;
}
const result = funnyString("lmnop");
console.log(result);
