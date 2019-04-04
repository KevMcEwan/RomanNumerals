function solution(number) {
    var numberArray = number.toString().split("");

    if (numberArray.length == 1) {
        numberArray.unshift(0, 0, 0);
    } else if (numberArray.length == 2) {
        numberArray.unshift(0, 0);
    } else if (numberArray.length == 3) {
        numberArray.unshift(0);
    } else if (numberArray.length == 4 && numberArray[0] > 0 && numberArray[0] < 5) {

    } else {
        numberArray = [0, 0, 0, 0];
    }

    var thousand = numberArray[0];
    var hundred = numberArray[1];
    var ten = numberArray[2];
    var unit = numberArray[3];

    var string = thousand + hundred + ten + unit;

    if (thousand == 0 && hundred == 0 && ten == 0) {
        string = unit;
    } else if (thousand == 0 && hundred == 0) {
        string = ten + unit;
    } else if (thousand == 0) {
        string = hundred + ten + unit;
    }

    var thousand = "M".repeat(numberArray[0]);

    if (hundred == 5) {
        hundred = "D";
    } else if (hundred == 9) {
        hundred = "CM";
    } else if (hundred > 5 && hundred < 9) {
        hundred = "D" + "C".repeat(hundred - 5);
    } else if (hundred < 4 ) {
        hundred = "C".repeat(hundred);
    } else if (hundred == 4){
        hundred = "CD";
    }

    if (ten == 5) {
        ten = "L";
    } else if (ten == 9) {
        ten = "XC";
    } else if (ten > 5 && ten < 9) {
        ten = "L" + "X".repeat(ten - 5);
    } else if (ten == 4) {
        ten = "XL";
    } else if (ten < 4 ) {
        ten = "X".repeat(ten);
    }

    if (unit == 9) {
        unit = "IX";
    } else if (unit == 5) {
        unit = "V";
    } else if (unit == 4) {
        unit = "IV";
    } else if (unit > 5 && unit < 9) {
        unit = "V" + "I".repeat(unit - 5);
    } else if (unit < 4 ) {
        unit = "I".repeat(unit);
    }

    var string = thousand + hundred + ten + unit;

    if (string <= 0 || string <= "0"){
        var string = "Can only convert numbers between 1 and 4999 inclusive";
    } else {
        var string = thousand + hundred + ten + unit;
    }

    return string;
    
}

console.log(solution(5));
