import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import data from "./data.js";

export default function App() {
  const Cards = data.map((item) => {
    // console.log()
    return (
      <Card
        key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
        item={item}
        // {...item} //for this to work you have to take away item every were in Card
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{Cards}</section>
    </div>
  );
}
