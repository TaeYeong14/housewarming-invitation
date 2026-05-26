// 스크롤 등장 애니메이션
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

// 하트 비눗방울 애니메이션
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

// 주소 복사
function copyAddress() {
  const address = "여기에 실제 주소를 입력하세요";

  navigator.clipboard.writeText(address).then(() => {
    const message = document.getElementById("copyMessage");
    message.style.display = "block";

    setTimeout(() => {
      message.style.display = "none";
    }, 1800);
  });
}