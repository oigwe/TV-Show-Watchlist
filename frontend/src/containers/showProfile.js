import React from 'react';

//FUNCTIONS
import {readShow, readUsersForShowID, readComments} from '../services/main';

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
        .then((response)=>{
            this.setState({
                tvShow: response.data.data,
                currentUser: JSON.parse(localStorage.getItem('currentUser')),
            })
        })
        readUsersForShowID(this.props.match.params.id)
        .then((response)=>{
            this.setState({users: response.data.data})
        })

        readComments(this.props.match.params.id)
        .then((response)=>{
            this.setState({comments: response.data.data})
        })
  
    }

    render() {
        console.log("meme", this.state)
        return (<>
            <div className="container">
                {
                    this.state.tvShow.map((e,i)=>{
                       return <WatchList profile={this.state.tvShow} key={i}/>
                    })
                }
                {
                    this.state.tvShow.map((e,i)=>{
                        return  <> <div className="row my-3">
                        <h5>Comments: Tell Us How You Feel About {e.title} </h5>
                        </div>
                        <div className="row">
                        <form style={{width: '100%'}}>
                        <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button>Post</button>
</form>
</div>
<div className="row">
                        <Comments/>
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