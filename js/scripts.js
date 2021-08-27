// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

// Business Logic

function Pizza(size, crust, price) {
  this.toppings = {};
  this.size = size;
  this.crust = crust;
  this.price = price;
}

function Topping (name, price) {
  this.name = name;
  this.price = price;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings[topping.name] = topping;
}

// User Interface Logic