let a = prompt("Nhập a: ");
let b = prompt("Nhập b: ");
let c = prompt("Nhập c: ");

let delta = b * b - 4 * a * c;
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

document.write(`x1: ${x1} <br/>`);
document.write(`x2: ${x2}`);












