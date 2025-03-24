// Write your code here
// Breakfast Class
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// Lunch Class
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// Dinner Class with a private property for dessert
class Dinner {
  #dessert;  // private field for dessert
  
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;  // dessert is a private field
  }

  // Method to get the private dessert
  getDessert() {
    return this.#dessert;
  }
}

// Testing the classes
let breakfast1 = new Breakfast("Pancakes", "Orange Juice");
let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
let dinner1 = new Dinner("Mixed Greens", "Minestrone Soup", "Grilled Chicken", "Cheesecake");

console.log(breakfast1);  // Breakfast { food: 'Pancakes', drink: 'Orange Juice' }
console.log(lunch1);      // Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }
console.log(dinner1);     // Dinner { salad: 'Mixed Greens', soup: 'Minestrone Soup', entree: 'Grilled Chicken' }
// Accessing private dessert using the getter
console.log(dinner1.getDessert());  // 'Cheesecake'
