import "../css/BigWhite.css";

export default function BigWhiteCard() {
  return (
    <div className="big-white-card-container">
      <div className="white-header">
        <span>Receipt</span> <span> № MS-2026</span>
        <span>0421-AH</span>
        Your stay
      </div>
      <hr class="dashed-line" />

      <span className="white-card-content">
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

// Check in
// 25 Apr
// Saturday · 15:00

// Check out
// 29 Apr
// Wednesday · 11:00

// Room · La Garrigue · 4 nights
// € 620.00
// Breakfast · 2 guests
// € 96.00
// Tourist tax
// € 14.40

// Total paid
// € 730.40

// Paid · Wise · GBP
