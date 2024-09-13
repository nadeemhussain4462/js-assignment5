//  Chapter no 13 Array
//  Q no 1
var array = [];
//  Q no 2
var array1 = [1, 2, 3];
//  Q no 3
var array2 = ["a", "b", "c"];
//  Q no 4
var array3 = [true, false, true];
//  Q no 5
var mixedArray = [1, "a", true];
//  Q no 6
var qulification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualification</h1>");
document.write("<br>");
document.write("<ol>");
for (var i = 0; i < qulification.length; i++) {
    document.write("<li>" + qulification[i] + "</li>");
}
document.write("</ol>");
//  Q no 7
var studentName = ["Michael", "John", "Tony"]; 
var score = [320, 230, 480];
var totalMarks = 500;
document.write("<h1>Student Score Card</h1>");
document.write("<table border='1'>");
document.write("<tr><th>Student Name</th><th>Score</th><th>Percentage</th></tr>");
for (var i = 0; i < studentName.length; i++) {
    var percentage = (score[i] / totalMarks) * 100;
    document.write("<tr><td>" + studentName[i] + "</td><td>" + score[i] + "</td><td>" + percentage.toFixed(2) + "%</td></tr>");
}
document.write("</table>");
//  Q no 8
var color = ["Blue ", "Green", "Red"];
document.write("<h1>Initial Array</h1>");
document.write(color + "<br>");
var addColor = prompt("Enter a color to add at the beginning");
color.unshift(addColor);
document.write("<br>");
document.write("<h1>Updated Array</h1>");
document.write(color + "<br>");
//  Q no 9
var color1 = ["Blue ", "Green", "Red"];
document.write("<h1>Initial Array</h1>");
document.write(color1 + "<br>");
var addColor1 = prompt("Enter a color to add at the end");
color1.push(addColor1);
document.write("<br>");
document.write("<h1>Updated Array</h1>");
document.write(color1 + "<br>");
//  Q no 10
var studentScore = [320, 230, 480, 120];
document.write("<h1>Student Score</h1>");
document.write(studentScore + "<br>");
var sortedScore = studentScore.sort(function (a, b) { return a - b; });
document.write("<h1>Sorted Student Score</h1>");
document.write(sortedScore + "<br>");
//  Q no 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<h1>Cities</h1>");
document.write(cities + "<br>");
var selectedCities = cities.slice(2, 4);
document.write("<h1>Selected Cities</h1>");
document.write(selectedCities + "<br>");
//  Q no 12
var array4 = ["This ", "is ", "my ", "cat."];
document.write("<h1>Array</h1>");
document.write(array4 + "<br>");
var arrayJoin = array4.join(" ");
document.write("<h1>String</h1>");
document.write(arrayJoin + "<br>");



