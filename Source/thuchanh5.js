let a, b, c;
a=prompt("nhập vào số tiền vay ban đầu:");
b=prompt("nhập vào lãi suất vay:");
c=prompt("nhập vào số năm vay");
let x=parseInt(a); //x là số tiền vay
let y=parseFloat(b); //y là lãi suất vay
let n=parseInt(c); //n là số năm vay
let z=(x*y)/100; //z là số tiền lãi suất một năm phải trả
let s=x+(n*z); //tổng số tiền phải trả
document.write("Tổng số tiền vay ban đầu là: " + x + "triệu");
document.write("<br>");
document.write("Lãi suất vay một năm là: " + y + "%");
document.write("<br>");
document.write("Số năm vay là: " + n + "năm");
document.write("<br>");
document.write("Số tiền lãi suất một năm phải trả: " + z + "triệu");
document.write("<br>");
document.write("Tổng số tiền cả gốc và lãi là: " + s + "triệu");



