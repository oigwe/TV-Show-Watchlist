import React from 'react';
import {Spinner} from 'reactstrap'

//FUNCTIONS
import {readIndividualUserShows} from '../services/main'

//COMPONENTS
import WatchList from '../components/isWatchingList';



class UserProfile extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                currentUser: [],
            }

    }

    componentDidMount() {
        readIndividualUserShows(this.props.match.params.id)
        .then((response)=>{
            this.setState({currentUser: response.data.data})
        })
    }

    render() {
        return (
            <>
            <div className="container-fluid">
            {
                this.state.currentUser.length > 0 ? <h2 className="m-5">{this.state.currentUser[0].username} Is Watching ...</h2> : <Spinner/>

            }
            <div className="row d-flex align-content-start flex-wrap"> 
            {
             this.state.currentUser.length > 0 ? <WatchList tv= {this.state.currentUser}/> : <Spinner/>

            }
            </div>
            </div>
            </>
        )
    }
}

export default UserProfile