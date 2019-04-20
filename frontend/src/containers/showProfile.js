import React from 'react';

//FUNCTIONS
import {readShow, readUsersForShowID} from '../services/main';

//COMPONENTS
import WatchList from '../components/isWatchingList';
import Watchers from '../components/usersWatching';




class ShowProfile extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                tvShow: [],
                users: [],
                comments: []
            }

    }

    componentDidMount() {
        readShow(this.props.match.params.id)
        .then((response)=>{
            this.setState({tvShow: response.data.data})
        })
        readUsersForShowID(this.props.match.params.id)
        .then((response)=>{
            this.setState({users: response.data.data})
        })
  
    }

    render() {
        console.log("meme", this.state)
        return (<>
            <div className="container">
                {
                    this.state.tvShow.map((e,i)=>{
                       return <WatchList profile={this.state.tvShow}/>
                    })
                }
                {
                    this.state.tvShow.map((e,i)=>{
                        return   <div className="row my-3">
                        <h5>Comments: Tell Us How You feel About {e.title} </h5>
                    </div>
                    })

                }
                </div>
        </>
        )
    }
}

export default ShowProfile