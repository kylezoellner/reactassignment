import { useState, useEffect } from "react"

export default function CountButton(props){
    let [count1, setCount] = useState(0)

    function handleClick(){
        setCount(count1 +1 * props.mult)
    }

    function rollOverCount(){
        if(count1 > 10){
            setCount(0)
        }
    }

    useEffect(rollOverCount, [count1])
    return(
        <div>
        <button style={props} onClick={handleClick}>{props.name}</button>
        <br />
        <div>Count: {count1}</div>
        </div>
    )
}

