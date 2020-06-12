let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const runnersAge = 18;
if (runnersAge > 18 && registeredEarly){ 
  raceNumber += 1000
}
if (runnersAge > 18 && registeredEarly){
  console.log(`Your Race time is 9:30 am and your number is ${raceNumber}.`);
}
else if (runnersAge > 18 && !registeredEarly){
  console.log(`Your Race time is 11:00 am and your number is ${raceNumber}.`);
}
if (runnersAge < 18){
  console.log(`Your Race time is 9:30 am and your number is ${raceNumber}`)
}
else if(runnersAge === 18){
  console.log('See registration desk for more information')
}
