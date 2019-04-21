import React from 'react';
import {Link} from 'react-router-dom';


const Userlist = props => {

    if (props.state.users === 'undefined') {
        return;
    }
    else {
        return (
            <>
                <div className='col-9'>
                    <ul className="list-group">
                    {props.state.users.map((e, i) => {
                            return (
                                <div className="row justify-content-between p-3" key={i} >
                                    <span className='col-7' onClick={props.handleUserClick} id={e.id} style={props.state.currentUser.id === e.id ?{backgroundColor: "#dc3545", borderRadius: "3px", margin: "auto auto"}: {backgroundColor: "transparent", margin: "auto auto"}} >{e.username}</span>
                                    <Link to={'/user/'+e.id}> <button type="button" class="btn btn-outline-light">User Profile</button></Link>
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