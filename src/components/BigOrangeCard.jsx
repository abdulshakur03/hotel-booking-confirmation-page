import React from "react";
import "../css/BigCard.css";

export default function BigOrangeCard() {
  return (
    <div className="big-card-container">
    <hr class="dashed-line"/>

      <span className="content">
        <p className="welcome">WELCOME CARD</p>
        <img src="src/assets/images/icon-sun.svg" alt="sun" className="sunny" />
        <p className="host-note-heading">A note from your host,</p>
        <h1 className="host-name">Margaux.</h1>
        <p className="host-note">
          we're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat -Poivre-Pretending not to notice you.
        </p>

        <p className="room">ROOM</p>
        <p className="room-name">La Garrigue</p>
      </span>
    </div>
  );
}
