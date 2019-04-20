import React from 'react';

//FUNCTIONS
import {readAllShows} from '../services/main'

//COMPONENTS



class Shows extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                tvShow: [],
                filteredTV: []
            }

    }

    getUnique = (arr, comp) =>{
        const newArr = []
        arr.map((e,i) =>{ 
            console.log(e) 
             return e[comp]})

        .map((e, i, arrOfTitles)=> {
            console.log(e, i, arrOfTitles)
            return arrOfTitles.indexOf(e) === i })

        .filter((e, i) => {
            if(e === true){
                newArr.push(arr[i])
                console.log(newArr)
            }
            return newArr
        })
                return newArr
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
                            <h1 className="display-4">Our User Are Watching ...</h1>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row" style={{overflow:"scroll"}}>
                {

                    this.state.tvShow.length > 0 ? this.getUnique(this.state.tvShow, 'title').map((e,i)=>{

                        return <>
                        <img src={e.img_url} style={{height: '200px'}} alt={e.title}/>
                        </>

                    }) : null
                }
                </div>
                </div>
        </>
        )
    }
}

export default Shows