import Header from "./components/Header.js";
import Meme from "./components/Meme.js";
import Card from "./components/Card.js";
import Boxes from "./components/Boxes.js";
import Joke from "./components/Joke.js";
import jokesData from "./components/jokesData.js";
import Messages from "./components/Messages.js";
import FeelLucky from "./components/FeelLucky.js";
import AddItem from "./components/AddItem.js";
import Tenzies from "./components/Tenzies.js";


export default function App() {

  const jokeElements = jokesData.map(joke => {
    return(
      <Joke 
      key={joke.id} 
      setup={joke.setup} 
      punchline={joke.punchline} 
      />
    )
  })
  return (
    <>
      <Header />
      <Meme />
      <Card />
      <FeelLucky />
      <Boxes />
      {jokeElements}
      <Messages />
      <AddItem />
      <Tenzies />
    </>
  );
}
{/* <Boxes darkMode={true} /> */}
