function getMilk(money, costPerBottle) {
  console.log("buy " + calcBottles(money, 1.5) + " bottles of milk");
  return calcChange(money, 2.5);
}


function calcBottles(startingMoney, costPerBottle){
        var numberOfBottles = Math.floor(startingMoney / costPerBottle);
        return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle){
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("hello master, here is your " + getMilk(5, 1.5) +  " change");



var height = prompt("Type in your height IN INCHES below.");
// var weight = prompt("Please type in your weight below.")
// alert("Your Body Mass Index is " + (weight/((height*height))*703));

// function bmiCalculator(weight, height){
//     var bmi = weight / (height * height);
//     return Math.round(bmi);
// }


// var yourName = prompt("What is your name?");
// var theirName = prompt("What is your lover's name?");
// var n = Math.random();
// n = n*100;
// n = Math.floor(n)+1;
// var perCent = n;
// if (perCent < 50){
//     alert(yourName + ", you are "+ perCent +"% compatible with " + theirName+". No way! Ugh! Don't even try it.");
// }
// if (perCent > 70){
//     alert(yourName + ", you are "+ perCent +"% compatible with " + theirName+". Wow, looks like a match made in heaven!");
// }
// else{
// alert(yourName + ", you are "+ percent    +"% compatible with " + theirName+". Maybe try again.");

// }


// LEAP YEAR CALCULATOR  /////////////////////////////////
var year = prompt("Enter the year to see if it is a leap year");




///////////////////////////////////////////////////////////appleprompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
alert("Your love score is " + loveScore + "%." + "You love each other like Kanye loves Kanye.");}

if (loveScore > 30 && loveScore <= 70){
    alert("Your love score is " + loveScore + "%.");}

if (loveScore <= 30) {
    alert("Your love score is " + loveScore + "%. You go together like oil and water");
    }
    ///////////////////////////////////////////////////////////////

    function bmiCalculator (weight, height) {

   var bmi  = (weight / (height * height));
   var interpretation = bmi;

if (bmi > 24.9) { alert = ("Your BMI is "+bmi+", so you are overweight.")   }

if (bmi => 18.5 && bmi <= 24.9) {alert("Your BMI is "+bmi+", so you have a normal weight.") }


 if (bmi < 18.5){ alert("Your BMI is "+bmi+", so you are underweight.")  }

    return interpretation;
}
/////////////////////////////////////////////////////////////////////////////















// top
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");

// bottom
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");

// var yourAge = prompt("How long until you are 90 years old? Please enter your age below to check. ");
// var year = (90-yourAge);
// var month = (year*12);
// var week = (year*52);
// var day = (year*365);
// alert("You will be 90 years old in " + year + " years, " +month+" months, " +week +" weeks, and " + day +" days.");
