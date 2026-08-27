import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>React Personajes</h2>

      <div>
        <Link to="/">Inicio</Link>
        <Link to="/personajes">Personajes</Link>
      </div>
    </nav>
  );
}

export default Navbar;