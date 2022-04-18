import React, {useState} from 'react';

export default function Joke(props){

    const [isShown, setIsShown] = useState(false);

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    return (
      <div className="jokes-container">
        {props.setup && <h3> {props.setup} </h3>}
        {isShown && <p>{props.punchline} </p>}
        <button onClick={toggleShown}>
            {isShown ? "Hide" : "Show"}
             Punchline
             </button>
        {/* {isShown && <button onClick={toggleShown}>
            {isShown ? "Hide" : "Show"}
             Punchline
             </button>}
        {!isShown && <button onClick={toggleShown}>
            {isShown ? "Hide" : "Show"} 
            Punchline
            </button>} */}
        <div className="line"></div>
      </div>
    );
}