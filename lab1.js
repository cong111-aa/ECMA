function tinhBMI(weight, height) {

    const bmi = weight / (height * height);
    let bmi1;
    if (bmi < 18.5) {
        bmi1 = "Thiếu cân";
    } else if (bmi < 25) {
        bmi1 = "Bình thường";
    } else if (bmi < 30) {
        bmi1 = "Thừa cân";
    } else {
        bmi1 = "Béo phì";
    }

    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${bmi1}`;
}

console.log(tinhBMI(70, 1.75));

