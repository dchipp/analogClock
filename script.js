let hourLine = document.getElementById("hourLine");
let minuteLine = document.getElementById("minuteLine");
let date = new Date();
let angle = 0;
let a;
let b;
let c;
setInterval(()=>{
    date=new Date();
    console.log(date.getSeconds())
    hourLine.style.transform = `translateX(50%) rotate(${((360*(date.getHours()%12))/12)-90+7+(((((360*(date.getMinutes()))/60)-90)*30)/360)}deg)`;
    minuteLine.style.transform = `translateX(50%) rotate(${((360*(date.getMinutes()))/60)-90}deg)`; 
},10)