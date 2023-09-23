function timeConversion(s) {
  const format = s.substring(0, 8);
  const ampm = s.substring(8);
  const times = format.split(":");

  if (times[0] == 12 && ampm == "AM") {
    times[0] = "00";
    return times.join(":");
  }
  if (times[0] == 12 && ampm == "PM") {
    return times.join(":");
  }
  if (times[0] < 12 && ampm == "PM") {
    times[0] = 12 + +times[0];
    console.log(times);
    return times.join(":");
  } else {
    if (times[0] < 10) {
      return times.join(":");
    }
  }
}

console.log(timeConversion("12:05:45AM"));
