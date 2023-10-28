import { useSelector } from "react-redux";

const useFilterByItemID = (id) => {
  const costs = useSelector((state) => state.costs);
  return costs.filter((item) => item.id === id)[0];
};

export default useFilterByItemID;
