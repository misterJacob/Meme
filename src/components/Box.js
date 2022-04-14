import {useState} from "react";

export default function Box(props){

    const [on, setOn] = useState(props.on)
    const styles = {
        backgroundColor: on ? "#222222" : "transparent",
        borderRadius: on ? '50%' : '5px'
    }
    function toggle(){
        setOn(prevOn => !prevOn)
    }
    console.log(props.on );
    return(
        <div className='box' style={styles} onClick={toggle}></div>
    )
}