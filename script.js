document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    const shopifyRank = document.getElementById('shopify-rank').value;
    const traffic = document.getElementById('traffic').value;
    const estimatedOrders = document.getElementById('estimated-orders').value;
    const cr = document.getElementById('cr').value;
    const aov = document.getElementById('aov').value;
    const location = document.getElementById('location').value;
    const potentialScale = document.getElementById('potential-scale').value;
    const checkoutSolution = document.getElementById('checkout-solution').value;

    // Here you can process the form data or send it to a backend.
    console.log("Form Submitted:", {
        shopifyRank,
        traffic,
        estimatedOrders,
        cr,
        aov,
        location,
        potentialScale,
        checkoutSolution
    });
});
