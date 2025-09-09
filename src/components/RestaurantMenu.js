// src/components/RestaurantMenu.js
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);

  const [openIndex, setOpenIndex] = useState(null);

  if (!menuData) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards?.[2]?.card?.card?.info || {};

  // Filter categories (like Recommended, Burgers, etc.)
  const categories =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Restaurant Info */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600 mb-1">{cuisines?.join(", ")}</p>
      <p className="text-gray-700 font-medium mb-6">{costForTwoMessage}</p>

      {/* Categories Accordion */}
      <div className="space-y-4">
        {categories.map((category, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={category.card.card.title}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 rounded-lg"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {category.card.card.title}
                </span>
                <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
              </button>

              {/* Accordion Body */}
              {isOpen && (
                <div className="p-4 space-y-3">
                  {category.card.card.itemCards?.map((item) => (
                    <div
                      key={item.card.info.id}
                      className="flex justify-between items-center border-b pb-2 last:border-none"
                    >
                      <div>
                        <p className="font-medium text-gray-800">
                          {item.card.info.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          ₹
                          {item.card.info.price / 100 ||
                            item.card.info.defaultPrice / 100}
                        </p>
                      </div>
                      {item.card.info.imageId && (
                        <img
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${item.card.info.imageId}`}
                          alt={item.card.info.name}
                          className="w-20 h-20 rounded-md object-cover"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
