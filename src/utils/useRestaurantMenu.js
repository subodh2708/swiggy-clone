// utils/useRestaurantMenu.js
import { useEffect, useState } from "react";

function useRestaurantMenu(resId) {
  const [restaurant, setRestaurant] = useState(null);
  const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `/.netlify/functions/menu?restaurantId=${resId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant menu");
      }

      const json = await response.json();

      // extract restaurant info
      const restaurantInfo =
        json?.data?.cards?.find((card) => card?.card?.card?.info)?.card?.card
          ?.info || null;

      // extract menu sections (categories)
      const menuItems =
        json?.data?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards || [];

      setRestaurant(restaurantInfo);
      setMenuSections(menuItems);
    } catch (err) {
      console.error("useRestaurantMenu fetch error:", err);
      setRestaurant(null);
      setMenuSections([]);
    }
  };

  return [restaurant, menuSections];
}

export default useRestaurantMenu;
