const { AuthenticationError } = require("apollo-server-express");
const { User, Drink, Order, Category } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  "sk_test_51MP7PnGFWu7Pm2SbcV4Mrwa8T8KdkmTrcHdaGTkq0x9TAgjZEi47jf1BvaPjcOuwcuscoCLo85BgU562ZPI2rUGJ00BOnwDX0E"
);

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },

    // Find and return all documents from the drink collection
    drinks: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Drink.find(params).populate("category");
    },

    // Find and return one matching drink from the collection
    drink: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },

    // Checkout
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.drinks",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("Not logged in");
    },

    // Stripe
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ drinks: args.drinks });
      const line_items = [];

      const { drinks } = await order.populate("drinks").execPopulate();

      for (let i = 0; i < drinks.length; i++) {
        const drink = await stripe.products.create({
          name: drinks[i].name,
          description: drinks[i].description,
          images: [`${url}/images/${drinks[i].image}`],
        });

        const price = await stripe.prices.create({
          product: drink.id,
          unit_amount: drinks[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      // Stripe
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },

    // Get user for order history
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.drinks",
          populate: "category",
        });

        // Sorting order history
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
        return user;
      }
    },
  },

  // Define the unctions that will fulfill the mutations
  Mutation: {
    addUser: async (parent, args) => {
      // First we create the user
      const user = await User.create(args);

      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    addOrder: async (parent, { drinks }, context) => {
      console.log(context);

      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const order = new Order({ drinks });

        // Find the user by ID and add the new instance of an Order provided by second argument into User 'orders' array
        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        //Return newly added order
        return order;
      }

      throw new AuthenticationError("Not logged in");
    },

    // Add a third argument to the resolver to access data in our `context`
    updateUser: async (parent, args, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        // Find the user by ID and return object after the update was applied with second argument parameters
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      // Find one user that matches the email parameter
      const user = await User.findOne({ email });

      if (!user) {
        // If no user matches the email parameter, throw authentication error with feedback message
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        // If user password is incorrect, throw authentication error with feedback message
        throw new AuthenticationError("Incorrect credentials");
      }

      // If user is found with email and password match, sign a JSON Web Token and log the user in
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
