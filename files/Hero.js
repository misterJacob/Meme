import HeroImage from '../images/hero-images.png'


export default function Hero(){
    return (
      <section className='hero'>
        <img src={HeroImage} alt="hero" className="heroImage" />
        <h1 className='title'>Online experience</h1>
        <p className='text'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    );
}