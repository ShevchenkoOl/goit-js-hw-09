var dayWeek=document.querySelector(".date-day"),dayDate=document.querySelector(".date"),month=document.querySelector(".date-month"),year=document.querySelector(".date-year"),clock=document.querySelector(".digital-clock"),secondArrow=document.querySelector(".clock-seconds__arrow"),minuteArrow=document.querySelector(".clock-minutes__arrow"),hourArrow=document.querySelector(".clock-hours__arrow"),arrWeekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],arrMonth=["January","February","March","April","May","June","July","August","September","October","November","December"];dayWeek.style.color="green",dayDate.style.color="green",month.style.color="green",year.style.color="green",setInterval((function(){var e=new Date;dayWeek.textContent=arrWeekDays[e.getDay()],dayDate.textContent=e.getDate(),month.textContent=arrMonth[e.getMonth()],year.textContent=e.getFullYear();var t=e.getHours().toString().padStart(2,"0"),r=e.getMinutes().toString().padStart(2,"0"),o=e.getSeconds().toString().padStart(2,"0");clock.style.color="green",clock.textContent="The time: ".concat(t,":").concat(r,":").concat(o);var a=6*e.getSeconds(),n=6*e.getMinutes(),c=30*e.getHours()+.5*e.getMinutes();secondArrow.style.transform="rotate(".concat(a,"deg)"),minuteArrow.style.transform="rotate(".concat(n,"deg)"),hourArrow.style.transform="rotate(".concat(c,"deg)")}),1e3);
//# sourceMappingURL=05-digitalClock.3fff1081.js.map
