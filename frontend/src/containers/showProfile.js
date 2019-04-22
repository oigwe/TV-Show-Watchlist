import React from 'react';
import {Link} from 'react-router-dom';

//FUNCTIONS
import { readShow, readUsersForShowID, readComments, postComment } from '../services/main';

//COMPONENTS
import WatchList from '../components/isWatchingList';
import Comments from '../components/comments';




class ShowProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tvShow: [],
            users: [],
            comments: [],
            currentUser: [],
            commentInput: "",
        }

    }

    handleComment = (e) => {
        this.setState({commentInput: e.target.value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        postComment(this.state.commentInput, this.state.currentUser.id, this.props.match.params.id)
        .then(()=>{
            readComments(this.props.match.params.id)
            .then((response) => {
                this.setState({ comments: response.data.data })
            })
        })

    }

    componentDidMount() {

        readShow(this.props.match.params.id)
            .then((response) => {
                this.setState({
                    tvShow: response.data.data,
                    currentUser: JSON.parse(localStorage.getItem('currentUser')),
                })
            })
        readUsersForShowID(this.props.match.params.id)
            .then((response) => {
                this.setState({ users: response.data.data })
            })

        readComments(this.props.match.params.id)
            .then((response) => {
                this.setState({ comments: response.data.data })
            })

    }

    render() {
        return (<>
            <div className="container p-5" style={{ backgroundColor: "white" }}>
                {
                    this.state.tvShow.map((e, i) => {
                        return <WatchList profile={this.state.tvShow} key={i} />
                    })
                }
            </div>
            <div className="container mt-3" style={{ backgroundColor: "white" }}>
                {
                    this.state.tvShow.map((e, i) => {
                        return <div className="row p-5" key={i}>
                                <div className="col">
                                    <h3>Thoughts On {e.title} ... </h3>
                                    <div className="row p-5" style={{overflow: "scroll", height: "75%"}}>
                                       {
                                           this.state.comments.length === 0 ? <p>Be The First To Comment On {e.title}</p> : <Comments comments={this.state.comments} />
                                       }
                                    </div>
                                </div>
                                <div className="col">
                                <p>Logged In As {this.state.currentUser.username}. Mistake? Login <Link to='/users' style={{color: "#dc3545"}}>Here</Link></p>
                                    <form className="mt-5">
                                        <div className="form-group">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ width: "100%" }} onChange={this.handleComment}></textarea>
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

export default ShowProfile