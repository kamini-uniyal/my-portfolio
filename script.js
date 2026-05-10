// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});


// Typing Effect
const texts = [
  "Aspiring AI/ML Engineer",
  "Python Developer",
  "Data Science Learner",
  "Problem Solver"
];

let index = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

  if(charIndex < texts[index].length) {

    typingElement.innerHTML += texts[index].charAt(charIndex);

    charIndex++;

    setTimeout(typeText, 100);

  }

  else {

    setTimeout(eraseText, 1500);

  }
}

function eraseText() {

  if(charIndex > 0) {

    typingElement.innerHTML =
      texts[index].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseText, 50);

  }

  else {

    index++;

    if(index >= texts.length) {
      index = 0;
    }

    setTimeout(typeText, 300);

  }
}

window.onload = function () {
  typeText();
};