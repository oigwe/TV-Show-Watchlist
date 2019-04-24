import React from 'react';

//FUNCTIONS
import { readAllShows } from '../services/main'

//COMPONENTS
import Carousel from '../components/carousel';



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tvShow: [],
        }

    }


    getUnique = (arr, comp) => {
        const newArr = [];
        arr.map((e, i) => {
            return e[comp]
        })
            .map((e, i, arrOfTitles) => {
                return arrOfTitles.indexOf(e) === i
            })

            .filter((e, i) => {
                if (e === true) {
                    newArr.push(arr[i])
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
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="jumbotron" style={{ backgroundColor: "black" }}>
                            <h1 className="display-4" style={{ color: "white", fontWeight: "bold" }}>Welcome To The TV Show Watchlist!</h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row" style={{ overflow: "scroll", height: "600px" }}>
                    {
                        this.getUnique(this.state.tvShow, "title").map((e, i) => {
                            return <Carousel photos={e.img_url} index={i} key={i} />
                        })
                    }
                </div>
            </div>
        </>
        )
    }
}

export default Home