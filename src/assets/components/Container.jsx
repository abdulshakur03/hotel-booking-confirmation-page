import styles from "./Container.module.css"
import Nav from "./Nav";
export default function Container() {
  return (
    <div className={styles.container}>
      <Nav/>
    </div>
  );
}
