import React from 'react';
import { Link } from 'react-router-dom';

//COMPONENTS
import Watchers from '../components/usersWatching';

const WatchList = (props) => {
    console.log("props", props)
    return (
        <div className="col" >
            {
                props.tv ? props.tv.map((e, i) => {
                    return <>
                        <div className="my-5" key={i} style={{ display: 'inline-flex', flexWrap: 'wrap', width: '50%', alignSelf: 'center' }}>
                            <div className="col">
                                <Link to={'/show/' + e.id}><img src={e.img_url} alt={e.title} style={{ height: '200px' }} /></Link>
                            </div>
                            <div className="col">
                                <Link to={'/show/' + e.id}> <h4>{e.title}</h4></Link>
                                <h5>{e.genre_name}</h5>
                            </div>
                        </div>
                    </>
                }) : null
            }
            {
                props.master ? props.master.map((e, i) => {
                    return <>
                        <div className="my-5" key={i} style={{ display: 'inline-flex', flexWrap: 'wrap', width: '50%', alignSelf: 'center' }}>
                            <div className="col">
                                <Link to={'/show/' + e.id}><img src={e.img_url} alt={e.title} style={{ height: '300px' }} /></Link>
                            </div>
                            <div className="col">
                                <Link to={'/show/' + e.id}> <h4>{e.title}</h4></Link>
                                <h5>{e.genre_name}</h5>
                                <h6 className="my-3" style={{ fontWeight: 'bold', color: 'navy' }}>Who's Watching?</h6>
                                <div style={{ overflow: "scroll", height: '50%' }}>
                                    <Watchers show={props.master} current={e.title} />
                                </div>
                            </div>
                        </div>
                    </>
                }) : null
            }
            {
                props.profile ? props.profile.map((e, i) => {
                    return <>
                        <div className="row my-5">
                            <div className="col">
                                <Link to={'/show/' + e.id}><img src={e.img_url} alt={e.title} style={{ height: '400px' }} /></Link>
                            </div>
                            <div className="col">
                                <Link to={'/show/' + e.id}> <h2 style={{ width: '100%' }}>{e.title}</h2></Link>
                                <h3>{e.genre_name}</h3>
                                <h5 className="mt-5">Being Watched By...</h5>
                                <Watchers show={props.profile} current={e.title} />
                            </div>
                        </div>
                    </>
                }) : null
            }
        </div>
    );
}

export default WatchList;