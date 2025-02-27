let r = +prompt("Nhập bán kính hình cầu: ");

let v = Math.PI * (4 / 3) * Math.pow(r, 3);
let s = 4 * Math.pow(r, 2) * Math.PI;
let c = 2 * r * Math.PI;


document.write(`Thể tích: ${v} <br/>`);
document.write(`Diện tích bề mặt: ${s} <br/>`);
document.write(`Chu vi lớn nhất: ${c} `);


