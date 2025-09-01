import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

function RestaurantMenu() {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async function () {
    const data = await fetch(MENU_API + resid);

    const json = await data.json();

    const restaurantData = json?.data?.cards?.find(
      (item) => item?.card?.card?.info
    );
    // const menuItems = json?.data?.cards?.find((item) =>
    //   item.groupedCard?.cardGroupMap?.REGULAR?.cards?.find((el) =>
    //     el.card?.card?.itemCards?.find((el) => el.card.info)
    //   )
    // );

    const menuCards = json?.data?.cards?.find((card) => card?.groupedCard);
    const menu = menuCards?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (item) => item.card?.card?.itemCards
    );
    setRestaurant(restaurantData?.card?.card?.info);
    setMenuItems(menu.card?.card?.itemCards);
  };

  if (restaurant === null) {
    return <Shimmer />;
  }
  console.log(menuItems);
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h3>
        {restaurant.cuisines.join(", ")} - {restaurant.costForTwoMessage}
      </h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} -Rs.
            {item.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
