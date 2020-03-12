import React from 'react'

function Dropdown(props) {
    const dictonary = ["apple", "ant", "banana", "bandana", "pear", "pet"]
    let all
    if (props.typed.length === 0){
        all = ""
    }else{
        let selected = dictonary.filter(word => word.includes(props.typed))
        all = selected.map(s =>
            <div>
                <p  onClick={(event)=>props.onChosen(event)}>{s}</p>
            </div>
        )
    }
    return (
        <div>
            {all}
        </div>
    )
}
export default Dropdown