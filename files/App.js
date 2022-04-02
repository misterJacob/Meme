import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import Test from "./components/Test.js";
import Footer from "./components/Footer.js";
import Card from "./components/Card.js";
import data from "./data.js";


export default function App() {
  const cards = data.map((item) => {
        return (
          <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
          />
        );
  });

  return (
    <div>
      <Header />
      <Hero />
      <Test />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}
