import React from 'react';

//FUNCTIONS
import { readAllShows } from '../services/main'

//COMPONENTS
import WatchList from '../components/isWatchingList';


class Shows extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tvShow: [],
        }

    }

    getUnique = (arr, comp) => {
        const newArr = []
        arr.map((e, i) => {
            console.log(e)
            return e[comp]
        })

            .map((e, i, arrOfTitles) => {
                console.log(e, i, arrOfTitles)
                return arrOfTitles.indexOf(e) === i
            })

            .filter((e, i) => {
                if (e === true) {
                    newArr.push(arr[i])
                    console.log(newArr)
                }
                return newArr
            })
        return newArr
    }

    componentDidMount() {
        readAllShows()
            .then((response) => {
                this.setState({ tvShow: response.data.data })
            })

    }


    render() {
        return (<>
            <div className="container-fluid" style={{ backgroundColor: "black" }} >
                <div className="row">
                    <div className="col" style={{ margin: "auto auto" }}>
                        <div className="jumbotron" style={{backgroundColor: "black", color: "white"}}>
                            <h1 className="display-4">Our Users Are Watching ...</h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row" style={{overflow: 'scroll', height: '500px'}}>
                    {

                        this.state.tvShow.length > 0? <> 
                        <WatchList master={this.getUnique(this.state.tvShow, 'title')} watching={this.state.tvShow}/>
                        </>: null
                    }
                </div>
            </div>
        </>
        )
    }
}

export default Shows