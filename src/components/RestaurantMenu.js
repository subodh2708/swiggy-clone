import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useState } from "react";

function RestaurantMenu() {
  const { resid } = useParams();
  const [restaurant, menuSections] = useRestaurantMenu(resid);

  // track open category index
  const [openIndex, setOpenIndex] = useState(null);

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

      {/* 📋 Menu Sections */}
      <MenuItems
        menuSections={menuSections}
        openIndex={openIndex}
        setOpenIndex={setOpenIndex}
      />
    </div>
  );
}

export default RestaurantMenu;
