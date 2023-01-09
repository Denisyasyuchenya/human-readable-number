import { decs } from "./constant";

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