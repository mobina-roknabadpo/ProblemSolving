function marsExploration(s) {
  const signalArr = [...s];
  const signal = "SOS";
  const a = signalArr.filter((item, index) => {
    return item !== signal[index % 3];
  });
  return a.length;
}

marsExploration(
  "SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS"
); //output => 3
