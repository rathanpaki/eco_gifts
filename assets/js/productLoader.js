document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/data/product.json")
    .then((response) => response.json())
    .then((products) => {
      const productGrid = document.getElementById("product-grid");
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
          <span class="badge">${product.badge}</span>
          <div class="product-image-container">
            <img src="${product.image}" alt="${
          product.name
        }" class="product-image" />
          </div>
          <h3>${product.name}</h3>
          <p class="price">lkr ${product.price.toFixed(2)}</p>
          <p>${product.description}</p>
          <a href="productDetails.html?id=${
            product.id
          }" class="btn secondary">View Details</a>
          <button class="btn primary">Add to Cart</button>
          <button class="btn wishlist">Add to Wishlist</button>
        `;
        productGrid.appendChild(productCard);

        // Add event listeners for cart and wishlist buttons
        productCard
          .querySelector(".btn.primary")
          .addEventListener("click", function () {
            addToCart(product);
          });
        productCard
          .querySelector(".btn.wishlist")
          .addEventListener("click", function () {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
              alert("Please log in to add items to your wishlist.");
              window.location.href = "login.html";
              return;
            }
            addToWishlist(product);
          });
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});
