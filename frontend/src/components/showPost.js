import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


//FUNCTIONS
import { readGenres } from '../services/main'

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
            genres: []
        }
    }


    handleSubmit = () => {
        if (!this.state.inputValue) { return }
        else {

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



    render() {
        console.log("Monkey", this.state)
        return (
            <div className='conatiner'>
                <UserWelcome currentUser={this.state.currentUser} />
                <div className="row">
                    <div className="col">
                        <h2 style={{ textAlign: "center" }}>Add A New Show To Watch</h2>
                        <div className="container">
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Title</Label>
                                        <Input type="email" name="title" id="exampleEmail" placeholder="Title Text Input" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleSelect">Genre</Label>
                                        <Input type="select" name="select" id="exampleSelect">
                                            {
                                                this.state.genres.map((e, i) => {
                                                    return <option>{e.genre_name}</option>
                                                })
                                            }

                                        </Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="exampleFile">Image</Label>
                                        <Input type="file" name="file" id="exampleFile" />
                                        <FormText color="muted">
                                            Upload the show poster for your new show
                                        </FormText>
                                    </FormGroup>
                                    <Button onClick={this.handleSubmit}>Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

}

export default ShowPost

