import trollFace from '../images/troll-face.png';

export default function Header(){
    return (
      <header className='header'>
        < div className='logo-wrap'>
            <img src={trollFace} alt="" className='troll-face'/>
            <p className='title' >Meme Generator</p>
        </ div>
        <p className='description'>React Course - Project 3</p>
      </header>
    );
}