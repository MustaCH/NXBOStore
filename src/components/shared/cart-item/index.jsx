import React, { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContext } from "../../../storage/cart-context";

function CartItem({ product }) {
  const { deleteProduct } = useContext(CartContext);

  const { title, price, pic1, discount, quantity, size, id } = product;

  let finalPrice = price;

  if (discount > 0) {
    finalPrice = price - discount;
  }

  let totalPrice = finalPrice * quantity;

  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <div className="grid grid-cols-9 text-gray-300 bg-zinc-800 p-4 mb-4 rounded-xl md:w-4/5">
      <div className="col-span-6 flex items-center">
        <Link to={`/cat/:catid/${id}`}>
          <img className="w-16 h-16 rounded-full" src={pic1} alt={title} />
        </Link>
        <div className="ps-4">
          <p>{title}</p>
          <p>U$D {finalPrice}</p>
        </div>
      </div>
      <div className="col-span-3 grid grid-cols-3 gap-6">
        <div className="col-span-2 flex items-center gap-4">
          <p className="bg-zinc-500 p-2 rounded-lg">{quantity}</p>
          <p>{size === "" ? "One size" : size.toUpperCase()}</p>
          <p>U$D {totalPrice}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <button>
            <RiDeleteBin5Line
              onClick={handleDelete}
              className="text-red-500 md:w-6 md:h-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
