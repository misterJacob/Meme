import React from "react";
import { useState } from "react";
import Box from "./Box.js"

import boxData from "./boxData.js";
export default function Boxes(props) {
  const [squares, setSquares] = React.useState(boxData);

  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc"
  };

  const squareElements = squares.map((square) => (
    // <div style={styles} className="box" key={square.id}></div>
    <Box key={square.id} on={square.on} />

  ));

  return(

        <div className="boxes">
              {squareElements}
        </div>
    )
}
    // const styles = {
    //     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // }
    
    // const squareElements = squares.map(square => (
    //     <div style={styles} className="box" key={square.id}></div>
    // ))
