function Item({ menuItem }) {
  const info = menuItem.card?.info;

  if (!info) return null;

  return (
    <div className="border-b py-3">
      <h3 className="font-semibold text-gray-800">{info.name}</h3>
      <p className="text-green-600 font-medium">
        ₹{info.price / 100 || info.defaultPrice / 100}
      </p>
      {info.description && (
        <p className="text-gray-500 text-sm mt-1">{info.description}</p>
      )}
    </div>
  );
}

export default Item;
