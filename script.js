function showSurprise(){

document.getElementById("message")
.classList.remove("hidden");

document.getElementById("message")
.scrollIntoView({

behavior:'smooth'

});

/* Cute popup */

setTimeout(()=>{

alert("Happiest Birthday My Jaan ❤️✨");

},1000);

}

/* Typing Text */

const text =
"I Love You So Much Jaan ❤️";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing")
.innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();

/* Floating Hearts Generator */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "💖";

heart.style.position = "fixed";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize =
(Math.random() * 20 + 20) + "px";

heart.style.animation =
"floatUp 6s linear";

heart.style.zIndex = "999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,700);

/* Cute Console Message */

console.log(
"Happy Birthday Mr. Kashyap ❤️"
);

/* Secret Click */

document.addEventListener("click",()=>{

console.log(
"I Love You Forever ❤️"
);

});
