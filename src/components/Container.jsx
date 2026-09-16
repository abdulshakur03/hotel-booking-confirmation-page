import "../css/Container.css";
import Main from "./Main";
import Nav from "./Nav";
export default function Container() {
  return (
    <div className="container">
      <Nav />
      <hr />
      <Main/>
    </div>
  );
}
