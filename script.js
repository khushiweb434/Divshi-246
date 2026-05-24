function showSurprise() {

    let msg = document.getElementById("message");

    if (msg) {
        msg.classList.remove("hidden");

        msg.scrollIntoView({
            behavior: 'smooth'
        });
    }

    setTimeout(() => {
        alert("Happiest Birthday My Jaan ❤️✨");
    }, 1000);
}


/* ✨ TYPING TEXT */
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

window.addEventListener("load", () => {
    let el = document.getElementById("typing");

    if (el && el.innerHTML.trim() === "") {
        typing();
    }
});


/* 💖 FLOATING HEARTS */
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

setInterval(createHeart, 700);


/* 🎉 FLOAT ANIMATION */
let style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-120vh);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);


/* 💬 CONSOLE MESSAGE */
console.log("Happy Birthday Mr. Kashyap ❤️");


/* 👀 SECRET DOUBLE CLICK EASTER EGG */
document.addEventListener("dblclick", () => {
    console.log("You found my hidden love 💖");
    alert("💖 You are my everything 💖");
});
