// var startDate = new Date("2015-07-15T00:00:00");
var currentDate = new Date();
// var timeDifference = currentDate - startDate;
// var minutesDifference = Math.floor(timeDifference / (1000 * 60));
// console.log("2015 yil 15-iyuldan bugungi kunga qadar o'tgan daqiqalar soni:", minutesDifference);

// Birinchi vazifa
// var userInput = prompt("Ma'lumot kiriting, masalan: YYYY/MM/DD hh:mm");

var time = new Date();
// var years = time.getFullYear();
// var months = time.getMonth() + 1;
// var days = time.getDate();
// var hours =  time.getHours()
// var minutes = time.getMinutes()

// var userInput2 = userInput
//   .replace("YYYY", years)
//   .replace("MM", months)
//   .replace("DD", days)
//   .replace("hh", hours)
//   .replace("mm", minutes);

// console.log(userInput2);

// Ikkinchi vazifa

// var userPrompt = prompt("O'tmishdagi  sanani kiriting  birinchi yil keyin oy va kun bolsin masalan 2010/10/10 !!!")

// Uchunchi vazifa
var userAge = prompt("Tug'ulgan sanangizni yozing masalan:  1997/8/15 ");
// 80  in minutes
// 4800 in hours
// 115200 in Day
// 42048000 in Years
var userBirth = new Date(userAge);
var findUserBith = currentDate - userBirth;
var findUserBith2 = Math.floor(findUserBith / (1000 * 60 * 60));
var findUserBith3 = Math.floor(findUserBith / (1000 * 60 * 60 * 24));

console.log(
  `Sizning yoshinginz ${ findUserBith3 / 365} va sizning yuragingiz bugungi kunga qadar tahminan ${ findUserBith2 * 4800}  marta urgan`);
