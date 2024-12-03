
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const filterCheckboxes = document.querySelectorAll(".filters input[type='checkbox']");
    const clearFiltersButton = document.querySelector(".clear-filters");
    const productCards = document.querySelectorAll(".product-card");
    const resultsCount = document.querySelector(".sort-bar p");

    // Function to update displayed products based on filters
    function updateProducts() {
        const selectedFilters = Array.from(filterCheckboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.id);

        let visibleCount = 0;

        productCards.forEach((card) => {
            const categories = card.dataset.categories.split(",");
            const isVisible = selectedFilters.length === 0 || selectedFilters.some((filter) => categories.includes(filter));
            card.style.display = isVisible ? "block" : "none";
            if (isVisible) visibleCount++;
        });

        // Update results count
        resultsCount.textContent = `${visibleCount} Results`;
    }

    // Add event listeners to all checkboxes
    filterCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", updateProducts);
    });

    // Clear filters and reset the page
    clearFiltersButton.addEventListener("click", () => {
        filterCheckboxes.forEach((checkbox) => (checkbox.checked = false));
        updateProducts();
    });

    // Initial call to set up product visibility
    updateProducts();
});

const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 3); // Set 3 days in the future

    // Update the countdown every second
    const timer = setInterval(function() {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the HTML elements
      document.getElementById("days").textContent = days.toString().padStart(2, '0');
      document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
      document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
      document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

      // If the countdown is over, stop the timer
      if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown").innerHTML = "Deal Expired!";
      }
    }, 1000);

    document.addEventListener("DOMContentLoaded", () => {
        const productContainer = document.querySelectorAll(".product-card");
        const sortSelect = document.getElementById("sort");
        const applyPriceButton = document.getElementById("apply-price");
    
        // Sort function
        function sortProducts() {
            const sortOption = sortSelect.value;
            const products = Array.from(productContainer);
            const container = document.querySelector(".products");
    
            products.sort((a, b) => {
                const priceA = parseFloat(a.querySelector(".price").textContent.replace("$", ""));
                const priceB = parseFloat(b.querySelector(".price").textContent.replace("$", ""));
                switch (sortOption) {
                    case "low-to-high":
                        return priceA - priceB;
                    case "high-to-low":
                        return priceB - priceA;
                    case "ratings":
                        const ratingA = parseFloat(a.querySelector(".ratings").textContent.split(" ")[0].length);
                        const ratingB = parseFloat(b.querySelector(".ratings").textContent.split(" ")[0].length);
                        return ratingB - ratingA;
                    default:
                        return 0; // Featured or default case
                }
            });
    
            // Clear container and re-append sorted products
            container.innerHTML = "";
            products.forEach((product) => container.appendChild(product));
        }
    
        // Price filter function
        function filterByPrice() {
            const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
            const maxPrice = parseFloat(document.getElementById("max-price").value) || Infinity;
    
            productContainer.forEach((product) => {
                const price = parseFloat(product.querySelector(".price").textContent.replace("$", ""));
                if (price >= minPrice && price <= maxPrice) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        }
    
        // Event listeners
        sortSelect.addEventListener("change", sortProducts);
        applyPriceButton.addEventListener("click", filterByPrice);
    });
    

    document.addEventListener("DOMContentLoaded", () => {
        const searchInput = document.getElementById("search-input");
        const searchButton = document.getElementById("search-button");
        const productCards = document.querySelectorAll(".product-card");
    
        // Function to search products
        function searchProducts() {
            const query = searchInput.value.toLowerCase();
    
            productCards.forEach((card) => {
                const productName = card.querySelector("h4").textContent.toLowerCase();
                if (productName.includes(query)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }
    
        // Event listener for search button
        searchButton.addEventListener("click", searchProducts);
    
        // Event listener for Enter key in search input
        searchInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                searchProducts();
            }
        });
    });
    


    







   