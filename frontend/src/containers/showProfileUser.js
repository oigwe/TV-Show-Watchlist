import React from 'react';
import { Link } from 'react-router-dom';

//FUNCTIONS
import { readCommentsByName, postComment, readShowForUser } from '../services/main';

//COMPONENTS
import WatchList from '../components/isWatchingList';
import Comments from '../components/comments';




class ShowProfileUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tvShow: [],
            users: [],
            comments: [],
            currentUser: JSON.parse(localStorage.getItem('currentUser')),
            commentInput: "",
            masterList: [], 
        }

    }

    handleComment = (e) => {
        this.setState({ commentInput: e.target.value })
    }

    handleSubmit = (e) => {
        const title = this.props.location.pathname.split('/show/')[1].split('/user')[0];
        e.preventDefault()
        postComment(this.state.commentInput, this.state.currentUser.id, this.state.tvShow[0].sid )
            .then(() => {
                readCommentsByName(title)
                    .then((response) => {
                        console.log("REp", response.data.data)
                        this.setState({ comments: response.data.data,
                        commentInput: '' })
                    })
            })

    }


    componentDidMount() {
        const title = this.props.location.pathname.split('/show/')[1].split('/user')[0];
        const uId = this.props.match.params.id
        readShowForUser(title, uId)
            .then((response) => {
                this.setState({ tvShow: response.data.data })
            })

        readCommentsByName(title)
            .then((response) => {
                this.setState({ comments: response.data.data })
            })

    }

    render() {
        return (<>
            <div className="container p-5" style={{ backgroundColor: "white" }}>
                {
                    this.state.tvShow.map((e, i) => {
                        return <WatchList userShow={this.state.tvShow} current={this.state.currentUser} key={i} />
                    })
                }
            </div>
            <div className="container mt-3" style={{ backgroundColor: "white" }}>
                {
                    this.state.tvShow.map((e, i) => {
                        return <div className="row p-5" key={i}>
                            <div className="col">
                                <h3>Thoughts On {e.title} ... </h3>
                                <h4>Comments: {this.state.comments.length}</h4>
                                <div className="row p-5" style={{ overflow: "scroll", height: "75%" }}>
                                    {
                                        this.state.comments.length === 0 ? <p>Be The First To Comment On {e.title}</p> : <Comments comments={this.state.comments} />
                                    }
                                </div>
                            </div>
                            <div className="col">
                                <p>Logged In As {this.state.currentUser.username}. Mistake? Login <Link to='/users' style={{ color: "#dc3545" }}>Here</Link></p>
                                <form className="mt-5">
                                    <div className="form-group">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={this.state.commentInput} style={{ width: "100%" }} onChange={this.handleComment}></textarea>
                                    </div>
                                    <button type="button" className="btn btn-danger" onClick={this.handleSubmit}>Post</button>
                                </form>
                            </div>
                        </div>
                    })

                }
            </div>
        </>
        )
    }
}

export default ShowProfileUser