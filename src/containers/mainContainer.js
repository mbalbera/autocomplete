import React from 'react'
import Dropdown from '../components/dropdown'


class MainContainer extends React.Component {
    
    state={
        typed:""
    }  

    onType = (event) => {
        // console.log("event", event.target.value)
        this.setState({typed: event.target.value })
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
                <input type="text" onChange={(event)=>this.onType(event)}></input>
                <Dropdown typed={this.state.typed}/>
            </div>
        )

    }

}

export default MainContainer