import { useAppDispatch, useAppSelector } from "../store/hooks";
import { appData } from "../store/slices/appSlice";
import { addToCart } from "../store/slices/cartSlice";

interface Props {
  item: any;
}

const PokemonCard = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const { datas, cart } = useAppSelector(appData);

  const itemsInCartIds = cart.items.map((ele: any) => ele.id);

  const isInCart = itemsInCartIds.includes(item.id);

  const handleAddToCart = () => {
    const selectedPokemonCard = datas.find((data: any) => data.id === item.id);
    if (selectedPokemonCard.cardmarket.prices) {
      dispatch(
        addToCart({
          id: selectedPokemonCard.id,
          item: selectedPokemonCard,
          price: selectedPokemonCard.cardmarket.prices.trendPrice,
          quantity: 1,
          subtotal: selectedPokemonCard.cardmarket.prices.trendPrice,
        })
      );
    }
  };

  return (
    <div
      className="my-[8rem] mx-[2rem] relative flex justify-center items-center"
      key={item.id}
    >
      <img
        className="h-[15rem] absolute bottom-28 mx-auto"
        src={item.images.large}
        alt={item.name}
      />
      <div className="bg-background rounded-lg w-[15rem] h-[10rem] flex flex-col justify-center pt-[1rem]">
        <h1 className="text-center font-bold text-xl mt-[0.5rem]">
          {item.name}
        </h1>
        <div className="text-center text-sm my-[0.2rem] text-secondary">
          {item.rarity}
        </div>
        <div className="text-center space-x-5">
          <span>${item.cardmarket.prices.trendPrice}</span>
          <span>3 left</span>
        </div>
      </div>

      {isInCart ? (
        <button
          onClick={handleAddToCart}
          className="font-bold bg-quaternary text-white absolute -bottom-3 w-[10rem] rounded-full py-[0.3rem]"
        >
          Selected
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="font-bold bg-primary absolute -bottom-3 w-[10rem] rounded-full py-[0.3rem]"
        >
          Select Card
        </button>
      )}
    </div>
  );
};

export default PokemonCard;
