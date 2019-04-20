import React from 'react';

//FUNCTIONS
import { } from '../services/main'

//COMPONENTS
import UserWelcome from '../components/userWelcome';


class ShowPost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            currentUser: []
        }
    }


    handleSubmit = () => {
        if (!this.state.inputValue){return}
        else {

        }


    }

    componentDidMount = () => {
                this.setState({currentUser: JSON.parse(localStorage.getItem("currentUser"))
            })
    }


    updateInputValue = (e) => {
        this.setState({ inputValue: e.target.value })

    }



    render() {
        console.log("Mook", this.state)
        return (
                <div className='conatiner'>
                <UserWelcome  currentUser={this.state.currentUser}/> 
                <div className="row">
                <div className="col">
                    
                </div>
                </div>
                </div>
        )
    }

}

export default ShowPost

