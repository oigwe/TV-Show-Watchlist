import React from 'react';
import { Link } from 'react-router-dom';


//COMPONENTS
import Watchers from '../components/usersWatching';

const WatchList = (props) => {
    console.log("US", props)
    const partialUnique = (arr, comp, title) =>{
            let index = 0;
            arr.map((e, i) => {
                return e[comp]
            })
                .map((e, i, arrOfTitles) => {
                    return index = arrOfTitles.indexOf(title)
                })
                console.log("Index", index)
            return index
        }

    return (
        <div className="col" >
            {
                //USER PROFILE
                props.tv ? props.tv.map((e, i) => {
                    return <div className="my-5" key={i} style={{ display: "inline-flex", flexWrap: "wrap", alignSelf: "center", width: '50%' }}>
                        <div className="col">
                            <img src={e.img_url} alt={e.title} style={{ height: "300px" }} />
                        </div>
                        <div className="col">
                            <h4>{e.title}</h4>
                            <p style={{ color: "#dc3545" }}>{e.genre_name}</p>
                        </div>
                    </div>
                }) : null
            }
            {
                //USER PAGE FOR SPECIFIC SHOW
                props.userShow ? props.userShow.map((e, i) => {
                    return <div className="my-5" key={i} style={{ display: "inline-flex", flexWrap: "wrap", width: "50%", alignSelf: "center", backgroundColor: "white" }}>
                        <div className="col">
                            <img src={e.img_url} alt={e.title} style={{ height: '350px' }} />
                        </div>
                        <div className="col">
                            <h2>{e.title}</h2>
                            <p style={{ color: "#dc3545" }}>{e.genre_name}</p>
                            <h6 className="mt-5" style={{ color: "black" }}>Who's Watching?</h6>
                            <div className="mt-2" style={{ overflow: "scroll", height: '50%' }}>
                                <ul>
                                    <li>{e.username}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                }) : null
            }
            {
                //MASTER LIST
                props.master ? props.master.map((e, i) => {
                    return <div className="my-5" key={i} style={{ display: "inline-flex", flexWrap: "wrap", width: "50%", alignSelf: "center", backgroundColor: "white" }}>
                        <div className="col">
                            <img src={e.img_url} alt={e.title} style={{ height: '350px' }} />
                        </div>
                        <div className="col">
                            <h2>{e.title}</h2>
                            <p style={{ color: "#dc3545" }}>{e.genre_name}</p>
                            <h6 className="mt-5" style={{ color: "black" }}>Who's Watching?</h6>
                            <div className="mt-2" style={{ overflow: "scroll", height: '50%' }}>
                                <ul>
                                    <Watchers show={props.master} current={e.title} watch={props.watching} />
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
                            <Link to={`/show/${e.id}`} style={{ color: "black" }}> <h2 style={{ width: '100%' }}>{e.title}</h2></Link>
                            <h6 style={{ color: "#dc3545" }}>{e.genre_name}</h6>
                            <h4 className="mt-5">Being Watched By...</h4>
                            <Watchers show={props.profile} current={e.title} user={props.current} />
                        </div>
                    </div>
                }) : null
            }
        </div>
    );
}

export default WatchList;