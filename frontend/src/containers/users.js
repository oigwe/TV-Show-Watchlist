import React from 'react';
import { Link } from 'react-router-dom';

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
        if (!this.state.inputValue) {return}
        if (this.checkUser(this.state.inputValue) === true) {
            this.setState({ inputValue: '' })
            return alert('User already exist');
        }
        else {

            createUser(this.state.inputValue)
                .then(() => {
                    readAllUsers()
                        .then((response) => {
                            localStorage.setItem("currentUser", JSON.toStringify(response.data.dat))
                            this.setState({ users: response.data.data })
                        })
                })
        }
    }

    componentDidMount = () => {
        readAllUsers()
            .then((response) => {
                this.setState({ users: response.data.data })
            })
    }


    updateInputValue = (e) => {
        this.setState({ inputValue: e.target.value })

    }


    handleUserClick = e => {
        let index = parseInt(e.target.id)
        readIndividual(index)
            .then((response) => {
                this.setState({ currentUser: response.data.data })
            })
    }


    render() {
        return (
            <div className='conatiner'>
                <UserWelcome currentUser={this.state.currentUser} />
                <div className="row">
                    <div className="col" style={{ marginLeft: '50px' }}>
                        <Link to={'/user/post'}> Ready To Add A New Show ... ?</Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-2"></div>
                    <div className='col-4 mt-5'>
                        <h3>New User</h3>
                        <form className="form-inline" onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Create User" aria-label="Search" value={this.state.inputValue} onChange={this.updateInputValue} />
                            <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Add User</button>
                        </form>
                    </div>
                    <div className='col-6 mt-5'>
                        <h3>Master List Of All Users</h3>
                        <h6>Select Your Username</h6>
                        <div id='containerList col-6'><UserList state={this.state} handleUserClick={this.handleUserClick} /> </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default User

