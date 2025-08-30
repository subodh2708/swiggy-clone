import ResturantCard from "./ResturantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resturantsList, setResturantsList] = useState(restList);
  return (
    <div>
      <button
        className="filter"
        onClick={() => {
          const newResturantList = resturantsList.filter(
            (resturant) => resturant.info.avgRating > 4.3
          );
          setResturantsList(newResturantList);
        }}
      >
        Top Resturants
      </button>
      <div className="resturant-container">
        {resturantsList.map((resturant) => (
          <ResturantCard restData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
