function calculateTax(price, taxRate) {
    let totalPrice = price + (price * taxRate / 100);
    return totalPrice;
}

let phoneTotal = calculateTax(25000, 18);
let shirtTotal = calculateTax(1200, 12);
let groceryTotal = calculateTax(500, 5);

console.log("Phone Final Cost: ₹" + phoneTotal);
console.log("Shirt Final Cost: ₹" + shirtTotal);
console.log("Grocery Final Cost: ₹" + groceryTotal);