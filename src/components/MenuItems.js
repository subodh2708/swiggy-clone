import ItemList from "./ItemList";

function MenuItems({ menuSections, openIndex, setOpenIndex }) {
  const categories = menuSections.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="space-y-4">
      {categories.map((category, index) => (
        <ItemList
          key={category.card?.card?.title}
          category={category}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default MenuItems;
