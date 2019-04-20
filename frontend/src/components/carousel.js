import React from 'react';

const Carousel = (props) => {
    return (
        <img src={props.photos} alt={"Slide"+props.index} style={{height: "300px"}}/>
    );
}

export default Carousel;