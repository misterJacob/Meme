import React from "react"
// import Star from "./Star.js";


export default function Card(){

     const [contact, setContact] = React.useState({
       firstName: "Jacob",
       lastName: "Beck",
       phone: "+1 (719) 555-1212",
       email: "itsmyrealname@example.com",
       isFavorite: false,
     })


    function toggleFavorite() {
      setContact((prevContact) => ({
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      }));
    }
// star.js
    function Star(props) {
      const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";
      return (
        <img
          src={`../images/${starIcon}`}
          className="card--favorite"
          onClick={props.handleClick}
          alt="favorite"
         />
      );
    }

    return (
      <div className="isfavorite">
        <article className="card">
          <img src="./images/user.png" className="card--image" alt=""/>
          <div className="card--info">
            <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
            <h2 className="card--name">
              {contact.firstName} {contact.lastName}
            </h2>
            <p className="card--contact">{contact.phone}</p>
            <p className="card--contact">{contact.email}</p>
          </div>
        </article>
      </div>
    );

}