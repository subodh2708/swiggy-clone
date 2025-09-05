import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(items);

  if (items.length === 0) {
    return <h2 className="text-center mt-10">Your cart is empty 🛒</h2>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {items.map((item, idx) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 mb-2 border rounded"
        >
          <div className="flex items-center gap-4">
            {item.imageId && (
              <img
                src={CDN_URL + item.imageId}
                alt={item.name}
                className="w-16 h-14 object-cover rounded"
              />
            )}
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>₹{(item.price ?? item.defaultPrice) / 100}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={() => dispatch(clearCart())}
        className="mt-6 px-4 py-2 bg-gray-700 text-white rounded"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
