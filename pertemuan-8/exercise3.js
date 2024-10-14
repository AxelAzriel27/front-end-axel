let human = {
  firstName: "Axel Kopalit",
  beratBadan: 70,
  tinggiBadan: 1.7,

  calculateBMI: function (beratBadan, tinggiBadan) {
    let BMI = this.beratBadan / (this.tinggiBadan * this.tinggiBadan);

    if (BMI < 16.0) {
      kategori = "Severly Underweight";
    } else if (BMI >= 16.0 && BMI < 18.5) {
      kategori = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25.0) {
      kategori = "Normal";
    } else if (BMI >= 25.0 && BMI < 30.0) {
      kategori = "Overweight";
    } else if (BMI >= 30.0 && BMI < 35.0) {
      kategori = "Moderately Obese";
    } else if (BMI >= 35.0 && BMI < 40.0) {
      kategori = "Severly Obese";
    } else {
      kategori = "Morbidly Obese";
    }
    return "BMI anda: " + BMI + ", Kategori: " + kategori;
  },
};

human.BMI = human.calculateBMI();
console.log(human);
