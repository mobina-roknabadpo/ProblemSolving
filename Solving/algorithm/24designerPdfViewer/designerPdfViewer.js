function designerPdfViewer(h, word) {
  const lengthWord = word.length;
  const answer = [];
  const trim = word.trim();
  for (let i = 0; i < trim.length; i++) {
    answer.push(h[trim.charCodeAt(i) - 97]);
  }
  const max = Math.max(...answer);
  return max * lengthWord;
}

const answer = designerPdfViewer(
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    7,
  ],
  "zaba"
);
console.log(answer);
