import { CDN_URL } from "../utils/constants";

function Item({ menuItem }) {
  const info = menuItem.card?.info;
  if (!info) return null;

  return (
    <div className="border-b py-4 flex justify-between items-start gap-4">
      {/* Left side - Text */}
      <div className="flex-1 pr-2 max-w-[70%]">
        <h3 className="font-semibold text-gray-800">{info.name}</h3>
        <p className="text-green-600 font-medium">
          ₹{info.price / 100 || info.defaultPrice / 100}
        </p>
        {info.description && (
          <p className="text-gray-500 text-sm mt-1 break-words overflow-hidden text-ellipsis max-h-16">
            {info.description}
          </p>
        )}
      </div>

      {/* Right side - Image with button overlay */}
      {info.imageId && (
        <div className="relative w-28 h-24">
          <img
            src={CDN_URL + info.imageId}
            alt={info.name}
            className="w-full h-full object-cover rounded-md shadow-sm"
          />
          <button className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-green-600 border border-green-600 rounded-md text-xs font-semibold shadow-md hover:shadow-lg transition">
            ADD +
          </button>
        </div>
      )}
    </div>
  );
}

export default Item;
