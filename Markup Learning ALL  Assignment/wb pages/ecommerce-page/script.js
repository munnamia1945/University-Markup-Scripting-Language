let cartCount = 0;

const buttons = document.querySelectorAll(".add-cart");
const count = document.getElementById("cart-count");
const message = document.getElementById("cart-message");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        cartCount++;
        count.textContent = cartCount;
        message.textContent = button.dataset.name + " added to cart. Total items: " + cartCount;
        button.textContent = "Added";
    });
});
