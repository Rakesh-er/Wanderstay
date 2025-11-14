// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Tax Switch Logic (Existing) ---
  const taxSwitch = document.getElementById("tax-switch");

  if (taxSwitch) {
    taxSwitch.addEventListener("change", () => {
      const listingCards = document.querySelectorAll(".listing-card");

      listingCards.forEach((card) => {
        const priceBeforeTax = card.querySelector(".price-before-tax");
        const priceAfterTax = card.querySelector(".price-after-tax");

        if (taxSwitch.checked) {
          priceBeforeTax.style.display = "none";
          priceAfterTax.style.display = "inline-block";
        } else {
          priceBeforeTax.style.display = "inline-block";
          priceAfterTax.style.display = "none";
        }
      });
    });
  }

  // --- 2. Filter Scroll Button Logic (MODIFIED) ---
  const filterBar = document.querySelector(".filter-bar");
  const scrollRightBtn = document.getElementById("scroll-right-btn");
  const scrollLeftBtn = document.getElementById("scroll-left-btn"); // New button

  if (filterBar && scrollRightBtn) {
    scrollRightBtn.addEventListener("click", () => {
      // Scroll the filter bar 250px to the right
      filterBar.scrollBy({
        left: 250, // You can adjust this scroll amount
        behavior: "smooth",
      });
    });
  }

  // --- 3. NEW Code for Filter Scroll LEFT Button ---
  if (filterBar && scrollLeftBtn) {
    scrollLeftBtn.addEventListener("click", () => {
      // Scroll the filter bar 250px to the left
      filterBar.scrollBy({
        left: -250, // Negative value to scroll left
        behavior: "smooth",
      });
    });
  }
});
