import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';

import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import './cards.css'

function ProductItem(item) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { name, _id, price } = item;

  const { cart } = state;

  const classes = useStyles();

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <Card className={classes.root}>
    <Link to={`/products/${_id}`}>
    <CardMedia className={classes.media} image={`/images/${item.image}`} title={name} />
    </Link>
    <CardContent className='media'>
      <div className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          ${price}
        </Typography>
      </div>
    </CardContent>
    <CardActions disableSpacing className={classes.cardActions}>
      <IconButton aria-label="Add to Cart" onClick={addToCart}>
        <AddShoppingCart />
      </IconButton>
    </CardActions>
  </Card>
  );
}

export default ProductItem;
