function showSurprise(){

document.getElementById("message")
.classList.remove("hidden");

document.getElementById("message")
.scrollIntoView({

behavior:'smooth'

});

}

const text =
"I Love You so much Jaan  ❤️";

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
