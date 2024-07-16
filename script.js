function addToCart(productName, price) {
    alert(`${productName} has been added to your cart for $${price}.`);
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For now, just display the form values
    alert(`Thank you, ${name}! Your message has been received.`);
    
    // Reset the form
    document.getElementById('contactForm').reset();
}
