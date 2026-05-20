let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    total += price;

    const orderList = document.getElementById('orderList');
    const newItem = document.createElement('li');
    newItem.textContent = `${item} - $${price.toFixed(2)}`;
    orderList.appendChild(newItem);

    document.getElementById('totalAmount').textContent = total.toFixed(2);
}

function placeOrder() {
    if (order.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let summary = "You ordered:\n";
    order.forEach(o => {
        summary += `- ${o.item} ($${o.price.toFixed(2)})\n`;
    });
    summary += `\nTotal: $${total.toFixed(2)}`;

    alert(summary + "\n\nThank you for ordering from Foodie Express!");

    // Reset the order
    order = [];
    total = 0;
    document.getElementById('orderList').innerHTML = '';
    document.getElementById('totalAmount').textContent = '0.00';
}

// Set current year
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('year').textContent = new Date().getFullYear();
});
