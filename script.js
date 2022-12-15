let hourLine = document.getElementById("hourLine");
let minuteLine = document.getElementById("minuteLine");
let secondLine = document.getElementById("secondLine");
let day = document.getElementById("day");
let date = document.getElementById("date");
let currentDate = new Date();
let days = ['Domenica','Lunedì', 'Martedì','Mercoledì','Giovedì','Venerdì','Sabato']
setInterval(()=>{
    currentDate=new Date();
    hourLine.style.transform = `rotate(${((360*(currentDate.getHours()%12))/12)-90+(currentDate.getMinutes()*0.5)}deg)`;
    minuteLine.style.transform = `rotate(${((360*(currentDate.getMinutes()))/60)-90}deg)`; 
    secondLine.style.transform = `rotate(${((360*(currentDate.getSeconds()))/60)-90}deg)`;
    day.innerText=days[currentDate.getDay()];
    date.innerText=`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
},10)