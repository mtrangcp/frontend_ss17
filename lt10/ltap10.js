let number = +prompt("Nhập số: ");

if (number < 0) {
    document.write(`Số ${number} không là số chính phương!`);

} else {
    let sqrtNumber = Math.sqrt(number);

    if (Number.isInteger(sqrtNumber)) {
        document.write(`Số ${number} là số chính phương!`);
    } else {
        document.write(`Số ${number} không là số chính phương!`);
    }
}



