import Star from "../images/Star.png";

export default function Card(props) {
  // console.log(props.rating)
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "sold out";
  } else if (props.item.location === "Online") {
    badgeText = "online";
  }
  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img
        src={`../images/${props.item.coverImg}`}
        alt="cover-images"
        className="card-images"
      />
      <div className="stats">
        <img src={Star} alt="star" className="stats-img" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount})</span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        From <span className="bold">{props.item.price}</span> / Person
      </p>
    </div>
  );
}
