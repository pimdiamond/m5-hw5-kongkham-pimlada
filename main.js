
var pizza = {
    crust: "bread",
    cheese: "bree",
    sauce: 5,
    addToppings: function() {
        console.log("Please add pepperoni and sausage");
    }
}

console.log(pizza.crust);
console.log(pizza.cheese);
console.log(pizza.sauce);

!function orderPizza() {
    console.log(pizza.addToppings() )
  }();