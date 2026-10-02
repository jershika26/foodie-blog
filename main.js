// Sidebar Toggle Logic
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuIcon");
  const sidebar = document.getElementById("sidebar");

  if (menuIcon && sidebar) {
    menuIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      sidebar.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
      if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.classList.remove("active");
      }
    });
  }
});

// Search Functionality
function searchRecipe() {
  const inputElement = document.querySelector('.search-input');
  if (!inputElement) return;

  const input = inputElement.value.toLowerCase().trim();

  // Recipe lookup mapping
  const pages = {
    "burger": "burger.html",
    "milkshake": "milkshake.html",
    "pizza": "pizza.html",
    "pancake": "pancake.html",
    "bread omelette": "breadomelette.html",
    "omelette": "breadomelette.html",
    "waffle": "waffle.html",
    "grilled chicken": "grilledchicken.html",
    "chicken grill": "grilledchicken.html",
    "chicken biryani": "chickenbiryani.html",
    "biryani": "chickenbiryani.html",
    "shawarma": "shawarma.html"
  };

  if (pages[input]) {
    window.location.href = pages[input];
  } else {
    alert("Recipe not found. Please try again!");
  }
}

// Support pressing "Enter" key to search
document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.querySelector('.search-input');
  if (inputElement) {
    inputElement.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        searchRecipe();
      }
    });
  }
});

// Category Filter Function for Navbar
function filterCategory(category) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const tag = card.querySelector('.tag');
    if (!tag) return;
    const cardCategory = tag.textContent.trim().toUpperCase();
    if (category === 'ALL' || cardCategory.includes(category)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });

  // Close sidebar on mobile after selecting category
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.remove("active");
  }
}

