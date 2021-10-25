alert("Report Card Generator!");

var firstClass = prompt("What is the first class you are taking?");
document.write("<h2>" + firstClass + "</h2>");
var class1Avg = getTestAvg(firstClass);
var class1Letter = calcLetter(firstClass, class1Avg);
var Gpa1 = Number(classGpa(class1Letter));

var secondClass = prompt("What is the second class you are taking?");
document.write("<h2>" + secondClass + "</h2>");
var class2Avg = getTestAvg(secondClass);
var class2Letter = calcLetter(secondClass, class2Avg);
var Gpa2 = Number(classGpa(class2Letter));

var thirdClass = prompt("What is the third class you are taking?");
document.write("<h2>" + thirdClass + "</h2>");
var class3Avg = getTestAvg(thirdClass);
var class3Letter = calcLetter(thirdClass, class3Avg);
var Gpa3 = Number(classGpa(class3Letter));

var fourthClass = prompt("What is the fourth class you are taking?");
document.write("<h2>" + fourthClass + "</h2>");
var class4Avg = getTestAvg(fourthClass);
var class4Letter = calcLetter(fourthClass, class4Avg);
var Gpa4 = Number(classGpa(class4Letter));

document.write("---------------------------------------------------");

overallGPA(Gpa1,Gpa2,Gpa3,Gpa4);



//Define functions below here


function getTestAvg(subject){
  var firstTest = Number(prompt("What did you get on your first " + subject + " test?"));
  var secondTest = Number(prompt("What did you get on your second " + subject + " test?"));
  var thirdTest = Number(prompt("What did you get on your third " + subject + " test?"));
  var fourthTest = Number(prompt("What did you get on your fourth " + subject + " test?"));

  var avg = (firstTest + secondTest + thirdTest + fourthTest) / 4;
  document.write("<li>" + subject + " Test1: " + firstTest + "</li>");
  document.write("<li>" + subject + " Test2: " + secondTest + "</li>");
  document.write("<li>" + subject + " Test3: " + thirdTest + "</li>");
  document.write("<li>" + subject + " Test4: " + fourthTest + "</li>");
  document.write("<p>" + "Your average in " + subject + " is: " + avg + "</p>");
  return avg;
}

function calcLetter(subject,avg){
  var letterGrade;
    if (avg >= 93) {    
  letterGrade = "A";
  }
  else if (avg >= 85) {
  letterGrade = "B";
  }
  else if (avg >= 75) {
  letterGrade = "C";
  }
  else if (avg >= 67) {
  letterGrade = "D";
  }
else {
  letterGrade = "F";
  }
  document.write("<h3>" + "Your letter grade for " + subject + " is: " + letterGrade + "</h3>");
  return letterGrade;
}

function classGpa(letterGrade){
  var GPA;
  if (letterGrade === "A"){
    GPA = 4.0;
  }
  else if (letterGrade=== "B"){
    GPA = 3.0;
  }
  else if (letterGrade === "C"){
    GPA = 2.0;
  }
  else if (letterGrade === "D"){
    GPA = 1.0;
  }
  else {
    GPA = 0;
  }
  return GPA;
}

function overallGPA(firstGPA, secondGPA, thirdGPA, fourthGPA){
  var finalGPA = (firstGPA + secondGPA + thirdGPA + fourthGPA) / 4;
  alert("Your overall GPA is " + finalGPA);
  document.write("<h2>" + "Overall GPA: " + finalGPA + "</h2>");
}
