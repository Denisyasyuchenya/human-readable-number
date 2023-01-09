
const decs = {
  0: 'zero',
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety"
};

module.exports = function toReadable (number) {
const once = number.toString();
const hundred = number % 100;
const decimal = number % 10;
let result = '';

if(once.length === 3){
  if (decimal === 0) {
    result+= decs[(number - hundred)  / 100] + ' hundred ';
    if(hundred !== 0){
      result+= decs[hundred - decimal]
    }
  }
  if (decimal !== 0) {
    result += decs[(number - hundred)  / 100] + ' hundred';
    if (hundred <= 19) {
      result += ' ' + decs[hundred];
    }
    if (hundred > 19) {
      result += ' ' + decs[hundred - decimal] + ' ' + decs[decimal];
  }
}    
  return result.trim();
}

if(once.length === 2){
  if(number <= 19){
    return decs[number]
  }else{
    if(decimal === 0){
      result += decs[number]
    }
   if(decimal !== 0){
    result+= decs[number - decimal] + ' ' + decs[decimal]
     
   }
   return result.trim()
  }
}
return decs[number]
}