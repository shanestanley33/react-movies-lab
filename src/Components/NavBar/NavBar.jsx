import { Link } from "react-router-dom"
import "./NavBar.css";

export default function NavBar({ user }) {
  return (
    <div className="flex-container">
      <Link className="flex-item" to="/">
        <button className="btn fourth">Movies</button>
      </Link>
      <Link className="flex-item" to="/actors">
        <button className="btn fourth">Actors & Actress</button>
      </Link>
      <p className="flex-item">User {user}</p>
    </div>
  );
}
