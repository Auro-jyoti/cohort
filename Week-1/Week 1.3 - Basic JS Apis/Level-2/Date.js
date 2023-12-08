// 1970 is the checkpoint, from where epoch count in made.

function dateMethods() {
  const currentDate = new Date();
  console.log("Current Date : ", currentDate);

  console.log("Date : ", currentDate.getDate());
  console.log("Month : ", currentDate.getMonth() + 1);

  console.log("Year : ", currentDate.getFullYear());
  console.log("Hours : ", currentDate.getHours());

  console.log("Minutes : ", currentDate.getMinutes());
  console.log("Seconds : ", currentDate.getSeconds());

  console.log("Miliseconds : ", currentDate.getMilliseconds());
  console.log("Day : ", currentDate.getDay());

//   epoch timestamp
  console.log("Time in milliseconds since 1970 : ", currentDate.getTime());
}

dateMethods()

//setting the date
currentDate.setFullYear(2023);
currentDate.setMonth(0); // 0-indexed (0 for January, 11 for December)
currentDate.setDate(1);
currentDate.setHours(12);
currentDate.setMinutes(0);
currentDate.setSeconds(0);
currentDate.setMilliseconds(0);


function currentTimePrint() {
    console.log(new Date().getTime());
}

setInterval(currentTimePrint, 1000);

const formattedDate = currentDate.toLocaleString();
const formattedDateOnly = currentDate.toLocaleString();
console.log(formattedDate);
console.log(formattedDateOnly);

// how would you calculate the time taken by a function to execute?

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();

// call the function here

const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();

console.log(afterTimeInMs - beforeTimeInMs);