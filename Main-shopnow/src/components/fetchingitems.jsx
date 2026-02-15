import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { itemActions } from "../../store/itemslise";
let Fetchingitems = () => {
  let fetchstatus = useSelector((store) => store.fetchstatus);
  let dispatch = useDispatch();
  console.log(fetchstatus);
  useEffect(() => {
    if (fetchstatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://shopnow-0p7s.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemActions.addinitialitems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchstatus]);

  return <></>;
};
export default Fetchingitems;
