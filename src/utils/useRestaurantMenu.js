import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`/.netlify/functions/menu?resId=${resId}`);
        const json = await res.json();
        setMenuData(json?.data);
      } catch (err) {
        console.error("useRestaurantMenu fetch error:", err);
      }
    };

    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  return menuData;
};

export default useRestaurantMenu;
