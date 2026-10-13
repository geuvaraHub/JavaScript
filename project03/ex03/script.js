const counter = document.getElementById("counter");
const increase=document.getElementById("increase");
const decrease= document.getElementById("decrease");
const reset=document.getElementById("reset");

let count=0;
increase.addEventListener("click",increasefun);
decrease.addEventListener("click",decreasefun);
reset.addEventListener("click",resetfun);

function increasefun(){
count++;
counter.textContent=count;
countercolo();
}
function decreasefun(){
count--;
counter.textContent=count;
countercolo();
}


function resetfun(){
count=0;
counter.textContent=count;
countercolo();
}

function countercolo(){
	if (count < 0)
		counter.style.color="red";
	else if (count > 0)
		counter.style.color="green";
	else
		counter.style.color="black";
}




