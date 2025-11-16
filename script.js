const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
(function () {
  emailjs.init("ZmHP0SEVfmZYCAHav"); // wstaw swój public key z EmailJS
})();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".reservation-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_em8k9n7", "template_83q8vfv", this).then(
      () => {
        alert("✅ Dziękujemy! Twoje zgłoszenie zostało wysłane.");
        form.reset();
      },
      (error) => {
        alert("❌ Wystąpił błąd, spróbuj ponownie.");
        console.error("EmailJS error:", error);
      }
    );
  });
});

// ----- SLIDER STRZAŁKI -----
const slider = document.getElementById("slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  slider.scrollLeft += 300;
});

prev.addEventListener("click", () => {
  slider.scrollLeft -= 300;
});

// ----- LIGHTBOX (POWIĘKSZENIE ZDJĘCIA) -----
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

// Kliknięcie zdjęcia = powiększenie
document.querySelectorAll(".slider img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Zamknięcie X
closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Kliknięcie tła zamyka
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// ESC zamyka
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
});
