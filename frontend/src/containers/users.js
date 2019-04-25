import React from 'react';

//FUNCTIONS
import { readAllUsers, readIndividual, createUser } from '../services/main'

//COMPONENTS
import UserList from '../components/userlist'
import UserWelcome from '../components/userWelcome';

class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            users: [],
            currentUser: []
        }
    }


    checkUser = (userName) => {
        for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].username === userName) {
                return true
            }
        }
    }


    handleSubmit = () => {
        if (!this.state.inputValue) { return }
        if (this.checkUser(this.state.inputValue) === true) {
            this.setState({ inputValue: '' })
            return alert('User already exist');
        }
        else {

            createUser(this.state.inputValue)
                .then(() => {
                    readAllUsers()
                        .then((response) => {
                            this.setState({ users: response.data.data })
                        })
                })
        }
    }

    componentDidMount = () => {
        readAllUsers()
            .then((response) => {
                this.setState({
                    currentUser: JSON.parse(localStorage.getItem('currentUser')) || {id: 1, username: "Jon Snow"},
                    users: response.data.data
                })
            })
    }


    updateInputValue = (e) => {
        this.setState({ inputValue: e.target.value })

    }


    handleUserClick = e => {
        let index = parseInt(e.target.id)
        readIndividual(index)
            .then((response) => {
                localStorage.setItem("currentUser", JSON.stringify(response.data.data))
                this.setState({ currentUser: response.data.data })
            })
    }


    render() {
        return (
            <div className='container-fluid'>
                <UserWelcome currentUser={this.state.currentUser} location={this.props.location.pathname} />
                <div className='row'>
                    <div className='col-2'></div>
                    <div className='col-4'>
                        <h3 style={{ color: "white" }}>New User</h3>
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Create User" aria-label="Search" value={this.state.inputValue} onChange={this.updateInputValue} />
                            <button className="btn btn-danger my-2 my-sm-0" type="submit">Add User</button>
                        </form>
                    </div>
                    <div className='col-6' style={{ color: "white" }}>
                        <h3>Master List Of All Users</h3>
                        <p>Select Your Username To Login</p>
                        <div className='mt-4' style={{ overflow: "scroll" }}>
                            <UserList state={this.state} handleUserClick={this.handleUserClick} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default User

