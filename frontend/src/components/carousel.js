import React from 'react';

const Carousel = (props) => {
    return (<>
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', alignSelf: 'center' }}>
        <img src={props.photos} alt={"Slide"+props.index} style={{height: "400px"}}/>
        </div>
        </>
    );
}

export default Carousel;