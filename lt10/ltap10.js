let number = +prompt("Nhập số: ");

if (number < 0) {
    document.write(`Số ${number} không là số chính phương!`);

} else {
    let sqrtNumber = Math.sqrt(number);

    Number.isInteger(sqrtNumber) ? document.write(`Số ${number} là số chính phương!`) : document.write(`Số ${number} không là số chính phương!`);

}



