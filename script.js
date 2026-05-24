
/* ================= SHOW SECOND PAGE ================= */
function showSurprise() {

    document.getElementById("message")
        .classList.remove("hidden");

    document.getElementById("message")
        .scrollIntoView({
            behavior: 'smooth'
        });

    setTimeout(() => {
        alert("💖 Happiest Birthday My Love ❤️✨");
    }, 1000);
}


/* ================= TYPING EFFECT ================= */
const text = "I Love You So Much Jaan ❤️";
let i = 0;

function typing() {
    let el = document.getElementById("typing");

    if (!el) return;

    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

/* start typing when page loads */
window.addEventListener("load", () => {
    typing();
});


/* ================= FLOATING HEARTS ================= */
function createHeart() {

    const heart = document.createElement("div");
    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.style.animation = "floatUp 6s linear";
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);


/* ================= ANIMATIONS ================= */
let style = document.createElement("style");

style.innerHTML = `
@keyframes floatUp {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-120vh);
        opacity: 0;
    }
}
`;

document.head.appendChild(style);


/* ================= CONSOLE MESSAGE ================= */
console.log("💖 Happy Birthday My Love 💖");


/* ================= SECRET DOUBLE CLICK ================= */
document.addEventListener("dblclick", () => {
    alert("💖 You are my everything 💖");
});
