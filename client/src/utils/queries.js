import gql from "graphql-tag";

// Created GraphQL queries to be executed by Apollo Client

export const QUERY_DRINKS = gql`
  query getDrinks($category: ID) {
    drinks(category: $category) {
      _id
      name
      description
      price
      image
      category {
        _id
      }
      customize {
        size
        milk
        flavor
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($drinks: [ID]!) {
    checkout(drinks: $drinks) {
      session
    }
  }
`;

export const QUERY_ALL_DRINKS = gql`
  {
    drinks {
      _id
      name
      description
      price
      image
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        drinks {
          _id
          name
          description
          price

          image
        }
      }
    }
  }
`;
