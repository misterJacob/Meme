import React from "react";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImg, setMemeImg] = React.useState(
  //   "https://i.imgflip.com/30b1gx.jpg"
  // );
  const[meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/30b1gx.jpg"
  })

  const [allMemeImgs, setAllMemeImgs] = React.useState(memesData);

  function getMemeImg() {
    const memesArray = allMemeImgs.data.memes;
    const randomIndex = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomIndex].url;
    // setMemeImg(memesArray[randomIndex].url);
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImg: url
    }))
  }
  return (
    <main>
      <div className="meme-container">
        <div className="form">
          <input className="text" placeholder="Shut up" />
          <input className="text" placeholder="and take my money" />

          <button className="btn" onClick={getMemeImg}>
            Get a new meme image 🖼
          </button>
        </div>
        <div className="img-wrap">
          <img src={meme.randomImg} alt="" className="meme-img" />
        </div>{" "}
      </div>
    </main>
  );
}
