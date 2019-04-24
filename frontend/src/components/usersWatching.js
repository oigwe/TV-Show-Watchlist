import React from 'react';
import { Link } from 'react-router-dom';

//FUNCTIONS
import { readUsersForShow, } from '../services/main';

//COMPONENTS

class Watchers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            watching: [],
            tvShowsMaster: []
        }

    }


    componentDidMount() {

        readUsersForShow(this.props.current)
            .then((response) => {
                this.setState({ tvShowsMaster: response.data.data })
            })
        readUsersForShow(this.props.current)
            .then((response) => {
                this.setState({ watching: response.data.data })
            })
    }


    render() {
        return (
            <div>
                {
                    this.state.watching.map((e, i) => {
                        return <li key={i}><Link to={`/show/${this.props.current}/user/${e.user_id}`} style={{ color: "black" }}>{e.username}</Link></li>
                    })
                }
            </div>
        );
    }
}

export default Watchers;