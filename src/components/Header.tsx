import { Link } from "react-router-dom";
import { getRandomColor } from "../helpers";

function Header() {
  const randomColor = getRandomColor();
  return (
    <header
      className="header"
      style={{
        // @ts-ignore
        ["--border-colour"]: randomColor,
      }}
    >
      <Link to="/products">
        <div className="header__logo" style={{ color: randomColor }}>
          Hoxbay
        </div>
      </Link>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/products">Home</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
