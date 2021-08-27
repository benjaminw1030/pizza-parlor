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
Code: pizza.addTopping("pepperoni")
Expected Output: pizza {toppings: {pepperoni} size: "function", crust: "thin", price: 5}

### Describe: Pizza.prototype.priceCalc()

* Test: It should add the price of a single topping to the price of the pizza.  
Code: pizza {toppings: {pepperoni} size: "function", crust: "thin", price: 5}  
pizza.price()  
Expected Output: pizza.price = 6.5

* Test: It should add the price of a multiple toppings to the price of the pizza.  
Code: pizza {toppings: {pepperoni, olives, sausage} size: "function", crust: "thin", price: 5}  
pizza.price()  
Expected Output: pizza.price = 9.5

* Test: It should consider the size and crust and alter the price of the pizza.  
Code: pizza {toppings: {pepperoni, olives, sausage} size: "pizza.js", crust: "stuffed", price: 5}  
pizza.price()  
Expected Output: pizza.price = 21.5