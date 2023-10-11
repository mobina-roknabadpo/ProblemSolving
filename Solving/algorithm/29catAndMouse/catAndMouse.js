function catAndMouse(x, y, z) {
  const catA = Math.abs(z - x);
  const catB = Math.abs(z - y);
  if (catA === catB) {
    return "Mouse C";
  } else if (catA < catB) {
    return "Cat A";
  } else {
    return "Cat B";
  }
}
catAndMouse(1,2,3)