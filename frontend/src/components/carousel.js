import React from 'react';

const Carousel = (props) => {
    console.log(props)
    return (

        <img src={props.photos} alt={"Slide"+props.key} style={{width: "25%"}}/>
    );
}

export default Carousel;