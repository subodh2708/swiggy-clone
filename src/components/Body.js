import ResturantCard from "./ResturantCard";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7855384&lng=80.969182&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const restaurantCard = json?.data?.cards?.find(
      (el) => el?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllResturants(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilteredRestaurantsList(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  //conditional rendering
  // if (!resturantsList.length) {
  //   return <Shimmer />;
  // }

  return filteredRestaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            className="search-text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="btn-search"
            onClick={() => {
              console.log(searchText);
              const filteredList = allResturants.filter((restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurantsList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter"
          onClick={() => {
            const newResturantList = allResturants.filter(
              (resturant) => resturant.info.avgRating > 4.5
            );
            setFilteredRestaurantsList(newResturantList);
          }}
        >
          Top Resturants
        </button>
      </div>
      <div className="resturant-container">
        {filteredRestaurantsList.map((resturant) => (
          <ResturantCard restData={resturant} key={resturant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
