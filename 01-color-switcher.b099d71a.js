const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");t.addEventListener("click",(()=>{intervalID=setInterval((()=>{a.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),2e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(()=>{clearInterval(intervalID),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.b099d71a.js.map