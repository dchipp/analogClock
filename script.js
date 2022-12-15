let clockContainer = document.getElementById("container")
let hourLine = document.getElementById("hourLine");
let minuteLine = document.getElementById("minuteLine");
let secondLine = document.getElementById("secondLine");
let day = document.getElementById("day");
let date = document.getElementById("date");
let currentDate = new Date();
let days = ['Domenica','Lunedì', 'Martedì','Mercoledì','Giovedì','Venerdì','Sabato']
let r = document.querySelector(':root');
let dim = getComputedStyle(r).getPropertyValue('--dimension');

for(let i = 0; i<12; i++){
    let outerDiv = document.createElement("div");
    outerDiv.className="hourSegments";
    let innerDiv = document.createElement("div");
    innerDiv.className="segment";
    let innerSpan = document.createElement("SPAN");
    innerSpan.className="time";
    innerSpan.setAttribute('id', "time");
    innerDiv.appendChild(innerSpan);
    outerDiv.appendChild(innerDiv);
    clockContainer.insertAdjacentElement('afterbegin',outerDiv)
}
for(let i = 0; i<60; i++){
    let outerDiv = document.createElement("div");
    outerDiv.className="minutesSegments";
    let innerDiv = document.createElement("div");
    innerDiv.className="minuteSegment";
    outerDiv.appendChild(innerDiv);
    clockContainer.insertAdjacentElement('afterbegin',outerDiv)
}
let hourSegments = document.querySelectorAll(".hourSegments");
let minuteSegments = document.querySelectorAll(".minutesSegments");
let numbers = document.querySelectorAll(".time");

hourSegments.forEach((x, index) => {
    x.style.transform = `rotate(${index*30-60}deg)`;
    numbers[index].innerHTML=index+1;
    if(numbers[index].innerHTML.length<2){
        numbers[index].style.transform = ` translateX(-25px) rotate(${(index*30-60)*-1}deg)`;
    } else {
        numbers[index].style.transform = ` translateX(-20px) rotate(${(index*30-60)*-1}deg)`;
    }
})
minuteSegments.forEach((x, index) => {
    x.style.transform = `rotate(${index*6-60}deg)`;
    if(index%5==0){
        x.children[0].style.background="transparent";
    }
})

setInterval(()=>{
    dim = getComputedStyle(r).getPropertyValue('--dimension');
    document.querySelectorAll("#time").forEach(x => x.style.fontSize = `${parseInt(dim) * 170 / 700}%`)
    hourLine.style.width=`${parseInt(dim) * 170 / 700}px`;
    hourLine.style.height=`${parseInt(dim) * 7 / 700}px`;
    minuteLine.style.width=`${parseInt(dim) * 300 / 700}px`;
    minuteLine.style.height=`${parseInt(dim) * 7 / 700}px`;
    secondLine.style.width=`${parseInt(dim) * 330 / 700}px`;
    secondLine.style.height=`${parseInt(dim) * 2.5 / 700}px`;
    date.style.fontSize= `${parseInt(dim) * 300 / 700}%`
    date.style.top=`${parseInt(dim) * 195 / 700}px`;
    day.style.fontSize= `${parseInt(dim) * 340 / 700}%`
    day.style.top=`${parseInt(dim) * 140 / 700}px`;
    currentDate=new Date();
    hourLine.style.transform = `translateY(-50%) rotate(${((360*(currentDate.getHours()%12))/12)-90+(currentDate.getMinutes()*0.5)}deg)`;
    minuteLine.style.transform = `translateY(-50%) rotate(${((360*(currentDate.getMinutes()))/60)-90}deg)`; 
    secondLine.style.transform = `translateY(-50%) rotate(${((360*(currentDate.getSeconds()))/60)-90}deg)`;
    day.innerText=days[currentDate.getDay()];
    date.innerText=`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

},10)