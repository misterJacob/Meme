import React from "react";

export default function AddItem() {

    const [thingsArray, setThingsArray]= React.useState(["Thing 1", "Thing 2", "Thing 3"]);

    function addItem (){
        setThingsArray(prevState => {
            return(

                [...prevState, `Thing ${prevState.length + 1}`]
                ) 
        })
    }



    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  


  return (
    <div className="body-add-item">
      <button 
      onClick={addItem}
      >Add Item</button>
      {thingsElements}
    </div>
  )
}
