const { gql } = require("apollo-server-express");

// Defining types, fields, and mutations for application data
const typeDefs = gql`
# Define which fields are accessible from the Category model
  type Category {
    _id: ID
    name: String
  }

# Define which fields are accessible from the Customize model
  type Customize {
    size: String
    milk: String
    flavor: String
  }

# Define which fields are accessible from the Drink model
  type Drink {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
    customize: [Customize]
  }

  # Define which fields are accessible from the Order model
  type Order {
    _id: ID
    purchaseDate: String
    drinks: [Drink]
  }

  # Define which fields are accessible from the User model
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  # Define which fields are accessible from the Checkout model
  type Checkout {
    session: ID
  }

  # Define which fields are accessible from the Auth model
  type Auth {
    token: ID!
    user: User
  }

  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    categories: [Category]
    drinks(category: ID, name: String): [Drink]
    drink(_id: ID!): Drink
    user: User
    order(_id: ID!): Order
    checkout(drinks: [ID]!): Checkout
  }

  # Define which mutations the client is allowed to make
  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    addOrder(drinks: [ID]!): Order
  }
`;

module.exports = typeDefs;
