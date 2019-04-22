import React from 'react';
import { Link } from 'react-router-dom';

const UserWelcome = (props) => {
    return (
        <div>
            {
                props.currentUser.length !== 0 ?
                    <><div className="jumbotron" style={{ background: "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(http://thesmartlocal.com/images/easyblog_articles/6617/b2ap3_large_image12.jpg)", backgroundSize: "50% 100%" }}>
                        <h1 className="display-4" style={{ color: "white" }}>Welcome {props.currentUser.username}</h1>
                        <h4 style={{ color: 'white' }}>Your User ID
                    Is: {props.currentUser.id}</h4>
                        <div className="row">
                            <div className="col" style={{ marginLeft: "75%" }}>
                                <Link to={'/user/post'} style={{ color: "white" }}> Ready To Add A New Show ... ?</Link>
                            </div>
                        </div>
                    </div>
                    </> : <><div className="jumbotron" style={{ backgroundColor: "black" }}>
                        <h1 className="display-4" style={{ color: "white" }} >Welcome</h1>
                        <h4 className="muted" style={{ color: "white" }}>Create a user account below</h4>
                    </div>
                    </>
            }
        </div>
    );
}

export default UserWelcome;
