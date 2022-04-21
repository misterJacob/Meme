import React, {useState, useEffect} from "react";
// import memesData from "../memesData";

export default function Meme() {
  // const [memeImg, setMemeImg] = React.useState(
  //   "https://i.imgflip.com/30b1gx.jpg"
  // );
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

    const [allMemes, setAllMemes] = React.useState([])

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  console.log(allMemes);


  function getMemeImage() {
    // const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() *
    //  memesArray
     allMemes
     .length);
    const url =
    //  memesArray
     allMemes
     [randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value

    }))

  }
  return (
    <main>
      <div className="meme-container">
        <div className="form">
          <input
            className="text"
            placeholder="Shut up"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            className="text"
            placeholder="and take my money"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />

          <button 
          className="btn" 
          onClick={getMemeImage}
          >
            Get a new meme image 🖼
          </button>
        </div>
        <div className="img-wrap">
          <img src={meme.randomImage} alt="" className="meme-img" />
          <h2 className="text-top">{meme.topText} </h2>
          <h2 className="text-bottom">{meme.bottomText} </h2>
        </div>
      </div>
    </main>
  );
}
