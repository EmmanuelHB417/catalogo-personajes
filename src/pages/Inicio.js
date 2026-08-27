import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="inicio">
      <h1>Catálogo de personajes</h1>

      <p>
        Esta aplicación permite consultar personajes
        utilizando React y una API pública.
      </p>

      <Link className="boton" to="/Personajes">
        Ver personajes
      </Link>
    </section>
  );
}

export default Inicio;