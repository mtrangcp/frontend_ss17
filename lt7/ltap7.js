let number = +prompt("Nhập số bất kì: ");

if (typeof (number) == 'number' && !isNaN(number)) {
    number = number.toLocaleString({ style: 'currency', currency: 'VND' });
    document.write(`Kết quả: ${number} VNĐ`);

} else {
    document.write(`Dữ liệu bạn nhập không phải số!`);
}
