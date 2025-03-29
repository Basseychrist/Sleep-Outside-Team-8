document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbContainer = document.getElementById("breadcrumb-trail");
    const urlSegments = window.location.pathname.split("/").filter(Boolean);
    
    // Hide breadcrumb navigation on the homepage
    if (urlSegments.length === 0) {
        document.querySelector(".breadcrumb-navigation").style.display = "none";
        return;
    }

    let breadcrumbMarkup = "";

    if (urlSegments[0] === "products") {
        // Display category name and item count on category pages
        const categoryName = urlSegments[1]?.replace("-", " ") || "Unknown Category";
        const totalProducts = document.querySelectorAll(".product-listing-item").length;
        breadcrumbMarkup = `<li>${categoryName} → (${totalProducts} items)</li>`;
    } else if (urlSegments[0] === "product") {
        // Display only the category name on individual product pages
        const categoryName = urlSegments[1]?.replace("-", " ") || "Unknown Category";
        breadcrumbMarkup = `<li>${categoryName}</li>`;
    }

    breadcrumbContainer.innerHTML = breadcrumbMarkup;
});