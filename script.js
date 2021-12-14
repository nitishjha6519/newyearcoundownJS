const days_el=document.getElementById("days");
const hours_el=document.getElementById("hours");
const minutes_el=document.getElementById("minutes");
const seconds_el=document.getElementById("seconds");




const newYear= new Date(2022, 0, 1, 0, 0, 0, 0 );
console.log(newYear);
const today=new Date();
console.log(today);

let totalTimeLeft=newYear-today;
console.log(totalTimeLeft);

let daysLeft=Math.floor(totalTimeLeft/1000/60/60/24);
console.log(daysLeft);

let hoursLeft=Math.floor((totalTimeLeft/1000/60/60)%24);
	console.log(hoursLeft);

	let minutesLeft=Math.floor(totalTimeLeft/1000/60)%60;
	console.log(minutesLeft);

let secondsLeft=Math.floor(totalTimeLeft/1000)%60;
	console.log(secondsLeft);

days_el.innerHTML=daysLeft;
hours_el.innerHTML=hoursLeft;
minutes_el.innerHTML=minutesLeft;
seconds_el.innerHTML=secondsleft;