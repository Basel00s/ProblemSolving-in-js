function printNumber(number) {
  console.log(number);
}

function divid(number) {
  if (number % 3 == 0 && number % 4 == 0) {
    console.log("right");
  } else {
    console.log("false");
  }
}

function checkIfNegativeOrPositive(number) {
  if (number < 0) {
    console.log("negative");
  } else {
    console.log("Positive");
  }
}

function checkTheMax(num1, num2) {
  if (num1 > num2) {
    console.log(num1);
  }
  if (num1 === num2) {
    console.log("the two numbers are equil");
  } else {
    console.log(num2);
  }
}

function checktheMaxAndMin(num1, num2, num3) {
  if (num1 > num2 && num1 > num3 && num2 > num3) {
    console.log("max number :" + num1);
    console.log("min number:" + num3);
  }
  if (num1 > num2 && num1 > num3 && num3 > num2) {
    console.log("max number :" + num1);
    console.log("min number:" + num2);
  }
  if (num2 > num1 && num2 > num3 && num1 > num3) {
    console.log("max number :" + num2);
    console.log("min number:" + num3);
  }
  if (num2 > num1 && num2 > num3 && num3 > num1) {
    console.log("max number :" + num2);
    console.log("min number:" + num1);
  }
  if (num3 > num1 && num3 > num2 && num1 > num2) {
    console.log("max number :" + num3);
    console.log("min number:" + num2);
  }
  if (num3 > num1 && num3 > num2 && num2 > num1) {
    console.log("max number :" + num3);
    console.log("min number:" + num1);
  }
}

