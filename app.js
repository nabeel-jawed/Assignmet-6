// ******* Chapter 21-25 & Task 1 *******/

// var a = prompt("Enter First Name: ");
// var b = prompt("Enter Last Name: ");
// var fullName = a+" "+b;
// alert("Dear " +fullName+" Welcome to the Page")

// ******* Chapter 21-25 & Task 2 *******/

// var a = prompt("Enter your favorite mobile phone model:");
// var b = a.length;
// document.write("My favorite phone is: "+a);
// document.write("<br>Length of String is: "+b);

// ******* Chapter 21-25 & Task 3 *******/

// var a = "Pakistani"
// var b = a.indexOf("n");
// document.write("Sting: "+a+"<br>Index of 'n': "+b);

// ******* Chapter 21-25 & Task 4 *******/

// var a = "Hello World";
// var b = a.lastIndexOf("l");
// document.write("String: "+a+"<br>Last Index of 'l': "+b);

// ******* Chapter 21-25 & Task 5 *******/

// var a = "Pakistani";
// var b = a.charAt(3);
// document.write("String: "+a+"<br>Character at index 3: "+b);

// ******* Chapter 21-25 & Task 6 *******/

// var z = " ";
// var a = prompt("Enter First Name: ");
// var b = prompt("Enter Last Name: ");
// var c = z.concat( a," ", b);
// document.write(c);

// ******* Chapter 21-25 & Task 7 *******/

// var a ="Hyderabad";
// var b = a.splice(1, 5, "Islam");
// alert(a);


// ******* Chapter 21-25 & Task 8 *******/

// var message = "Ali and Sami are best friends. They play cricket and football togather.";
// for(var i=0; i<message.length; i++){
// if(message.slice(i,i+3) === "and"){
//     message = message.slice(0,i)+"&"+message.slice(i+3);
// }
// }
// document.write(message);

// ******* Chapter 21-25 & Task 9 *******/

// var value = "472"
// var num = Number(value);
// document.write("Value:"+value+"<br>Type:"+typeof(value)+"<br>Value:"+num+"<br>Type:"+typeof(num));

// ******* Chapter 21-25 & Task 10 *******/

// var input = prompt("Enter you message:");
// var a = input.toUpperCase();
// document.write(input+"<br>"+a);

// ******* Chapter 21-25 & Task 11 *******/

// var input = prompt("Enter your words here:");
// var b = input.toLowerCase();
// var a = input[0].toUpperCase();
// document.write(a+b);

// ******* Chapter 21-25 & Task 12 *******/

// var num = 35.36;
// var a = num.toString();
// var str = parseInt(a);
// document.write("Number:"+num+"<br>Result:"+str+"36");

// ******* Chapter 21-25 & Task 13 *******/

// var a = prompt("Please Enter username:");
// for(var i = 0;i<a.length;i++){
// if(a.charCodeAt(i) === 33 || a.charCodeAt(i) === 44 || a.charCodeAt(i) === 46 ||a.charCodeAt(i) === 64){
//     alert("Pleas Enter a valid username:");
//     beark;
// }
// }

// ******* Chapter 21-25 & Task 14 *******/

// var a = ["cake","apple pie","cookie","chips","patties"];
// var b = prompt("Enter your desire product:");
// for(var i=0; i<a.length; i++){
//     if(a[i] === b){
//         document.write(b+ " is available in our bakery at index no: "+ a.indexOf(a[i]));
//         break;
//     }else{
//         document.write("We are sorry"+b+" is not available in our bakery");
//     }
// }

// ******* Chapter 21-25 & Task 15 *******/

// var a =["cake", "apple pie","cookie","chips","patties"];
// var b = prompt("Please Enter your desire product");
// var c = b.toLowerCase();
// for(var i =0; i < a.length; i++){
//     if(a[i] === c){
//         alert(c+" is available in our bakery at index number: "+a.indexOf(c));
//         break;
// }
//     }

// ******* Chapter 21-25 & Task 16 *******/

// var str = "karachi university";
// var arr = str.split("");
// for(var i=0; i <= arr.length;i++){
//     document.write(arr[i]+"<br>");
// }


// ******* Chapter 26-30 & Task 1 *******/

// var num = prompt("Enter a positive Integer: ");
// document.write("Number: "+num+"<br>Round off value: "+Math.round(num)+"<br>Floor Value: "+Math.floor(num)+"<br>Ceil Value: "+Math.ceil(num));

// ******* Chapter 26-30 & Task 2 *******/

// var num = prompt("Enter a negative Integer: ");
// document.write("Number: "+num+"<br>Round off value: "+Math.round(num)+"<br>Floor Value: "+Math.floor(num)+"<br>Ceil Value: "+Math.ceil(num));

// ******* Chapter 26-30 & Task 3 *******/

// var num = -4;
// var a = Math.abs(num);
// document.write("The absolute value of "+num+" is "+a);

// ******* Chapter 26-30 & Task 4 *******/

// var a = Math.floor(Math.random()*6+1);
// document.write("Random dice value: "+a);

// ******* Chapter 26-30 & Task 5 *******/

// var toss = Math.random()*2;
// var a = Math.floor(toss);
// if(a === 0){
//     document.write("Random coin value is: Heads");
// }else{
//     document.write("Random coin value is: Tails")
// }

// ******* Chapter 26-30 & Task 6 *******/

// var a = Math.random()*100+1;
// var b = Math.floor(a);
// document.write("Random number between 1 abd 100: "+b);

// ******* Chapter 26-30 & Task 7 *******/

// var a = prompt("Enter your weight: ");
// var c = prompt("Enter youe weight unit:")
// var b = parseFloat(a);
// document.write(b+c);

// ******* Chapter 26-30 & Task 8 *******/

// var a = Math.random()*10+1;
// var b = Math.floor(a);
// var input = prompt("Enter number between 1 to 10:");
// if(b === input){
//     alert("Congrates! you entered the right number:");
// }else{
//     alert("Try Again!");
// }
// document.write("Random Number: "+b +"<br>Your Number:"+input);

// ******* Chapter 31-34 & Task 1 *******/

// var a = new Date();
// document.write(a);

// ******* Chapter 31-34 & Task 2 *******/

// var months = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "Octuber", "November", "December"];
// var a = new Date();
// var b = months[a.getMvaronth()];
// document.write("Current Month: "+b);

// ******* Chapter 31-34 & Task 3 *******/

// var days = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"];
// var a = new Date();
// var b = days[a.getDay()];
// alert(b);

// ******* Chapter 31-34 & Task 4 *******/

// var a = new Date();
// var b = a.getDay();
// if(b === 0 || b === 6){
//     document.write("It's Fun Day!");   
// }

// ******* Chapter 31-34 & Task 5 *******/

// var a = new Date();
// var b = a.getDate();
// if(b <= 16){
//     document.write("First Fifteen Days of the month.");
// }else{
//     document.write("Last days of the month.");
// }

// ******* Chapter 31-34 & Task 6 *******/

// var a = new Date();
// var b = a.getTime();
// var c = (b/(1000*60));
// document.write("Current Date: "+a+"<br>Elapsed milliseconds since January 1, 1970: "+b+"<br>Elapsed minutes since January 1, 1970: "+c);

// ******* Chapter 31-34 & Task 7 *******/

// var a = new Date();
// var b = a.getHours();
// if(b <= 12){
//     document.write("It's AM");
// }else{
//     document.write("It's PM");
// }

// ******* Chapter 31-34 & Task 8 *******/

// var a = new Date();
// var b = new Date("Dec 31 2020");
// document.write("Current Date: "+a+"<br>Latter Date: "+b);

// ******* Chapter 31-34 & Task 9 *******/

// var a = new Date();
// var b = new Date("mar 25 2020");
// var c = a.getTime();
// var d = b.getTime();
// var diff = c-d;
// var days = diff/(1000*60*60*24);
// var accDays =Math.floor(days);
// document.write(accDays);

// ******* Chapter 31-34 & Task 10 *******/

// var a = new Date();
// var b = a.getTime();
// var c = new Date("Jan 1 2020");
// var d = c.getTime();
// var diff = (b-d);
// document.write("On Refference date: "+a+"<br>"+Math.floor(diff/(1000))+" Seconds had passed since the begining of 2020");

// ******* Chapter 31-34 & Task 11 *******/

// var a = new Date();
// var b = a.getTime();
// var c = b - 3600000;
// var d = new Date(c);
// document.write("Current Date: "+a+"<br>1 hour ago it was: "+d);

// ******* Chapter 31-34 & Task 12 *******/

// var a = new Date();
// var b = a.getTime();
// var c = b - (100*12*30.4372*24*60*60*1000);
// var d = new Date(c);
// alert("Current Date: "+a+"\n 100 years back: "+d);

// ******* Chapter 31-34 & Task 13 *******/

// var a = +prompt("Enter your Age: ");
// var b = new Date();
// var c = b.getTime();
// var d = a * 12 * 30 * 24 * 60 * 60 * 1000;
// var mili = c-d;
// var birthDate = new Date(mili);
// var final = birthDate.getFullYear();
// document.write(final);

// ******* Chapter 31-34 & Task 14 *******/

// document.write("<h1>K=Electric Bill</h1>");
// var months =["January", "February", "March", "April", "May", "<b>June</b>", "july", "August", "September", "Octuber", "November", "December"];
// var a = new Date();
// var unit = 410;
// var price = 16;
// var netAmount = unit*price;
// var latePayment = 350;
// var gross = netAmount + latePayment;
// var b = a.getMonth();
// var conName = "<b>ABC Customer</b>";
// document.write("Consumer Name :"+conName+"<br>Month: "+months[b]+"<br>Number of units: "+unit+"<br>Charges per unit: "+price+"<br><br>Net amount payable(within due date:"+netAmount+"<br>Late payment Charges: "+latePayment+"<br>Gross Amount Payable (after Due Date: "+gross);


// ******* Chapter 35-38 & Task 1 *******/

// function date(){
//     var a = new Date();
//     document.write(a);
// }
// date();

// ******* Chapter 35-38 & Task 2 *******/

// function name(){
//     var a = prompt("Enter your First name:");
//     var b = prompt("Enter your Last name:");
//     var c= a+" "+b;
//     alert("Welcome to the page "+c);
// }
// name();

// ******* Chapter 35-38 & Task 3 *******/

// function add(a,b){
//     var a = +prompt("Enter First Number: ")
//     var b = +prompt("Enter Second Number: ")
//     var c = a+b;
//     document.write("The Sum of your provided number is :"+c);
// }
// add();

// ******* Chapter 35-38 & Task 4 *******/

// function calculator(){
//     var num1 = +prompt("Enter 1st Number:");
//     var opr = prompt("Enter operator:");
//     var num2 = +prompt("Enter 2nd Number:");

//     if(opr === "+"){
//         var result = num1 + num2; 
//     }else if(opr === "-"){
//         var result = num1 - num2;
//     }else if(opr === "*"){
//         var result = num1 * num2;

//     }else if(opr === "/"){
//         var result = num1/num2;
//     }else{
//         alert("Invalid Operator");
//     }
// document.write(result);
// }
// calculator();

// ******* Chapter 35-38 & Task 5 *******/

// function square(a){
//     var a = a*a;
//     return a;
// }
// var a = +prompt("Enter Number to be Square:");
// var b = square(a);
// document.write(b);

// ******* Chapter 35-38 & Task 6 *******/

// function factorial(){
//     var a = +prompt("Eneter a number to find factorial:");
//     var b = 1;
//     for(var i=a; i>=1;i--){
//     b=b*i;
//     }
//     document.write("The Factorial of "+a+" is "+b);
// }
// factorial();

// ******* Chapter 35-38 & Task 7 *******/

// function counting(){
//     var a = +prompt("Enter the starting number of the counting:");
//     var b = +prompt("Enter the end number of the counting:");
//     for(var i=a;i<=b;i++){
//         document.write("<br>"+i);
//     }
// }
// counting();

// ******* Chapter 35-38 & Task 8 *******/

// var baseSqr;
// var perpSqr;
// function square(){
//     var base = +prompt("Enetr Base: ");
//     var perp = +prompt("Enetr Perpendicular: ");
//     return baseSqr = base*base;
//     return perpSqr = perp*perp;
// }
//     function hyptenouse(baseSqr,perpSqr){
//         square();
//         var z = baseSqr + perpSqr;
//      document.write(z); 
//     }
// hyptenouse();

// ******* Chapter 35-38 & Task 9 *******/

// function area(a,b){
//     var z = a*b;
//     return z;
// }
// var w = +prompt("Enter the value of Width");
// var g = area(w,5);
// document.write(g);

// ******* Chapter 35-38 & Task 10 *******/

// function palindrome(){
// var a = prompt("Enter word:");
// var check = "";
// for(var i = a.length-1; i>=0; i--){
//     check += a[i]
// }
// if(a === check){
//     document.write(a+" is a palindrome word");
// }else{
//     document.write(a+" is not a palindrome word")
// }
// }
// palindrome();

// ******* Chapter 35-38 & Task 11 *******/

// var a = "quick";
// var FirstChar = a.slice(0,1);
// var remaining = a.slice(1);
// var b = FirstChar.toUpperCase();
// var c = remaining.toLowerCase();
// var ans = b+c;
// alert(ans);

// ******* Chapter 35-38 & Task 12 *******/

// function longestWord(string) {
//     var a = string.split(" ");
//     var largest = 0;
//     var word = null;
//     for (var i = 0; i < a.length; i++) {
//         if (largest < a[i].length) {
//             largest = a[i].length;
//             word = a[i];
//         }
//     }
//     document.write(word);
// }
// longestWord("web development Tutorial");

// ******* Chapter 35-38 & Task 13 *******/

// function occurance(str , letter){
//     var Count = 0;
//     for(var i =0 ;i<str.length;i++){
//         if(str.charAt(i) === letter){
//             Count +=1;
//         }
//     }
//     return Count;
// }
// document.write(occurance("JSResourceS.com","o"));

// ******* Chapter 35-38 & Task 14 *******/

// function calcCircumference(radius){
//     var a = 2*3.142*radius;
//     return a;
// }
// var g = calcCircumference(5);
// document.write("Circumference of circle is: "+g);

// function area(radius){
// var a = 3.142*radius*radius;
// return a;
// }
// var g = area(5);
// document.write("Area of the circle is: "+g);