import React from 'react';
import { Link } from 'react-router-dom';

//FUNCTIONS
import { readUsersForShow } from '../services/main';

//COMPONENTS

class Watchers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            watching: [],
        }

    }

    componentDidMount() {
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
                        return <li><Link to={`/user/${e.id}`} style={{ color: "black" }}>{e.username}</Link></li>
                    })
                }
            </div>
        );
    }
}

export default Watchers;