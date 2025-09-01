import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantsList, setResturantsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7855384&lng=80.969182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    const restaurantCard = json?.data?.cards?.find(
      (el) => el?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResturantsList(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  if (!resturantsList.length) {
    return <Shimmer />;
  }

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
