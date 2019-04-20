import React from 'react';

//FUNCTIONS
import {readAllShows} from '../services/main'

//COMPONENTS
import Carousel from '../components/carousel';



class Home extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                tvShow: [],
            }

    }

    componentDidMount() {
        readAllShows()
            .then((response)=>{
                this.setState({tvShow: response.data.data})
            })
    }

    render() {
        return (<>
            <div className="container-fluid">
                <div className="row">
                    <div className="col" style={{ margin: "auto auto" }}>
                        <div className="jumbotron">
                            <h1 className="display-4">Welcome To The TV Watchlist!</h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row" style={{overflow:"scroll"}}>
                {
                    this.state.tvShow.map((e,i)=>{
                        return <Carousel photos={e.img_url} index={i} key={i}/>
                    })
                }
                </div>
                </div>
        </>
        )
    }
}

export default Home