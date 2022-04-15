// import {useState} from "react";

export default function Box(props){


    // const styles = {
    //     backgroundColor: props.on ? "#222222" : "transparent",
    // }
    // const [on, setOn] = useState(props.on)
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
        borderRadius: props.on ? '50%' : '5px',
        transition: props.on ? 'all 0.5s ease-in-out' : 'all 0.5s ease-in-out',
    }
    // function toggle(){
    //     setOn(prevOn => !prevOn)
    // }
    // console.log(props.on );
    return(
        
        <div className='box'
            style={styles}
            onClick={()=> props.handleClick(props.id)}

          >

          </div>
    )
}