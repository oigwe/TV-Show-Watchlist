import React from 'react';

const Comments = (props) => {
    return (
        <div className="col">
            {
                props.comments.reverse().map((e, i) => {
                    return <>
                        <div className="media mt-3" key={i}>
                            <img className="mr-3" src="http://2.gravatar.com/avatar/81304e8f5a63d0fb806ba18eff525f0f?s=49&d=mm&r=g" alt="profile" />
                            <div className="media-body">
                                <h5 className="mt-0">{e.username}</h5>
                                {e.comment_body}  </div>
                        </div>
                    </>
                })
            }
        </div>
    );
}

export default Comments;