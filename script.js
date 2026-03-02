// AUTOPLAY FIX
document.addEventListener("click", () => {
  document.getElementById("bgMusic").play();
});

// PETALS GENERATOR
const petals = document.querySelector(".petals");

for (let i = 0; i < 40; i++) {
  let petal = document.createElement("span");
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 10 + "s";
  petal.style.opacity = Math.random();
  petals.appendChild(petal);
}

// SOFT FLOAT ANIMATION
document.querySelectorAll(".photo").forEach((photo) => {
  photo.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-10px)" },
      { transform: "translateY(0px)" },
    ],
    {
      duration: 4000,
      iterations: Infinity,
    },
  );
});
