import { CDN_URL } from "../utils/constants";

const ResturantCard = ({ restData }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-4">
      <img
        className="w-full h-40 object-cover rounded-md mb-3"
        src={CDN_URL + restData.info.cloudinaryImageId}
        alt={restData.info.name}
      />
      <h3 className="text-lg font-semibold truncate">{restData.info.name}</h3>
      <p className="text-gray-500 text-sm truncate">
        {restData.info.cuisines.join(", ")}
      </p>
      <div className="flex justify-between text-sm mt-2 text-gray-700">
        <span>⭐ {restData.info.avgRating}</span>
        <span>{restData.info.sla.deliveryTime} mins</span>
      </div>
    </div>
  );
};

export default ResturantCard;
