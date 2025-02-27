let string1 = "5";
let string2 = "-1";
let string3 = "Hello";

string1 = +string1;
let typeStr1 = typeof (string1);
string2 = +string2;
let typeStr2 = typeof (string2);
string3 = +string3;
let typeStr3 = typeof (string3);

document.write(`Kiểu string1: ${typeStr1} <br/> `);
document.write(`Kiểu string2: ${typeStr2} <br/> `);
document.write(`Kiểu string3: ${typeStr3} <br/> <br/> `);


let number1 = 55;
let number2 = -10;
let number3 = 0;

number1 = number1.toString();
let typeNum1 = typeof (number1);
number2 = number2.toString();
let typeNum2 = typeof (number2);
number3 = number3.toString();
let typeNum3 = typeof (number3);

document.write(`Kiểu number1: ${typeNum1} <br/> `);
document.write(`Kiểu number2: ${typeNum2} <br/> `);
document.write(`Kiểu number3: ${typeNum3} <br/> `);
