import React from 'react'
import Dropdown from '../components/dropdown'


class MainContainer extends React.Component {
    
    state={
        typed:""
    }  

    onType = (event) => {
        // console.log("event", event.target.value)
        this.setState({typed: event.target.value})
    }
    onChosen = (event) => {
        // console.log("event", event.target.innerText)
        this.setState({typed: event.target.innerText})
    }
    // componentDidUpdate(prevState){
    //     if (this.state.typed !== prevState.typed) {
    //         this.showDropdown(this.state.typed)
    //     }
    // }

    render(){
        return(
            <div>
                <h3>Input a word</h3>
                <input type="text" on onChange={(event)=>this.onType(event)} value={this.state.typed}></input>
                <Dropdown typed={this.state.typed} onChosen={this.onChosen}/>
            </div>
        )

    }

}

export default MainContainer