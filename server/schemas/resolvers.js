const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Order, Category } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')();