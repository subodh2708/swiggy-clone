import ResturantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  const RestaurantOpenCard = withOpenLabel(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch("/.netlify/functions/restaurants");
    const json = await data.json();

    const restaurantCard = json?.data?.cards?.find(
      (el) => el?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setFilteredRestaurants(
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
  };

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-500 mt-10">
        🚨 Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <main className="max-w-7xl mx-auto px-8 py-6">
      {/* 🔍 Search & Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Search box */}
        <div className="flex w-full md:w-2/3 gap-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            onClick={() => {
              const filteredList = allRestaurants.filter((restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex gap-3">
          <button
            className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
            onClick={() => {
              const topRated = allRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4.5
              );
              setFilteredRestaurants(topRated);
            }}
          >
            ⭐ Top Rated
          </button>
          <button
            className="px-5 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300 transition"
            onClick={() => setFilteredRestaurants(allRestaurants)}
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* Username Input */}
      <div className="flex items-center gap-3 mb-6">
        <label className="font-semibold text-gray-700">Username:</label>
        <input
          type="text"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* 🏪 Restaurant Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRestaurants.map((restaurant) => (
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
    </main>
  );
};

export default Body;
