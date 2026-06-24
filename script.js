const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.25,
  }
);

fadeItems.forEach((item) => observer.observe(item));

const heartContainer = document.querySelector(".heart-container");
const hearts = ["🩷", "💗", "🤍", "💕"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.fontSize = `${Math.random() * 16 + 16}px`;
  heart.style.animationDuration = `${Math.random() * 3 + 4}s`;

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 450);

function copyAddress() {
  const address = "경기도 양주시 회천로 377";

  navigator.clipboard.writeText(address).then(() => {
    const message = document.getElementById("copyMessage");

    message.classList.add("show");

    setTimeout(() => {
      message.classList.remove("show");
    }, 1800);
  });
}