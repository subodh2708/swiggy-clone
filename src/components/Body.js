import ResturantCard, { withOpenLabel } from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantOpenCard = withOpenLabel(ResturantCard);

  console.log(allResturants);

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

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-500 mt-10">
        Looks like you are offline, please check your internet connection
      </h1>
    );
  }

  return filteredRestaurantsList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="px-8 py-6">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
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
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
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
      <div className="grid grid-cols-4 gap-6">
        {filteredRestaurantsList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info?.isOpen ? (
              <RestaurantOpenCard restData={restaurant} />
            ) : (
              <ResturantCard restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
