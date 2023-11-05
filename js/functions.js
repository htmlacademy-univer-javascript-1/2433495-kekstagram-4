// 2 модуль 1-ая функция
const checkStringLength = (line, maxLength) => line.length <= maxLength;

checkStringLength('мяу', 2); // false
checkStringLength('ляляля', 10); // true

// 2 модуль 2-ая функция
const checkPolindrom = (line) => {
  line = line.replaceAll(' ', '').toLowerCase();
  return line === [...line].reverse().join('');
};

checkPolindrom('ДовОд'); // true
checkPolindrom('А роза упала на лапу Азора'); // true
checkPolindrom('мяу'); // false

// 2 модуль 3-я функция
const findNumber = (line) => parseInt(line.replace(/\D+/g, ''), 10);

findNumber('2023 год'); // 2023
findNumber('ляляля'); // NaN
findNumber('агент 007'); // 7

// 5 модуль
const meetingInWorkingTime = (startDayTime, endDayTime, meetingStart, meetingTime) => {
  const endMeetingMinutes = convertToMinutes(meetingStart) + meetingTime;

  if (endMeetingMinutes >= convertToMinutes(startDayTime) && endMeetingMinutes <= convertToMinutes(endDayTime)) {
    return true;
  }
  return false;

  function convertToMinutes (time) {
    return time.split(':')[0] * 60 + time.split(':')[1];
  }
};

meetingInWorkingTime('08:00', '17:30', '14:00', 90);
meetingInWorkingTime('8:0', '10:0', '8:0', 120);
meetingInWorkingTime('08:00', '14:30', '14:00', 90);
meetingInWorkingTime('14:00', '17:30', '08:0', 90);
meetingInWorkingTime('8:00', '17:30', '08:00', 900);
