let r = +prompt("Nhập bán kính: ");
let h = +prompt("Nhập chiều cao: ");

let sRoud = 2 * h * r * Math.PI;
let stotal = 2 * r * Math.PI * (r + h);
let v = Math.PI * h * Math.pow(r, 2);
let c = 2 * r * Math.PI;

document.write(`Diện tích xung quanh: ${sRoud} <br/>`);
document.write(`Diện tích toàn phần: ${stotal} <br/>`);
document.write(`Thể tích: ${v} <br/>`);
document.write(`Chu vi đáy: ${c} `);


