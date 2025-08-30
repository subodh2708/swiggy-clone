import { CDN_URL } from "../utils/constants";
const ResturantCard = ({ restData }) => {
  return (
    <div className="resturant-card">
      <img
        className="resturant-img"
        src={CDN_URL + restData.info.cloudinaryImageId}
      />
      <h3>{restData.info.name}</h3>
      <h4>{restData.info.cuisines.join(", ")}</h4>
      <h4>{restData.info.avgRating} ratings</h4>
      <h4>{restData.info.sla.deliveryTime} mins</h4>
    </div>
  );
};

export default ResturantCard;
