import React, { useContext, useEffect, useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";
import { CartContext } from "../../storage/cart-context";
import { useNavigate } from "react-router-dom";

function Confirmation() {
  const { cart, clearCart } = useContext(CartContext);
  const [showProcessing, setShowProcessing] = useState(true);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, product) => {
    const productPrice = (product.price - product.discount) * product.quantity;
    return total + productPrice;
  }, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProcessing(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const finish = () => {
    clearCart();
    navigate("/NXBOStore");
  };

  return (
    <div className="lg:ps-28 text-gray-300">
      {showProcessing ? (
        <div className="flex flex-col my-52 justify-center items-center">
          <h2 className="uppercase text-2xl ">Processing your information</h2>
          <RiLoader4Fill className="animate-spin text-orange-600 text-5xl" />
        </div>
      ) : (
        <div className="flex flex-col gap-8 my-52 justify-center items-center">
          <h2 className="text-2xl font-bold text-center">
            Done! We have confirmed your purchase
          </h2>
          <p className="text-xl">Here is what you bought</p>
          <ul className="flex flex-col gap-4 bg-zinc-900 p-8 rounded-lg">
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - $ {item.price} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold">Final price: {totalPrice}</h3>
          <button
            onClick={finish}
            className="bg-orange-500 text-zinc-900 font-semibold p-3 rounded-xl"
          >
            Back to store
          </button>
        </div>
      )}
    </div>
  );
}

export default Confirmation;
