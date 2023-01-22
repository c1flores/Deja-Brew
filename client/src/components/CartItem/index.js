import React from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import useStyles from './styles';

const CartItem = ({ item , onUpdateCartQty}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <Card className={classes.cartItem}>
      <CardMedia image={`/images/${item.image}`} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="h6">{item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small" onClick={[ item, item.purchaseQuantity - 1]}>-</Button>
          <Typography>&nbsp;{item.purchaseQuantity}&nbsp;</Typography>
          <Button type="button" size="small" onClick={[ item, item.purchaseQuantity + 1]}>+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary" onClick={() => removeFromCart(item)}>Remove</Button>
      </CardActions>
    </Card>
  );
}

export default CartItem;