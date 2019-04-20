import React from 'react';
import {Link} from 'react-router-dom';


const Userlist = props => {

    if (props.state.users === 'undefined') {
        return;
    }
    else {
        return (
            <>
                <div className='container col-7 left'>
                    <ul className="list-group">
                    {props.state.users.map((e, i) => {
                            return (
                                <div className="user row justify-content-between p-3" key={i} id='list' >
                                    <span className='col-7' onClick={props.handleUserClick} id={e.id} style={props.state.currentUser.id === e.id ?{backgroundColor: "yellow"}: {backgroundColor: "transparent"}} >{e.username}</span>
                                    <Link to={'/user/'+e.id}> <button>User Profile</button></Link>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </>
        )
    }

}

export default Userlist;

/*
*/