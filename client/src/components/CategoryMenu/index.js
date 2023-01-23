import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { QUERY_CATEGORIES } from '../../utils/queries';
import {   
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY 
 } from "../../utils/actions";
 import { idbPromise } from '../../utils/helpers'
import { Button } from "@material-ui/core";
import useStyles from './styles';

function CategoryMenu() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const state = useSelector((state) => state);

    const { categories } = state;

    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
            categoryData.categories.forEach((category) => {
                idbPromise('categories', 'put', category);
            });
            } else if (!loading) {
                idbPromise('categories', 'get').then((categories) => {
                    dispatch({
                        type: UPDATE_CATEGORIES,
                        categories: categories,
                    });
                });
            }
        }, [categoryData, loading, dispatch]);

        const handleClick = (id) => {
            dispatch({
                type: UPDATE_CURRENT_CATEGORY,
                currentCategory: id,
            });
        };

        return (
            <div>
                <h3 className= "mx-3">Choose an item</h3>
                {categories.map((item) => (
                    <Button
                    className={classes.buttons}
                    variant="contained"
                     
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
        )
    }


export default CategoryMenu;