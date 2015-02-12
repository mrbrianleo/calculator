//start with a current value

// build our number buttons that allow the user to make guesses

//when click button need to add that button value to DOM .calculation


//need to assign a class with current value


//create an array of all the values collected for 1st calculation


//create an array of all the values collected for 2nd calculation


//need a total from 1st array and 2nd array


//set the total numbers to the current number


//need to clear the calculator with the clear button



//capture event on button click
//read read from event what button was clicked

//based on type of button

var setOutput = function(num) {
  num = num.toString()
  if (num.length > 9) {
    num = "Error";
  }
  $(".calculation").text(num); 
}


var leftSide = "";
var rightSide = "";
var operation = null;

var clear = function() {
  leftSide = "";
  rightSide = "";
  operation = null;
  setOutput(0);
}

$(".numbers").on("click", "a", function(event) {
  var elem = event.currentTarget;
  var btn = $(elem);
  var num = btn.text();  
  // setOutput(num);

  if (num === "=") {
    var answer = eval(leftSide + operation + rightSide);
    setOutput(answer);
    leftSide = answer;
    rightSide = "";
    operation = null;
    return;
  }

  if (workingOnRightSide()) {
    rightSide += num;
    setOutput(rightSide);
  } else {
    leftSide += num;
    setOutput(leftSide);
  }
});

// on click a operator
  // set the operation
$(".clear-button").on("click", clear);

$(".commands").on("click", "a", function(event) {
  var elem = event.currentTarget;
  var btn = $(elem);
  var op = btn.text();
  
  if (operation && leftSide && rightSide) {
    var answer = eval(leftSide + operation + rightSide);
    setOutput(answer)
    rightSide = "";
    leftSide = answer;
  }
  operation = op;
})

var workingOnRightSide = function() {
  return operation !== null;
}





