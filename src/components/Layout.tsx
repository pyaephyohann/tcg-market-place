import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { appData, fetchAppData } from "../store/slices/appSlice";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const { isInit } = useAppSelector(appData);

  useEffect(() => {
    if (!isInit) {
      dispatch(fetchAppData());
    }
  }, [isInit, dispatch]);

  return <div>{children}</div>;
};

export default Layout;
