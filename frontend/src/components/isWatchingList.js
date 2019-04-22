import React from 'react';
import { Link } from 'react-router-dom';


//COMPONENTS
import Watchers from '../components/usersWatching';

const WatchList = (props) => {
    return (
        <div className="col" >
            {
                //USER PROFILE
                props.tv ? props.tv.map((e, i) => {
                    return <div className="my-5" key={i} style={{ display: "inline-flex", flexWrap: "wrap", alignSelf: "center", width: '50%' }}>
                            <div className="col">
                                <Link to={`/show/${e.id}`}><img src={e.img_url} alt={e.title} style={{ height: "300px" }} /></Link>
                            </div>
                            <div className="col">
                                <h4><Link to={`/show/${e.id}`} style={{ color: "black" }}>{e.title}</Link></h4>
                                <p style={{ color: "#dc3545" }}>{e.genre_name}</p>
                            </div>
                        </div>
                }) : null
            }
            {
                //MASTER LIST
                props.master ? props.master.map((e, i) => {
                    return <div className="my-5" key={i} style={{ display: "inline-flex", flexWrap: "wrap", width: "50%", alignSelf: "center", backgroundColor: "white" }}>
                            <div className="col">
                                <Link to={`/show/${e.id}`}><img src={e.img_url} alt={e.title} style={{ height: '350px' }} /></Link>
                            </div>
                            <div className="col">
                                <Link to={`/show/${e.id}`} style={{ color: "black" }}> <h2>{e.title}</h2></Link>
                                <p style={{ color: "#dc3545" }}>{e.genre_name}</p>
                                <h6 className="mt-5" style={{ color: "black" }}>Who's Watching?</h6>
                                <div className="mt-2" style={{ overflow: "scroll", height: '50%' }}>
                                    <ul>
                                        <Watchers show={props.master} current={e.title} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                }) : null
            }
            {
                //INDIVIDUAL SHOW PAGE
                props.profile ? props.profile.map((e, i) => {
                    return <div className="row m-5" key={i}>
                            <div className="col">
                                <Link to={`/show/${e.id}`}><img src={e.img_url} alt={e.title} style={{ height: '400px' }} /></Link>
                            </div>
                            <div className="col">
                                <Link to={`/show/${e.id}`} style={{color: "black"}}> <h2 style={{ width: '100%' }}>{e.title}</h2></Link>
                                <h6 style={{color: "#dc3545"}}>{e.genre_name}</h6>
                                <h4 className="mt-5">Being Watched By...</h4>
                                <Watchers show={props.profile} current={e.title} />
                            </div>
                        </div>
                }) : null
            }
        </div>
    );
}

export default WatchList;