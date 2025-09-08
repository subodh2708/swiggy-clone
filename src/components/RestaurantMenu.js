import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import MenuItems from "./MenuItems";

function RestaurantMenu() {
  const { resid } = useParams();
  const [restaurant, menuSections] = useRestaurantMenu(resid);

  const [openIndex, setOpenIndex] = useState(null);

  if (restaurant === null) {
    return <Shimmer />;
  }

  return (
    <div className="px-4 py-6 flex justify-center">
      <div className="w-full max-w-2xl">
        {/* 🍴 Restaurant Info */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            {restaurant.name}
          </h1>
          <p className="text-gray-500 text-sm mb-1">
            {restaurant.cuisines.join(", ")}
          </p>
          <p className="text-gray-700 font-medium">
            💰 {restaurant.costForTwoMessage}
          </p>
        </div>

        {/* 📋 Menu Sections */}
        <div className="space-y-4">
          <MenuItems
            menuSections={menuSections}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
