// components/MenuItems.js
import ItemList from "./ItemList";

function MenuItems({ menuSections = [], openIndex, setOpenIndex }) {
  // Filter only ItemCategory sections (typical Swiggy shape)
  const categories = (menuSections || []).filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  if (!categories.length) {
    return (
      <div className="text-center text-gray-500 py-10">No menu available.</div>
    );
  }

  return (
    <div className="space-y-4">
      {categories.map((category, idx) => {
        const title = category?.card?.card?.title || `Category ${idx + 1}`;
        const count = category?.card?.card?.itemCards?.length ?? 0;
        const isOpen = openIndex === idx;

        return (
          <div
            key={title + idx}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
            >
              <div>
                <div className="font-medium text-gray-800">{title}</div>
                {category?.card?.card?.description && (
                  <div className="text-sm text-gray-500">
                    {category.card.card.description}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-sm text-gray-500">{count}</div>
                <div className="text-xl select-none">{isOpen ? "−" : "+"}</div>
              </div>
            </button>

            {/* collapsible section */}
            <div
              className={`px-4 pb-4 transition-[max-height] duration-300 overflow-hidden ${
                isOpen ? "max-h-[2000px]" : "max-h-0"
              }`}
            >
              {/* Only render list when section exists */}
              {category?.card?.card?.itemCards?.length ? (
                <div className="mt-3">
                  <ItemList item={category} />
                </div>
              ) : (
                <div className="py-3 text-sm text-gray-500">No items</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
