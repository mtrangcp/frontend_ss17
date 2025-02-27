let date1 = prompt("Nhập day1(yyyy-mm-dd): ");
let date2 = prompt("Nhập day2(yyyy-mm-dd): ");

const regex = /^\d{4}-\d{2}-\d{2}$/;

if (!regex.test(date1) || !regex.test(date2)) {
    document.write(`Định dạng không hợp lệ!`);
} else {
    const day1 = new Date(date1);
    const day2 = new Date(date2);

    if (isNaN(day1.getTime()) || isNaN(day2.getTime())) {
        document.write(`Ngày không hợp lệ!`);
    } else {
        let diffDay = Math.abs(day1 - day2);
        diffDay = Math.ceil(diffDay / (1000 * 60 * 60 * 24));
        document.write(`Độ lệch: ${diffDay} ngày`);
    }
}


