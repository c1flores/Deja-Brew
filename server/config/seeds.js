const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  //  Drop existing categories
  await Category.deleteMany();

  // Add drink categories to the collection and await the results
  const categories = await Category.insertMany([
    { name: "Hot Drinks" },
    { name: "Cold Drinks" },
    { name: "Pastries" },
  ]);

  // Log out the seed data to indicate what should appear in the database
  console.log("Categories seeded");

  // Drop existing drink items
  await Product.deleteMany();

  // Add drink items to the collection and await the results
  const products = await Product.insertMany([
    {
      name: "Latte",
      description:
        "A deliciously simple drink, the Latte is espresso with steamed milk and a small layer of foam on top.",
      image: "latte.jpg",
      category: categories[0]._id,
      price: 4.75,
      quantity: 1,
    },
    {
      name: "Mocha",
      description:
        "The Mocha is for those that need a little chocolate in their coffee.  It is espresso, chocolate syrup and steamed milk topped with whipped cream.",
      image: "hot-mocha.jpg",
      category: categories[0]._id,
      price: 4.75,
      quantity: 1,
    },
    {
      name: "Americano",
      description:
        "The Americano is a no-frills coffee drink.  It is just espresso lightened with hot water.",
      image: "americano.jpg",
      category: categories[0]._id,
      price: 2.75,
      quantity: 1,
    },
    {
      name: "House Coffee",
      description:
        "The House Coffee is brewed from our own roasted “<br> for java” coffee beans and is our customer favorite!",
      image: "house-coffee.jpg",
      category: categories[0]._id,
      price: 2.25,
      quantity: 1,
    },
    {
      name: "Cappuccino",
      description:
        "A Cappuccino is double is espresso with equal parts steamed milk and foam.",
      image: "hot-cappuccino.jpg",
      category: categories[0]._id,
      price: 4.25,
      quantity: 1,
    },
    {
      name: "Hot Chocolate",
      description:
        "Our Hot Chocolate is made with decadently rich chocolate and steamed milk with a small layer of foam on top.",
      image: "hot-chocolate.jpg",
      category: categories[0]._id,
      price: 4.25,
      quantity: 1,
    },
    {
      name: "Iced Latte",
      description:
        "The Iced Latte is fresh espresso poured over ice cubes and milk.",
      image: "iced-latte.png",
      category: categories[1]._id,
      price: 4.75,
      quantity: 1,
    },
    {
      name: "Iced Mocha",
      description:
        "Our Iced Mocha is a blend of espresso, rich chocolate syrup, milk, ice and vanilla ice-cream.",
      image: "iced-mocha.jpg",
      category: categories[1]._id,
      price: 4.75,
      quantity: 1,
    },
    {
      name: "Cold-Brewed Coffee",
      description:
        "Our Cold-Brewed Coffee is handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat and finished with a splash of milk.",
      image: "cold-brew.jpg",
      category: categories[1]._id,
      price: 2.25,
      quantity: 1,
    },
    {
      name: "Cappuccino on Ice",
      description:
        "A Cappuccino on Ice is fresh espresso poured over ice cubes and milk topped with cold foam.",
      image: "iced-cappuccino.jpg",
      category: categories[1]._id,
      price: 4.25,
      quantity: 1,
    },
    {
      name: "Apple-Fritter",
      description:
        "A luscious depp fried donut filled with apples, cinnamon, and drizzled with glaze.",
      image: "apple-fritter.jpg",
      category: categories[2]._id,
      price: 3.50,
      quantity: 1,
    },
     {
      name: "Brownie",
      description:
        " A small, rich, chocolate, baked cake-slice.",
      image: "brownie.jpg",
      category: categories[2]._id,
      price: 3.25,
      quantity: 1,
    },
    {
      name: "Cake Pop",
      description:
        " Cake and frosting mixed together to form a truffle-like ball.",
      image: "cake-pops.jpg",
      category: categories[2]._id,
      price: 3.25,
      quantity: 1,
    },
     {
      name: "Croissant",
      description:
        "A crescent-shaped roll made with light, flaky, and extremely butter pastry dough.",
      image: "croissant.jpg",
      category: categories[2]._id,
      price: 2.50,
      quantity: 1,
    },
     {
      name: "Croissant Sandwich",
      description:
        "A croissant filled with a generous slice of turkey, cheese, and crispy lettuce.",
      image: "croissant-sammy.jpg",
      category: categories[2]._id,
      price: 4.50,
      quantity: 1,
    },
  ]);

  // Log out the seed data to indicate what should appear in the database
  console.log("Products seeded");

  //  Drop existing users
  await User.deleteMany();

  // Add users to the collection and await the results
  await User.create({
    firstName: "Chris",
    lastName: "Flores",
    email: "chris@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Gus",
    lastName: "Flores",
    email: "gus@testmail.com",
    password: "password12345",
  });

  // Log out the seed data to indicate what should appear in the database
  console.log("Users seeded");

  process.exit();
});

