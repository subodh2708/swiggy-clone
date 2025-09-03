import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const { resid } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(resid);

  if (restaurant === null) {
    return <Shimmer />;
  }

  return (
    <div className="px-8 py-6">
      {/* 🍴 Restaurant Info */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
        <p className="text-gray-600 text-sm mb-1">
          {restaurant.cuisines.join(", ")}
        </p>
        <p className="text-gray-700 font-medium">
          💰 {restaurant.costForTwoMessage}
        </p>
      </div>

      {/* 📋 Menu Items */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Menu 🍽️</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const info = item.card?.info;
            return (
              <li
                key={info?.id}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition"
              >
                <span className="text-gray-800 font-medium">{info?.name}</span>
                <span className="text-green-600 font-semibold">
                  ₹{info?.price / 100 || info?.defaultPrice / 100}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default RestaurantMenu;
