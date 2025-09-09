// utils/useRestaurantMenu.js
import { useEffect, useState } from "react";
import { MENU_API } from "./constants"; // keep this path if constants is in the same utils folder

function useRestaurantMenu(resid) {
  const [restaurant, setRestaurant] = useState(null);
  const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    if (!resid) return;
    const controller = new AbortController();

    async function fetchData() {
      try {
        // NOTE: use MENU_API + resid (menu endpoint). If you proxy via Netlify function,
        // change to `/.netlify/functions/menu?resId=${resid}`.
        const res = await fetch(MENU_API + resid, {
          signal: controller.signal,
        });
        const json = await res.json();

        // Find restaurant info (robust)
        const restaurantData =
          json?.data?.cards?.find((c) => c?.card?.card?.info)?.card?.card
            ?.info ?? null;

        // Find grouped menu cards (REGULAR -> cards)
        const menuCards = json?.data?.cards?.find((card) => card?.groupedCard);
        const menu = menuCards?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

        setRestaurant(restaurantData);
        setMenuSections(menu);
      } catch (error) {
        if (error.name === "AbortError") return;
        console.error("useRestaurantMenu fetch error:", error);
        setRestaurant(null);
        setMenuSections([]);
      }
    }

    fetchData();
    return () => controller.abort();
  }, [resid]);

  return [restaurant, menuSections];
}

export default useRestaurantMenu;
