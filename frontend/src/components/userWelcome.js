import React from 'react';

const UserWelcome = (props) => {
    return (
        <div>
            {
                props.currentUser.length !== 0 ?  
                <><div className="jumbotron">
                    <h1 cclassNamelass="display-4">Welcome {props.currentUser.username}</h1>
                    <h4>Your user id is: {props.currentUser.id}</h4>
                </div>
                </>: <><div className="jumbotron">
                    <h1 className="display-4">Welcome</h1>
                    <h4>Create a user account below</h4>
                </div>
                </>
            }
        </div>
    );
}

export default UserWelcome;