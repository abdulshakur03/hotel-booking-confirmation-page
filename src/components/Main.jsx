import "../css/Main.css";
import BigCard from "./BigOrangeCard";
export default function Main() {
  return (
    <div className="main">
      <div className="booking-info">
        BOOKING<span>.</span>CONFIRMED
      </div>
      <h1 className="title">
        Bienvenue,<span>Lucia.</span>
      </h1>
      <div className="option-btn">
        <button>Print receipt</button>
        <button>Add to calendar</button>
      </div>
      <BigCard />
    </div>
  );
}
