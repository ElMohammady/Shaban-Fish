document.addEventListener("DOMContentLoaded", function () {
    // Sticky Navbar
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  
    // Mobile Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");
  
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
      });
    }
  
    // Scroll Animations
    const scrollElements = document.querySelectorAll(".scroll-animate");
  
    const scrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
          el.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", scrollAnimation);
    scrollAnimation(); // Trigger on load
  
    // Dark Mode Toggle
const darkModeBtn = document.getElementById("dark-mode-btn");
const body = document.body;

// تحميل حالة الوضع المظلم من localStorage
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
  darkModeBtn.textContent = "Light Mode";
}

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // تغيير النص بناءً على الحالة
    darkModeBtn.textContent = body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";

    // حفظ الوضع في localStorage
    localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
  });
}

      // تحميل وضعية الداكن من التخزين المحلي
      if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
        darkModeBtn.textContent = "Light Mode"; // تعديل النص عند التحميل
      }
    }
  );