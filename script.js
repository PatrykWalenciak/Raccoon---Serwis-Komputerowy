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
