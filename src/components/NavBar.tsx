import PokemonBall from "../assets/pokemonBall.png";
import PokemonText from "../assets/pokemonText.png";

const NavBar = () => {
  return (
    <div className="bg-background p-[1.5rem] fixed z-30 top-0 left-0 right-0 flex flex-col items-center">
      <h1 className="text-3xl font-bold z-50">TCG Marketplace</h1>
      <div
        className="absolute w-[5rem] h-[5.5rem] rounded-full bg-background transform rotate-180"
        style={{
          borderBottomLeftRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
      >
        <img
          className="transform absolute top-0 z-10 rotate-180"
          src={PokemonText}
          alt="PokemonText"
        />
        <img
          className="h-[2.5rem] ml-[1.5rem] pb-[0.5rem] transform rotate-180"
          src={PokemonBall}
          alt="PokemonBall"
        />
      </div>
    </div>
  );
};

export default NavBar;
