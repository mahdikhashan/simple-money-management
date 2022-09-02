import { useSelector } from "react-redux";

const useFilterByDescription = (keyword) => {
  const costs = useSelector((state) => state.costs)
  
  const filteredCosts = costs.filter((item) =>
        item.description.toLowerCase().includes(keyword.toLowerCase())
      )
  
  return filteredCosts
}

export default useFilterByDescription;