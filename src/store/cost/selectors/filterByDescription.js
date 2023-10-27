import { useSelector } from "react-redux";

const useFilterByDescription = (keyword) => {
  const costs = useSelector((state) => state.costs);
  return costs.filter((item) =>
    item.description.toLowerCase().includes(keyword.toLowerCase()),
  );
};

export default useFilterByDescription;
