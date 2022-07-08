module.exports = function toReadable (number) {

  const units = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve',
  'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','thirty','forty',
  'fifty','sixty','seventy','eighty','ninety'];
  
  let numeric;

if (number === 0) {
  return 'zero'
} else {
  
const hundred = (number/100|0) > 0 ? units[number/100|0] + ' ' + 'hundred' : '';

const tens0 = ((number%100 <= 20) && (number%100 >= 10)) ? units[number%100] : '';

const tens = (number%100 > 20) ? units[(number%100/10|0) + 18] : '';

const unit = (((number%100)%10 < 10) && (number%100 > 20)) ? units[(number%100)%10] : '';

const unit0 = (number%100 < 10) ? units[(number%100)%10] : '';

//number1 = hundred + ' ' + tens + tens0 + ' ' + unit + unit0;

if (hundred !== '') {numeric = hundred} else {numeric = ''};
if (tens0 !== '' || tens !== '') {numeric = numeric + ' ' + tens0 + tens};
if (unit0 !== '' || unit !== '') {numeric = numeric + ' ' + unit0 + unit};

  return numeric.trim();
};
  
}
