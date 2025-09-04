import Item from "./Item";

function ItemList({ category }) {
  const menuItems = category?.card?.card?.itemCards || [];

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      {/* Category Header */}
      <div className="flex justify-between items-center mb-3">
        <div className="font-bold text-lg">
          {category.card?.card?.title}
          <span className="text-gray-500 text-sm ml-2">
            ({menuItems.length})
          </span>
        </div>
        <span className="cursor-pointer">⬇️</span>
      </div>

      {/* Items */}
      <div className="space-y-3">
        {menuItems.map((menuItem) => (
          <Item key={menuItem.card?.info?.id} menuItem={menuItem} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
