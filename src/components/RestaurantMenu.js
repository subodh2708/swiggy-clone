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
    <div>
      <h1>{restaurant.name}</h1>
      <h3>
        {restaurant.cuisines.join(", ")} - {restaurant.costForTwoMessage}
      </h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} -Rs.
            {item.card?.info?.price / 100 ||
              item.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
