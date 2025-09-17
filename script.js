document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const reviewsContainer = document.getElementById("reviews");

  // Wczytaj opinie z localStorage
  const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
  savedReviews.forEach((review) => addReviewToDOM(review));

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
      const newReview = { name, message };
      addReviewToDOM(newReview);

      // Zapis do localStorage
      savedReviews.push(newReview);
      localStorage.setItem("reviews", JSON.stringify(savedReviews));

      form.reset();
    }
  });

  function addReviewToDOM(review) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.textContent = `"${review.message}" – ${review.name}`;
    reviewsContainer.appendChild(div);
  }
});
