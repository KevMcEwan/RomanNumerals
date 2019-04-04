function solution(string) {

    //replaces substrings in string with integers
    var replaceCharsWithInts = string
        //units
        .replace("IX", 9)
        .replace("VIII", 8)
        .replace("VII", 7)
        .replace("VI", 6)
        .replace("IV", 4)
        .replace("V", 5)
        .replace("III", 3)
        .replace("II", 2)
        .replace("I", 1)
        //tens
        .replace("XC", 9)
        .replace("LXXX", 8)
        .replace("LXX", 7)
        .replace("LX", 6)
        .replace("XL", 4)
        .replace("L", 5)
        .replace("XXX", 3)
        .replace("XX", 2)
        .replace("X", 1)
        //hundreds
        .replace("CM", 9)
        .replace("DCCC", 8)
        .replace("DCC", 7)
        .replace("DC", 6)
        .replace("CD", 4)
        .replace("D", 5)
        .replace("CCC", 3)
        .replace("CC", 2)
        .replace("C", 1)

    //calculates value of remaining "M"s as an integer
    var thousands = parseInt((replaceCharsWithInts.split("").filter(char => char == "M").length * 1000), 10);
    
    //returns a string with remaining "M"s removed
    var exceptThousands = replaceCharsWithInts.split("").filter(char => char !== "M").join("");

    //turns the exceptThousands string into an int and adds the thousands to get result
    var result = parseInt(exceptThousands, 10) + thousands;

    return result;
}

console.log(solution("MMXII"));
