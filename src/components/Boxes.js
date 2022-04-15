import React, { useState } from "react";
import Box from "./Box.js";

import boxData from "./boxData.js";
export default function Boxes(props) {
  const [squares, setSquares] = React.useState(boxData);

  function toggle(id){
       console.log(id);
       setSquares(prevSquares => {

        return prevSquares.map((square)=> {
          return square.id === id ? {...square, on: !square.on} : square;
        })
        //  const newSquares = []
        //  for(let i = 0; i <prevSquares.length; i++){
        //    const currentSquare = prevSquares[i]
        //    if(currentSquare.id === id){
        //      const updatedSquare = {
        //        ...currentSquare,
        //        on: !currentSquare.on
        //      }
        //      newSquares.push(updatedSquare)
        //    }else{
        //      newSquares.push(currentSquare)
        //    }
        //  }
        //  return newSquares
       })
  }

  const squareElements = squares.map((square) => (
    // <div style={styles} className="box" key={square.id}></div>
    <Box 
    key={square.id} 
    // id={square.id} 
    on={square.on} 
    handleClick={() =>toggle (square.id)}
    />
  ));

  return <div className="boxes">{squareElements}</div>;
}
