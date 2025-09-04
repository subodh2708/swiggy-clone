import Item from "./Item";

function ItemList({ category, isOpen, onToggle }) {
  const menuItems = category?.card?.card?.itemCards || [];

  return (
    <div className="bg-white shadow rounded-lg p-4">
      {/* Category Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <div className="font-bold text-lg">
          {category.card?.card?.title}
          <span className="text-gray-500 text-sm ml-2">
            ({menuItems.length})
          </span>
        </div>
        <span>{isOpen ? "⬆️" : "⬇️"}</span>
      </div>

      {/* Items - show only if open */}
      {isOpen && (
        <div className="mt-3 space-y-3">
          {menuItems.map((menuItem) => (
            <Item key={menuItem.card?.info?.id} menuItem={menuItem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ItemList;
