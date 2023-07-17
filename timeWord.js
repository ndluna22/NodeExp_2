// Input	Expected Output
// 00:00	midnight
// 00:12	twelve twelve am
// 01:00	one o’clock am
// 06:01	six oh one am
// 06:10	six ten am
// 06:18	six eighteen am
// 06:30	six thirty am
// 10:34	ten thirty four am
// 12:00	noon
// 12:09	twelve oh nine pm
// 23:23	eleven twenty three pm

//parse

// const endtime = h >= 12 ? "PM" : "AM";

// const hourwords = [
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//     "ten",
//     "eleven",
//     "noon",
//     "midnight",
//   ];

// if (timeWord.length > 1) {
//   // If time format correct
//   timeWord = timeWord.slice(1); // Remove full string match value
//   timeWord[5] = +timeWord[0] < 12 ? " AM" : " PM"; // Set AM/PM
//   timeWord[0] = +timeWord[0] % 12 || 12; // Adjust hours
// }

function timeToWords(timeStr) {
  // Split the input string into hour and minute parts
  const timeParts = timeStr.split(":");
  const hour = parseInt(timeParts[0]);
  const minute = parseInt(timeParts[1]);

  // Array of words to represent hours
  const hoursToWords = [
    "midnight",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "noon",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
  ];

  let amOrPm = "";
  let hourWord = "";

  // Determine the hour word and AM/PM indicator based on the input hour
  if (hour === 0) {
    hourWord = hoursToWords[0];
  } else if (hour === 12) {
    hourWord = hoursToWords[12];
    amOrPm = "pm";
  } else if (hour > 12) {
    hourWord = hoursToWords[hour - 12];
    amOrPm = "pm";
  } else {
    hourWord = hoursToWords[hour];
    amOrPm = "am";
  }

  let minuteWord = "";

  // Determine the minute word based on the input minute
  if (minute === 0) {
    minuteWord = "";
  } else if (minute < 10) {
    minuteWord = "oh " + hoursToWords[minute];
  } else if (minute < 20) {
    const specialMinutes = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];
    minuteWord = specialMinutes[minute - 10];
  } else {
    const tens = ["", "", "twenty", "thirty", "forty", "fifty"];
    minuteWord =
      tens[Math.floor(minute / 10)] + " " + hoursToWords[minute % 10];
  }

  // Combine the hour word, minute word, and AM/PM indicator into a single string
  return hourWord + " " + minuteWord + " " + amOrPm;
}

console.log(timeWord("00:00"));
