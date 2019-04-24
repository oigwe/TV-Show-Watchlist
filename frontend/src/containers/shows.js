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
            <div className="container-fluid" >
                <div className="row">
                    <div className="col" style={{ margin: "auto auto" }}>
                        <div className="jumbotron" style={{ color: "white", background: "linear-gradient(0deg,rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(http://thesmartlocal.com/images/easyblog_articles/6617/b2ap3_large_image12.jpg)", backgroundRepeat: "repeat round" }}>
                            <h1 className="display-4">What Are People Watching...</h1>
                        </div>
                    </div>
                </div>
                <div className="container d-flex flex-row" style={{ overflow: "scroll", height: "450px", backgroundColor: "white" }}>
                    {

                        this.state.tvShow.length > 0 ? <>
                            <WatchList master={this.getUnique(this.state.tvShow, "title")} watching={this.state.tvShow} />
                        </> : null
                    }
                </div>
            </div>
        </>
        )
    }
}

export default Shows