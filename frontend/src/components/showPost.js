import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input } from 'reactstrap';


//FUNCTIONS
import { readGenres, readGenreByName, createShow } from '../services/main'

//COMPONENTS
import UserWelcome from '../components/userWelcome';


class ShowPost extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            titleValue: '',
            imgValue: '',
            genreInput: '',
            currentUser: [],
            genres: [],
            submitted: false,
        }
    }

    componentDidMount = () => {
        this.setState({
            currentUser: JSON.parse(localStorage.getItem("currentUser"))
        })

        readGenres()
            .then((response) => {
                this.setState({ genres: response.data.data })
            })
    }


    handleTitleInputValue = (e) => {
        this.setState({ titleValue: e.target.value })
    }

    handleSelectChange = (e) => {
        this.setState({ genreInput: e.target.value })
    }

    handleImageValue = (e) => {
        this.setState({ imgValue: e.target.value })
    }

    handleSubmit = () => {
        if (!this.state.titleValue) { return alert("Please Include A Show Title") }
        if (!this.state.imgValue) { return alert("Please Include An Image URL") }
        if (!this.state.genreInput) { return alert("Please Select A Genre") }
        else {
            readGenreByName(this.state.genreInput)
                .then((response) => {
                    createShow(this.state.titleValue, this.state.imgValue, this.state.currentUser.id, response.data.data.id)
                        .then(() => this.setState({ submitted: true }))
                })
        }


    }



    render() {
        return (
            <div className='container-fluid' style={{ backgroundColor: "black" }}>
                <UserWelcome currentUser={this.state.currentUser} location={this.props.location.pathname} />
                <div className="row">
                    <div className="col">
                        <div className="container p-5" style={{ background: "white" }}>
                            <h2 style={{ textAlign: "center" }}>What Show Are You Going To Watch?</h2>
                            <h6 style={{ textAlign: "center" }}>Not {this.state.currentUser.username}? Login <Link to='/users' style={{ color: "#dc3545" }}>Here</Link></h6>
                            {
                                this.state.submitted === true ? <h5 style={{ backgroundColor: '#4ca746' }}>{this.state.titleValue} Has Been Added To Your Watchlist</h5> : null
                            }
                            <Form>
                                <FormGroup>
                                    <Label for="exampleTitle">Title</Label>
                                    <Input type="text" name="title" id="exampleTitle" placeholder="Title Text Input" onChange={this.handleTitleInputValue} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleImage">Show Poster URL</Label>
                                    <Input type="text" name="title" id="exampleImage" placeholder="URL Link For Show Image" onChange={this.handleImageValue} required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Genre</Label>
                                    <Input type="select" name="select" id="exampleSelect" onChange={this.handleSelectChange}>
                                        <option value="" defaultValue disabled>Please Select A Genre</option>
                                        {
                                            this.state.genres.map((e, i) => {
                                                return <option key={i} data-id={e.id} >{e.genre_name}</option>
                                            })
                                        }

                                    </Input>
                                </FormGroup>
                                <button type="button" className="btn btn-danger mt-2" onClick={this.handleSubmit}>Add To Watchlist</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default ShowPost

