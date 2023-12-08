function mathMethods() {
  let rounded = Math.round(value);
  console.log("after round : ", rounded);

  //rounds to nearest largest number
  let ceiling = Math.ceil(value);
  console.log("After ceil : ", ceiling);

  // rounds to nearest smaller number
  let flooring = Math.floot(value);
  console.log("After Floor : ", flooring);

  let randomValue = Math.random();
  console.log(randomValue);

  let maxValue = Math.max(5, 10, 15);
  console.log(maxValue);

  let minValue = Math.min(1, 3, 5);
  console.log(minValue);

  let powerOfTwo = Math.pow(value, 2);
  console.log(powerOfTwo);

  let squareRoot = Math.sqrt(value);
  console.log("After sqrt : ", squareRoot);
}

mathMethods(4.56);
mathMethods(9);
mathMethods(25);
