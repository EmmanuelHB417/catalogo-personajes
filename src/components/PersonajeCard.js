function PersonajeCard({ personaje }) {
  return (
    <article className="tarjeta">
      <img
        src={personaje.image}
        alt={personaje.name}
      />

      <h2>{personaje.name}</h2>

      <p>
        <strong>Estado:</strong> {personaje.status}
      </p>

      <p>
        <strong>Especie:</strong> {personaje.species}
      </p>

      <p>
        <strong>Género:</strong> {personaje.gender}
      </p>
    </article>
  );
}

export default PersonajeCard;