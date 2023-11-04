// 1-ая функция
const checkStringLength = (line, maxLength) => line.length <= maxLength;

checkStringLength('мяу', 2); // false
checkStringLength('ляляля', 10); // true

// 2-ая функция
const checkPolindrom = (line) => {
  line = line.replaceAll(' ', '').toLowerCase();
  return line === [...line].reverse().join('');
};

checkPolindrom('ДовОд'); // true
checkPolindrom('А роза упала на лапу Азора'); // true
checkPolindrom('мяу'); // false

// 3-я функция
const findNumber = (line) => parseInt(line.replace(/\D+/g, ''), 10);

findNumber('2023 год'); // 2023
findNumber('ляляля'); // NaN
findNumber('агент 007'); // 7
