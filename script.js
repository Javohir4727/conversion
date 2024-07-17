// var startDate = new Date("2015-07-15T00:00:00");
// var currentDate = new Date();
// var timeDifference = currentDate - startDate;
// var minutesDifference = Math.floor(timeDifference / (1000 * 60));
// console.log("2015 yil 15-iyuldan bugungi kunga qadar o'tgan daqiqalar soni:", minutesDifference);

// Birinchi vazifa
var userInput = prompt("Ma'lumot kiriting, masalan: YYYY/MM/DD hh:mm");

var time = new Date();
var years = time.getFullYear();
var months = time.getMonth() + 1;
var days = time.getDate();
var hours =  time.getHours()
var minutes = time.getMinutes()

var userInput2 = userInput
  .replace("YYYY", years)
  .replace("MM", months)
  .replace("DD", days)
  .replace("hh", hours)
  .replace("mm", minutes);

console.log(userInput2);

// Ikkinchi vazifa