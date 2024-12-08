import React, { useEffect, useState } from "react";
import "./assets/styles/styles.css";
import AppRouter from "./AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { loadItem } from "./store/actions/items.actions";

const App = () => {
  const [items, setItems] = useState(null);

  const value = useSelector((state) => state.itemModule.items);

  console.log("value:", value);
  const dispatch = useDispatch();

  useEffect(() => {
    getItems();
  }, [items]);

  const getItems = async () => {
    dispatch(loadItem());
  };

  if (!value) return <div>Loading...</div>;
  return (
    <>
      <AppRouter />
    </>
  );
};
export default App;
