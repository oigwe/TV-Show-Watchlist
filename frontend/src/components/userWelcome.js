import React from 'react';
import { Link } from 'react-router-dom';

const UserWelcome = (props) => {
    return (
        <div>
            { //SIGNED IN - USER PAGE
                props.currentUser.length !== 0 && props.location === "/users" ?
                    <><div className="jumbotron" style={{ background: "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(http://thesmartlocal.com/images/easyblog_articles/6617/b2ap3_large_image12.jpg)", backgroundRepeat: "repeat round" }}>
                        <h1 className="display-4" style={{ color: "white" }}>Welcome {props.currentUser.username}</h1>
                        <h4 style={{ color: 'white' }}>Your User ID
                    Is: {props.currentUser.id}</h4>
                        <div className="row">
                            <div className="col" style={{ marginLeft: "75%" }}>
                                <Link to={'/user/post'} style={{ color: "white" }}> Ready To Add A New Show ... ?</Link>
                            </div>
                        </div>
                    </div>
                    </> : null
            }
            {
                //NOT SIGNED IN  - USER PAGE
                props.currentUser.length === 0 && props.location === "/users" ?
                    <><div className="jumbotron" style={{ background: "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(http://thesmartlocal.com/images/easyblog_articles/6617/b2ap3_large_image12.jpg)", backgroundRepeat: "repeat round" }}>
                        <h1 className="display-4" style={{ color: "white" }} >Welcome</h1>
                        <h4 className="muted" style={{ color: "white" }}>Create a user account below</h4>
                    </div>
                    </> : null
            }
            {
                //SIGNED IN - CREATE A POST
                props.currentUser.length !== 0 && props.location === "/user/post" ? <><div className="jumbotron" style={{ background: "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(http://thesmartlocal.com/images/easyblog_articles/6617/b2ap3_large_image12.jpg)", backgroundRepeat: "repeat round" }}>
                    <h1 className="display-4" style={{ color: "white" }}>Welcome {props.currentUser.username}</h1>
                    <h4 style={{ color: 'white' }}>Your User ID
            Is: {props.currentUser.id}</h4>
                    <div className="row">
                        <div className="col" style={{ marginLeft: "75%" }}>
                            <h6 style={{ color: "white" }}>Not Logged In? Login  <Link to='/users' style={{ color: "#dc3545" }}> Here</Link></h6>
                        </div>
                    </div>
                </div>
                </> : null
            }

        </div>
    );
}

export default UserWelcome;
