import styles from "./Logo.module.css"
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="src/assets/images/icon-sun.svg" alt="sun" />
      <p>
        <span className={styles.logoSpan}>Maison</span> <br />
        <b>Soleil</b>
      </p>
    </div>
  );
}

// /home/l2e/Documents/personal/Front-End-Mentor/hotel-booking-confirmation-page/src/assets/images/icon-sun.svg