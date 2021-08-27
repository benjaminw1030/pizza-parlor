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
  this.toppings[topping.price] = topping;
}

Pizza.prototype.priceCalc = function() {
  Object.keys(this.toppings).forEach(topping => this.price += parseFloat(topping));
}

// User Interface Logic

let customPizza = new Pizza("", "", 0);
let pepperoni = new Topping("pepperoni", 1.5);
let sausage = new Topping("sausage", 1.5);
let bacon = new Topping("bacon", 1.5);
let extraCheese = new Topping("extra cheese", 1.25);
let greenPeppers = new Topping("green peppers", 1)
let mushrooms = new Topping("mushrooms", 1.25);
let blackOlives = new Topping("black olives", 1);
let spinach = new Topping("spinach", 1);
let pineapple = new Topping("pineapple", 1.5);

$(document).ready(function () {
  $("form#pizza-order").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const number = $("#input").val();
    const direction = $("input:radio[name=direction]:checked").val();

    $("#result").fadeIn();
  });
});