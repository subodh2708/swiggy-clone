// components/RestaurantMenu.js
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; // adjust path if needed
import Shimmer from "./Shimmer";
import MenuItems from "./MenuItems";
import { useState } from "react";

function RestaurantMenu() {
  const { resid } = useParams();
  const [restaurant, menuSections] = useRestaurantMenu(resid);

  // track open category index for accordion
  const [openIndex, setOpenIndex] = useState(null);

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="px-4 py-6 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* restaurant header */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            {restaurant?.name}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <p className="text-gray-700 font-medium mt-2">
            {restaurant?.costForTwoMessage}
          </p>
        </div>

        {/* menu */}
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
