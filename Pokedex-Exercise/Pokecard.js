const Pokecard = ({ id, name, type, baseExperience }) => {
  return (
    <div className="pokecard">
      <h2>{name}</h2>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>Type: {type}</p>
      <p>EXP: {baseExperience}</p>
    </div>
  );
};
