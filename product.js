// Product class to store product properties: id, name, price
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class to store product and its quantity
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // Method to calculate total price for the item
  calculateTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart class to manage shopping cart items
class ShoppingCart {
  constructor() {
    this.items = []; // Array to store ShoppingCartItem instances
  }

  // Method to get the total number of items in the cart
  getTotalItems() {
    return this.items.length;
  }

  // Method to add an item to the cart
  addItem(product, quantity) {
    const item = new ShoppingCartItem(product, quantity);
    this.items.push(item);
  }

  // Method to remove an item from the cart by product ID
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  // Method to display all items in the cart
  displayCartItems() {
    this.items.forEach((item, index) => {
      console.log(
        `Item ${index + 1}: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: $${item.calculateTotalPrice().toFixed(2)}`
      );
    });
  }

  // Method to calculate the total price of all items in the cart
  calculateCartTotal() {
    return this.items.reduce(
      (total, item) => total + item.calculateTotalPrice(),
      0
    );
  }
}

// Testing the objects

// Create some products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Phone", 800);
const product3 = new Product(3, "Headphones", 150);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display cart items
console.log("Cart items:");
cart.displayCartItems();

// Display total price of all items in the cart
console.log(`Total Cart Price: $${cart.calculateCartTotal().toFixed(2)}`);

// Remove an item from the cart
cart.removeItem(2); // Removes the item with product ID 2 (Phone)

// Display cart items after removal
console.log("\nCart items after removing item with ID 2:");
cart.displayCartItems();

// Display total price of all items in the cart after removal
console.log(
  `Total Cart Price after removal: $${cart.calculateCartTotal().toFixed(2)}`
);
