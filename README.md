## Specs:

### Describe: Pizza()

* Test: It should contain a size, crust, and price property  
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

* Test: It should add a topping object to a pizza object 
Code: pizza.addTopping("pepperoni")
Expected Output: pizza {toppings: {pepperoni} size: "large", crust: "thin", price: 5}