// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

// Business Logic

function Pizza(name, size, crust, price) {
  this.toppings = {};
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.price = price;
}

function Topping(name, price) {
  this.name = name;
  this.price = price;
}

Pizza.prototype.addTopping = function (topping) {
  this.toppings[topping.name] = topping;
}

Pizza.prototype.toppingPrice = function (topping) {
  return parseFloat(this.toppings[topping].price);
}

Pizza.prototype.reset = function () {
  this.toppings = {};
  this.name = "";
  this.size = "";
  this.crust = "";
  this.price = 3.99;
}

Pizza.prototype.priceCalc = function () {
  Object.keys(this.toppings).forEach(topping => this.price += this.toppingPrice(topping));


  if (this.size === "array") {
    this.price += 2;
  } else if (this.size === "object") {
    this.price += 4;
  } else if (this.size === "function") {
    this.price += 6;
  } else if (this.size === "pizza.js") {
    this.price += 8;
  }
  if (this.crust === "pan") {
    this.price += 2;
  } else if (this.crust === "stuffed") {
    this.price += 3;
  } else if (this.crust === "gluten-free") {
    this.price += 3;
  }
}

// User Interface Logic

let customPizza = new Pizza("", "", "", 0);
let pepperoni = new Topping("Pepperoni", 1.5);
let sausage = new Topping("Sausage", 1.5);
let bacon = new Topping("Bacon", 1.5);
let extraCheese = new Topping("Extra Cheese", 1.25);
let greenPeppers = new Topping("Green Peppers", 1)
let mushrooms = new Topping("Mushrooms", 1.25);
let blackOlives = new Topping("Black Olives", 1);
let spinach = new Topping("Spinach", 1);
let pineapple = new Topping("Pineapple", 1.5);

function attachButtonListeners() {
  $("#refresh").on("click", function () {
    location.reload();
  })
}

function createReceipt(pizzaOrder) {
  let ingredients = $("ul#ingredients");
  let htmlIngredients = "";
  console.log(pizzaOrder.toppings);
  if ($.isEmptyObject(pizzaOrder.toppings)) {
    htmlIngredients = "<li>Nothing but cheese and sauce!</li>"
  } else {
    Object.keys(pizzaOrder.toppings).forEach(key => {
      htmlIngredients += "<li>" + key.toString() + "</li>"
    });
  }
  ingredients.html(htmlIngredients);
  $("#order-name").text(customPizza.name);
  $("#order-size").text(customPizza.size);
  $("#order-crust").text(customPizza.crust);
  $("#order-cost").text(customPizza.price.toFixed(2));
}

function parseToppingsFromForm() {
  if ($("#pepperoni").prop("checked")) {
    customPizza.addTopping(pepperoni);
  }
  if ($("#sausage").prop("checked")) {
    customPizza.addTopping(sausage);
  }
  if ($("#bacon").prop("checked")) {
    customPizza.addTopping(bacon);
  }
  if ($("#extra-cheese").prop("checked")) {
    customPizza.addTopping(extraCheese);
  }
  if ($("#green-peppers").prop("checked")) {
    customPizza.addTopping(greenPeppers);
  }
  if ($("#mushrooms").prop("checked")) {
    customPizza.addTopping(mushrooms);
  }
  if ($("#black-olives").prop("checked")) {
    customPizza.addTopping(blackOlives);
  }
  if ($("#spinach").prop("checked")) {
    customPizza.addTopping(spinach);
  }
  if ($("#pineapple").prop("checked")) {
    customPizza.addTopping(pineapple);
  }
}

$(document).ready(function () {
  $("form#pizza-order").submit(function (event) {
    attachButtonListeners();
    event.preventDefault();
    customPizza.reset();
    const pizzaName = $("#name").val();
    const pizzaSize = $("#size").val();
    const pizzaCrust = $("#crust").val();
    customPizza.name = pizzaName;
    customPizza.size = pizzaSize;
    customPizza.crust = pizzaCrust;
    parseToppingsFromForm();
    customPizza.priceCalc();
    createReceipt(customPizza);
    $("#receipt-card").css("display", "flex");
    $("#order-card").hide();
  });
});