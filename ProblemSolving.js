function printNumber(number) {
  console.log(number);
}
printNumber(30);

function divid(number) {
  if (number % 3 == 0 && number % 4 == 0) {
    console.log("right");
  } else {
    console.log("false");
  }
}
divid(14);

function checkIfNegativeOrPositive (number){
    if(number < 0){
        console.log("negative")
    }
    else{
        console.log('Positive')
    }
}
checkIfNegativeOrPositive(3)
