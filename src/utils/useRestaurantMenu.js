import { useEffect, useState } from "react";

import { MENU_API } from "./constants";

function useRestaurantMenu(resid) {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(MENU_API + resid);
    const json = await data.json();

    const restaurantData = json?.data?.cards
      ?.map((c) => c?.card?.card?.info)
      .filter(Boolean)[0];

    const menuCards = json?.data?.cards?.find((card) => card?.groupedCard);
    const menu = menuCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (item) => item.card?.card?.itemCards
    );
    setRestaurant(restaurantData);
    setMenuItems(menu.card?.card?.itemCards);
  }

  return [restaurant, menuItems];
}

export default useRestaurantMenu;
