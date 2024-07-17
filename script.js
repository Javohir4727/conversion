var startDate = new Date("2015-07-15T00:00:00");
var currentDate = new Date();
var timeDifference = currentDate - startDate;
var minutesDifference = Math.floor(timeDifference / (1000 * 60));
console.log("2015 yil 15-iyuldan bugungi kunga qadar o'tgan daqiqalar soni:", minutesDifference);
