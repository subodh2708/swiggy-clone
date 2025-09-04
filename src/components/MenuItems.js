import ItemList from "./ItemList";

function MenuItems({ menuSections }) {
  const categories = menuSections.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="space-y-4">
      {categories.map((category) => (
        <ItemList key={category.card?.card?.title} category={category} />
      ))}
    </div>
  );
}

export default MenuItems;
