const { gql } = require('apollo-server-express');

// Defining types and fields for GraphQL data
const typeDefs = gql`

  type Category {
    _id: ID
    name: String
  }

  type Customize {
    size: String
    milk: String
    flavor: String
  }

  type Drink {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
    customize: [Customize]
  }

  type Order {
    _id: ID
    purchaseDate: String
    drinks: [Drink]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    categories: [Category]
    drinks(category: ID, name: String): [Drink]
    drink(_id: ID!): Drink
    user: User
    order(_id: ID!): Order
    checkout(drinks: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    addOrder(drinks: [ID]!): Order
    }
`;

module.exports = typeDefs;
