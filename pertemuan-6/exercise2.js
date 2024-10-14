//Modifikasi exercise 1
// 1. menggunakan IIFE
let output = (function(beratBadan,tinggiBadan){
    let BMI = beratBadan / (tinggiBadan * tinggiBadan);
    return BMI
})(70,1.7);
console.log("BMI anda adalah " + output);

// 2. Menggunakan Callback function
function hitungBMI (beratBadan,tinggiBadan,callback){
    let BMI = beratBadan / (tinggiBadan * tinggiBadan);
    callback(BMI);
}
let beratBadan = 70;
let tinggiBadan = 1.7;
hitungBMI(beratBadan,tinggiBadan, function(output){
    console.log("BMI anda adalah " + output);
})