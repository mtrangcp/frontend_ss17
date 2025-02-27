let number = +prompt("Nhập số bất kì: ");
if (typeof (number) == 'number' && !isNaN(number)) {
    let newnumber = Math.sqrt(number);
    document.write(`Căn bậc hai: ${newnumber}`);

} else {
    document.write(`Dữ liệu bạn nhập không phải số!`);
}

