function bonAppetit(bill, k, b) {
  const dEat = bill[k];
  const costs = bill.reduce((total, currentValue) => total + currentValue);
  const division = (costs - dEat) / 2;
  if (b - division > 0) {
    console.log(b - division);
  } else {
    console.log("Bon Appetit");
  }
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([3, 10, 2, 9], 1, 7);
