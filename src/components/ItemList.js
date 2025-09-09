// components/ItemList.js
import Item from "./Item";

function ItemList({ item }) {
  const menuArray = item?.card?.card?.itemCards ?? [];
  const title = item?.card?.card?.title ?? "Menu";
  const count = menuArray.length;

  return (
    <div className="space-y-3">
      <div className="text-sm text-gray-600">
        {title} · {count} items
      </div>
      <div className="space-y-3">
        {menuArray.map((food) => (
          <Item menuItem={food} key={food?.card?.info?.id || Math.random()} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
