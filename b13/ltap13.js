let money = +prompt("Nhập số tiền gửi: ");
let month = +prompt("Nhập số tháng gửi: ");

if (Number.isInteger(money) && Number.isInteger(month) && money > 0 && month > 0) {
    let interest = (money * month * 0.043) / 12;
    formattedInterest = interest.toLocaleString({ style: 'currency', currency: 'VND' });
    document.write(`Lãi: ${formattedInterest} VNĐ`);

} else {
    document.write(`Tiền hoặc tháng gửi không hợp lệ!`);
}
