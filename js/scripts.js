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