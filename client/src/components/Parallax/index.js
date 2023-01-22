
import React from 'react';
import './Parallax.scss';

const Parallax = props =>{
    return(
        <section className="parallax-effect hero" style={{
            backgroundColor:`rgba(0, 0, 0, .45)`,
            backgroundImage:`url(${props.image})`
        }}>
            {props.children}

        </section>
    )
};

export default Parallax;