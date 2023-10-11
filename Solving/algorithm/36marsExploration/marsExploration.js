function marsExploration(s) {
  const signal = [...s];
  const a = signal.filter((item) => {
    return item !== "S" && item !== "O";
  });
  return a.length;
}

marsExploration("SOSSPSSQSSOR"); //output => 3
