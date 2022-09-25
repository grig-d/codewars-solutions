/*
Description:
Oh, I love to take a vacation! Because I can travel to different cities in the holidays. From one city to another, we can choose different transportation tools according to our own preferences.
From Beijing to Shanghai, if you take a plane, it may take a few hours; If you ride a bike, it may take a few days; If you walk, you may need a few months; If you're in a wheelchair, it might take a few years ;-)

In this kata, a plan will be given by an array:
[["airplane",1000],["train",500],["ship",200],["walk",50]]
Each element is a combination of transport and distance(Km). An object speed is preloaded, it contains all the speed(Km/hour) of transport:

speed={airplane:800, train:200, ship:70, bike.........}
Please calculate the time required to arrive at the destination and return a string in accordance with the following rules:

Unit of time can be: second, minute, hour, day, week(7 days), month(30 days), year(365 days), century(100 years)

If the result < 1 second, please return "less than 1 second";
If the result >= 1 second and < 1 minute, please return "1 second/n seconds";
If the result >= 1 minute and < 1 hour, please return "1 minute/n minutes";
and so on..
and so on..
If the result >= 1 year and < 1 century, please return "1 year/n years";
If the result >= 1 century, please return "1 century/n centuries" ;-)
Just a kata, please don't worry if you're going to die on the road ;-)
n should be a integer, if the result is not a integer, please round it to the nearest integer. For example, 1 hour 29 minutes should return "1 hour", 1 hour 30 minutes should return "2 hours".
The input array always be a non empty array.

Examples
howManyTime([["airplane",400],["train",400]]) === "3 hours"
howManyTime([["walk",400]]) === "2 days"
howManyTime([["wheelchair",400]]) === "1 week"
howManyTime([["UFO",400]]) === "2 minutes"
howManyTime([["snail",400]]) === "91 years"
howManyTime([["space transfer gate",400]]) === "less than 1 second"
*/

// speed (Km/hour)
const speed = {
  'space transfer gate': 10000000000,
  UFO: 10000,
  spaceship: 5000,
  missile: 1500,
  airplane: 800,
  train: 200,
  car: 100,
  ship: 70,
  bike: 30,
  motorcycle: 60,
  walk: 10,
  wheelchair: 2,
  tortoise: 0.1,
  snail: 0.0005,
};

function howManyTime(plan) {
  let timeHours = 0;
  let time = 0;
  // time ih hours units
  plan.forEach(element => {
    timeHours += element[1] / speed[element[0]];
  });

  if (timeHours * 60 * 60 < 1) {
    return 'less than 1 second';
  }

  // time in second units
  time = Math.round(timeHours * 60 * 60);
  if (time < 60) {
    const unitName = time > 1 ? 'seconds' : 'second';
    return `${time} ${unitName}`;
  }

  // time in minute units
  time = Math.round(timeHours * 60);
  if (time < 60) {
    const unitName = time > 1 ? 'minutes' : 'minute';
    return `${time} ${unitName}`;
  }

  // time in hour units
  time = Math.round(timeHours);
  if (time < 24) {
    const unitName = time > 1 ? 'hours' : 'hour';
    return `${time} ${unitName}`;
  }

  // time in day units
  time = Math.round(timeHours / 24);
  if (time < 7) {
    const unitName = time > 1 ? 'days' : 'day';
    return `${time} ${unitName}`;
  }

  // first convert in days unit and compare if time < 30 days then convert in week unit
  // time in day units
  time = Math.round(timeHours / 24);
  if (time < 30) {
    // time in week units
    time = Math.round(timeHours / 24 / 7);
    const unitName = time > 1 ? 'weeks' : 'week';
    return `${time} ${unitName}`;
  }

  // first convert in days unit and compare if time < 365 days then convert in month unit
  // time in day units
  time = Math.round(timeHours / 24);
  if (time < 365) {
    // time in month units
    time = Math.round(timeHours / 24 / 30);
    const unitName = time > 1 ? 'months' : 'month';
    return `${time} ${unitName}`;
  }

  // time in year units
  time = Math.round(timeHours / 24 / 365);
  if (time < 100) {
    const unitName = time > 1 ? 'years' : 'year';
    return `${time} ${unitName}`;
  }

  // time in century units
  time = Math.round(timeHours / 24 / 365 / 100);
  const unitName = time > 1 ? 'centuries' : 'century';
  return `${time} ${unitName}`;
}

console.log(
  howManyTime([
    ['airplane', 400],
    ['train', 400],
  ]),
); // "3 hours"
console.log(howManyTime([['walk', 400]])); // "2 days"
console.log(howManyTime([['wheelchair', 400]])); // "1 week"
console.log(howManyTime([['UFO', 400]])); // "2 minutes"
console.log(howManyTime([['snail', 400]])); // "91 years"
console.log(howManyTime([['space transfer gate', 400]])); // "less than 1 second"
console.log(howManyTime([['snail', 8191.66]])); // "19 centuries"
console.log(howManyTime([['snail', 500]])); // "1 century"
