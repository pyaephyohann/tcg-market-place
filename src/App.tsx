import PokemonCard from "./components/PokemonCard";
import { useAppSelector } from "./store/hooks";
import { appData } from "./store/slices/appSlice";

const App = () => {
  const { datas } = useAppSelector(appData);

  return (
    <div className="w-[70%] mx-auto mt-[6.5rem]">
      <div className="flex flex-wrap justify-center">
        {datas.map((data: any) => {
          if (data.cardmarket && data.cardmarket.prices) {
            return <PokemonCard key={data.id} item={data} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default App;
