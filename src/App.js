import Header from './components/Header.js';
import Meme from './components/Meme.js';
import IsFavorite from './components/IsFavorite.js';


export default function App(){
    return(
        <div>
            <Header />
            <Meme  />
                <IsFavorite />
        </div>
    )
}