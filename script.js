const navbar = document.getElementsByClassName("navbar")[0];
const navBut = document.getElementsByClassName("listitem")[0];
const navBut2 = document.getElementsByClassName("listitem")[1];
const navBut3 = document.getElementsByClassName("listitem")[2];
const navBut4 = document.getElementsByClassName("listitem")[3];

function scrollToRules() {
  document.getElementById('rules').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToHome() {
  document.getElementById('home').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToStore() {
  document.getElementById('store').scrollIntoView({
    behavior: 'smooth'
  });
}

function scrollToInfo() {
  document.getElementById('info').scrollIntoView({
    behavior: 'smooth'
  });
}

function smoothScrollTo(targetId, duration = 800) {
  const target = document.getElementById(targetId);
  const start = window.scrollY;
  const end = target.offsetTop;
  const distance = end - start;
  let startTime = null;

  function easeInOut(t) {
    return t < 0.5
      ? 2 * t * t
      : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function animate(time) {
    if (!startTime) startTime = time;
    const progress = Math.min((time - startTime) / duration, 1);
    window.scrollTo(0, start + distance * easeInOut(progress));
    if (progress < 1) requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}


function scrollToHome()  { smoothScrollTo('home'); }
function scrollToStore() { smoothScrollTo('store'); }
function scrollToInfo()  { smoothScrollTo('info'); }
function scrollToRules()  { smoothScrollTo('rules'); }
  
window.addEventListener("scroll", () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    navbar.style.top = "0";
    navbar.style.width = "100vw";
    navbar.style.borderRadius = "0";
    navbar.style.borderBottom = "1px solid #282832";
    return;
    }

  if (window.scrollY > 750) {
    navbar.style.borderBottomColor = "#00000000";
    navbar.style.boxShadowColor = "#000000";
    navbar.style.top = "2vh";
    navbar.style.backgroundColor = "#18181e0a";
    navBut.style.color = "#3d8046";
    navBut2.style.color = "#3d8046";
    navBut3.style.color = "#3d8046";
    navBut4.style.color = "#3d8046";
    navBut.style.backgroundColor = "#17211d25";
    navBut2.style.backgroundColor = "#17211d25";
    navBut3.style.backgroundColor = "#17211d25";
    navBut4.style.backgroundColor = "#17211d25";
    navbar.style.width = "90vw";
    navbar.style.borderRadius = "2.7vh";
    navbar.style.border = "1px solid rgba(82, 227, 101, 0.25)"
  } else {
    navbar.style.boxShadowColor = "#00000000";
    navbar.style.top = "0";
    navbar.style.backgroundColor = "#18181e7c";
    navBut.style.color = "#5c5c70";
    navBut2.style.color = "#5c5c70";
    navBut3.style.color = "#5c5c70";
    navBut4.style.color = "#5c5c70";
    navBut.style.backgroundColor = "#17211d00";
    navBut2.style.backgroundColor = "#17211d00";
    navBut3.style.backgroundColor = "#17211d00";
    navBut4.style.backgroundColor = "#17211d00";
    navbar.style.width = "100vw";
    navbar.style.borderRadius = "0";
    navbar.style.border = "1px solid #00000000";
    navbar.style.borderBottom = "1px solid #282832";
  }
});

const revealElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  const hiddenElements = document.querySelectorAll(".reveal, .reveal-right");
  hiddenElements.forEach((el) => observer.observe(el));
};

window.addEventListener("DOMContentLoaded", revealElements);