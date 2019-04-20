import React from 'react';
import {Link} from 'react-router-dom';

//COMPONENTS
import Watchers from '../components/usersWatching';

const WatchList = (props) => {
    return (
        <div className="col" >
            {
                props.tv ? props.tv.map((e, i) => {
                    return <>
                        <div className = "my-5" key={i} style={{display: 'inline-flex', flexWrap: 'wrap', width: '50%', alignSelf: 'center'}}>
                            <div className="col">
                            <Link to={'/shows/'+e.id}><img src={e.img_url} alt={e.title}  style={{height: '200px'}}/></Link>
                            </div>
                            <div className="col">
                            <Link to={'/shows/'+e.id}> <h4>{e.title}</h4></Link>
                                <h5>{e.genre_name}</h5>
                            </div>
                        </div>
                        </>
                }) : props.master.map((e,i)=>{
                    return <>
                        <div className = "my-5" key={i} style={{display: 'inline-flex', flexWrap: 'wrap', width: '50%', alignSelf: 'center'}}>
                            <div className="col">
                            <Link to={'/shows/'+e.id}><img src={e.img_url} alt={e.title}  style={{height: '200px'}}/></Link>
                            </div>
                            <div className="col">
                            <Link to={'/shows/'+e.id}> <h4>{e.title}</h4></Link>
                                <h5>{e.genre_name}</h5>
                                <h6 className="my-3" style={{fontWeight: 'bold', color: 'navy'}}>Who's Watching?</h6>
                                <div style={{overflow: "scroll", height: '50%'}}>
                                <Watchers show={props.master} current={e.title}/>
                                </div>
                            </div>
                        </div>
                        </>
                })
            }
        </div>
    );
}

export default WatchList;