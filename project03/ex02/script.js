const welcome=document.getElementById("welcome");
const battel=document.getElementById("battel");
const myname=document.querySelector("p.des");
welcome.textContent="It just changed!";
welcome.style.color="blue";
myname.classList.add("active");
welcome.classList.toggle("active");
