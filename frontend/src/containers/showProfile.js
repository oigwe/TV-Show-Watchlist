import React from 'react';

//FUNCTIONS
import { readShow, readUsersForShowID, readComments } from '../services/main';

//COMPONENTS
import WatchList from '../components/isWatchingList';
import Watchers from '../components/usersWatching';
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
                        return <>
                            <div className="row p-5">
                                <div className="col">
                                    <h3>Thoughts On {e.title} ... </h3>
                                </div>
                                <div className="col">
                                    <form>
                                        <div className="form-group">
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" style={{ width: "100%" }}></textarea>
                                        </div>
                                        <button type="button" class="btn btn-danger">Post</button>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <Comments />
                            </div>
                        </>
                    })

                }
            </div>
        </>
        )
    }
}

export default ShowProfile