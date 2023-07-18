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

function timeWord(timeStr) {
  const splitTime = timeStr.split(":");
  const h = parseInt(splitTime[0]);
  const m = parseInt(splitTime[1]);

  // if (timeWord.length > 1) {
  //   // If time format correct
  //   timeWord = timeWord.slice(1); // Remove full string match value
  // }

  const hoursText = [
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
    "midnight",
  ];

  let amOrPm = "";
  let hourWord = "";

  if (h === 0) {
    hourWord = hoursText[0];
  } else if (h === 12) {
    hourWord = hoursText[12];
    amOrPm = "pm";
  } else if (h > 12) {
    hourWord = hoursText[h - 12];
    amOrPm = "pm";
  } else {
    hourWord = hoursText[h];
    amOrPm = "am";
  }

  let minuteWord = "";

  if (m === 0) {
    minuteWord = "";
  } else if (m < 10) {
    minuteWord = "oh " + hoursText[m];
  } else if (m < 20) {
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
    minuteWord = tens[Math.floor(m / 10)] + " " + hoursText[m % 10];
  }

  // Combine the hour word, minute word, and AM/PM indicator into a single string
  return hourWord + " " + minuteWord + " " + amOrPm;
}

console.log(timeWord("00:00"));

//parse
// const endtime = h >= 12 ? "PM" : "AM";

// if (timeWord.length > 1) {
//   // If time format correct
//   timeWord = timeWord.slice(1); // Remove full string match value
//   timeWord[5] = +timeWord[0] < 12 ? " AM" : " PM"; // Set AM/PM
//   timeWord[0] = +timeWord[0] % 12 || 12; // Adjust hours
// }
