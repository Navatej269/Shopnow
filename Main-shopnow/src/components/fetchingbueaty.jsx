import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { bueatyActions } from "../../store/bueatyslice";
let Fetchingbueaty = () => {
  let fetchstatus = useSelector((store) => store.fetchstatus);
  let dispatch = useDispatch();
  console.log(fetchstatus);
  useEffect(() => {
    if (fetchstatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://shopnow-0p7s.onrender.com/bueaty", { signal })
      .then((res) => res.json())
      .then(({ bueaty }) => {
        dispatch(bueatyActions.addinitialitems(bueaty));
      });

    return () => {
      controller.abort();
    };
  }, [fetchstatus]);

  return <></>;
};
export default Fetchingbueaty;
