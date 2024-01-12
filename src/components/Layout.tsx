import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { appData, fetchAppData } from "../store/slices/appSlice";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import ReactLoading from "react-loading";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  const { isLoading } = useAppSelector(appData);
  const dispatch = useAppDispatch();
  const { isInit } = useAppSelector(appData);

  useEffect(() => {
    if (!isInit) {
      dispatch(fetchAppData());
    }
  }, [isInit, dispatch]);

  return (
    <div className="relative">
      <NavBar />
      <SearchBar />
      {isLoading ? (
        <div className="flex justify-center items-center mt-[7rem]">
          <ReactLoading
            type={"spinningBubbles"}
            color="#FDCE29"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <>
          {children}
          <Cart />
        </>
      )}
      <div className="w-full h-[5rem] bg-cover bg-background filter blur-xl fixed -bottom-10"></div>
    </div>
  );
};

export default Layout;
