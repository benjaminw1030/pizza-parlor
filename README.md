# JavaScript Pizza Parlor

### By Benjamin Wilson

### This page uses object constructors to order a custom pizza.

## Technologies Used

* HTML
* CSS
* Javascript
* jQuery
* Bootstrap

## Description

This page will take user input from the provided form and return a reciept displaying the price and the toppings ordered. All of the data is held in objects created by constructors.

## Setup/Installation Requirements

1. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) this repository from GitHub to your local machine.
2. Open the new directory.
3. Open index.html in a browser.

You can also see it hosted directly on [GitHub Pages](https://benjaminw1030.github.io/pizza-parlor/).

## Known Bugs

* No bugs known at the moment.

## License

* [MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Benjamin Wilson

## Contact Information

<benjaminw1030@gmail.com>

---

## Specs:

### Describe: Pizza()

* Test: It should contain a size, crust, and price property.  
Code: let pizza = new Pizza("large", "thin", 5);  
Expected Output: pizza {size: "large", crust: "thin", price: 5}

* Test: It should contain a toppings property that is an object  
Code: let pizza = new Pizza("large", "thin", 5);  
Expected Output: pizza {toppings: {...} size: "large", crust: "thin", price: 5}

### Describe: Topping()

* Test: It should contain a topping name and price property.  
Code: let pepperoni = new topping("pepperoni", 1.5);  
Expected Output: pepperoni {name: "pepperoni", price: 1.5}

### Describe: Pizza.prototype.addTopping()

* Test: It should add a topping object to a pizza object.  
Code: pizza.addTopping("pepperoni");  
Expected Output: pizza {toppings: {pepperoni} size: "function", crust: "thin", price: 5}

### Describe: Pizza.prototype.toppingPrice()

* Test: It should obtain the price of a single topping in a Pizza object.  
Code: pizza {toppings: {pepperoni} size: "function", crust: "thin", price: 5}  
pizza.toppingPrice("pepperoni");  
Expected Output: 1.5

### Describe: Pizza.prototype.reset()

* Test: It should reset a Pizza object to base values.  
Code: customPizza.reset(); 
Expected Output: customPizza = Pizza {toppings: {}, name: "", size: "", crust: "", price: 3.99}

### Describe: Pizza.prototype.priceCalc()

* Test: It should add the price of a single topping to the price of the pizza.  
Code: pizza {toppings: {pepperoni} size: "function", crust: "thin", price: 5}  
pizza.price();  
Expected Output: pizza.price = 6.5

* Test: It should add the price of a multiple toppings to the price of the pizza.  
Code: pizza {toppings: {pepperoni, olives, sausage} size: "function", crust: "thin", price: 5}  
pizza.price();  
Expected Output: pizza.price = 9.5

* Test: It should consider the size and crust and alter the price of the pizza.  
Code: pizza {toppings: {pepperoni, olives, sausage} size: "pizza.js", crust: "stuffed", price: 5}  
pizza.price();  
Expected Output: pizza.price = 21.5