import React from 'react';
import {Link} from 'react-router-dom';

const WatchList = (props) => {
    return (
        <div className="col" >
            {
                props.tv.map((e, i) => {
                    return <Link to={'/shows/'+e.id}>
                        <div className = "my-5" key={i} style={{display: 'inline-flex', flexWrap: 'wrap', width: '50%', alignSelf: 'center'}}>
                            <div className="col">
                                <img src={e.img_url} alt={e.title}  style={{height: '200px'}}/>
                            </div>
                            <div className="col">
                                <h4>{e.title}</h4>
                                <h5>{e.genre_name}</h5>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    );
}

export default WatchList;