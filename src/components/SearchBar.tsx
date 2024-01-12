import { IoIosArrowDown } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-[8.5rem] md:flex w-full md:w-auto">
        <div className="flex justify-center">
          <input
            type="text"
            className="focus:outline-none placeholder:text-center md:placeholder:text-left p-[0.8rem] mb-[1.3rem] md:mb-[0] md:p-[0.5rem] md:pl-[1.3rem] w-[90%] md:w-[16rem] placeholder:font-thin placeholder-grey-400 rounded-full md:rounded-none md:rounded-l-full"
            placeholder="Name..."
          />
        </div>
        <div className="flex justify-between w-[90%] mx-auto">
          <div className="relative w-[6rem] mx-[0.2rem]">
            <input
              type="text"
              className="p-3 outline-none w-full rounded-full md:rounded-none"
              placeholder="Type"
              id="Type"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 text-2xl"
            >
              <IoIosArrowDown className="text-gray-400" />
            </button>
          </div>
          <div className="relative w-[7rem]">
            <input
              type="text"
              className="p-3 outline-none w-full px-[1rem] rounded-full md:rounded-none"
              placeholder="Rarity"
              id="Rarity"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 text-2xl"
            >
              <IoIosArrowDown className="text-gray-400" />
            </button>
          </div>
          <div className="relative w-[5rem] ml-[0.2rem]">
            <input
              type="text"
              className="p-3 outline-none w-full rounded-full md:rounded-none md:rounded-r-full"
              placeholder="Set"
              id="Set"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 text-2xl rounded-r-md"
            >
              <IoIosArrowDown className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
