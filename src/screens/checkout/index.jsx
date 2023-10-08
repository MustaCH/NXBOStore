import React, { useContext } from "react";
import { Input } from "../../components/shared";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { BiLinkExternal } from "react-icons/bi";
import { SiGooglepay, SiPaypal, SiApplepay } from "react-icons/si";
import { CartContext } from "../../storage/cart-context";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalDiscount = cart.reduce((total, product) => {
    return total + product.discount;
  }, 0);

  const totalPrice = cart.reduce((total, product) => {
    const productPrice = (product.price - product.discount) * product.quantity;
    return total + productPrice;
  }, 0);

  return (
    <div className="lg:pl-28 grid ">
      <Link onClick={() => navigate(-1)} className="relative h-16">
        <RiArrowLeftSLine className="absolute left-4 top-4 p-2 box-content text-gray-300 bg-zinc-900 rounded-full text-xl" />
      </Link>
      <div className="place-self-center">
        <div className="flex flex-col bg-zinc-900 text-gray-300 rounded-xl py-6 lg:px-4 w-96	lg:w-full">
          <legend className="text-3xl font-bold text-start mb-4 ps-4 lg:ps-0">
            Checkout
          </legend>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-4 px-4 lg:px-0">
              <div className="flex flex-col lg:flex-row gap-4 ">
                <Input
                  label={"First name:"}
                  labelFor={"firstname"}
                  name={"firstname"}
                  type={"text"}
                />
                <Input
                  label={"Last name:"}
                  labelFor={"lastname"}
                  name={"lastname"}
                  type={"text"}
                />
              </div>
              <div className="flex gap-4">
                <Input
                  label={"ID:"}
                  labelFor={"id"}
                  name={"id"}
                  type={"number"}
                  customStyle={"w-full"}
                />
                <Input
                  label={"Postal code:"}
                  labelFor={"postal"}
                  name={"postal"}
                  type={"number"}
                  customStyle={"w-full"}
                />
              </div>
              <Input
                label={"Shipping address:"}
                labelFor={"addres"}
                name={"address"}
                type={"address"}
                customStyle={"lg:w-96"}
              />
              <div className="flex flex-col lg:flex-row gap-4">
                <Input
                  label={"Phone number:"}
                  labelFor={"phone"}
                  name={"phone"}
                  type={"tel"}
                />
                <Input
                  label={"E-mail:"}
                  labelFor={"email"}
                  name={"email"}
                  type={"text"}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 text-start lg:text-end lg:justify-between text-xl mt-4 px-4">
              <h2 className="text-3xl text-white font-semibold">Summary:</h2>
              <p>Total products: {cart.length}</p>
              <Link
                to={"/cart"}
                className="text-orange-500 flex items-center gap-1 justify-start lg:justify-end"
              >
                See cart <BiLinkExternal />
              </Link>
              <h3>Shipping: $----</h3>
              <h3 className="text-red-500">Discount: -{totalDiscount}%</h3>
              <h3 className="text-3xl text-white font-bold bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 rounded-lg">
                Total: ${totalPrice}
              </h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            <div className="">
              <legend className="text-2xl font-bold mb-4 ps-4 lg:ps-0">
                Billing
              </legend>
              <div className="flex flex-col gap-4 px-4 lg:px-0">
                <div className="flex gap-4">
                  <button className="px-4 py-1  w-40 flex justify-center items-center bg-zinc-800 rounded-lg hover:bg-orange-500 focus:bg-orange-500  duration-300">
                    <SiPaypal className="text-xl drop-shadow-md" />
                  </button>
                  <button className="px-4 py-1 w-40 flex justify-center items-center bg-zinc-800 rounded-lg hover:bg-orange-500 focus:bg-orange-500  duration-300">
                    <SiGooglepay className="text-4xl drop-shadow-md" />
                  </button>
                  <button className="px-4 py-1 w-40 flex justify-center items-center bg-zinc-800 rounded-lg hover:bg-orange-500 focus:bg-orange-500 duration-300">
                    <SiApplepay className="text-4xl drop-shadow-md" />
                  </button>
                </div>
                <form className="flex items-center gap-4">
                  <legend className="font-semibold text-lg">Or use:</legend>
                  <p>Debit:</p>
                  <Input name={"debit"} type={"radio"} />
                  <p>Credit:</p>
                  <Input name={"credit"} type={"radio"} />
                </form>
                <Input
                  name={"cardnumber"}
                  type={"number"}
                  placeholder={"CARD NUMBER"}
                />
                <Input
                  name={"cardname"}
                  type={"text"}
                  placeholder={"CARDHOLDER NAME"}
                />
              </div>
              <form className="flex flex-row lg:gap-4 mt-4 lg:px-0 ">
                <Input
                  customStyle={"w-3/4 lg:w-full text-center self-center"}
                  name={"month"}
                  type={"number"}
                  placeholder={"MM"}
                />
                <Input
                  customStyle={"w-3/4 lg:w-full text-center self-center"}
                  name={"year"}
                  type={"number"}
                  placeholder={"YY"}
                />
                <Input
                  customStyle={"w-3/4 lg:w-full text-center self-center"}
                  name={"cvv"}
                  type={"number"}
                  placeholder={"CVV"}
                />
              </form>
              <div className="w-96 mt-8">
                <p className="text-xs text-gray-600">
                  *By filling out this form you agree that your personal data
                  provided to NXBO will be used exclusively for the purpose of
                  collecting payment for the products and services provided by
                  the company. And you understand that this data will not be
                  used for any other purpose without my explicit consent.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-4 mb-24 lg:mb-4 px-4">
              <div className="w-80 h-52 lg:w-96 lg:h-56 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 drop-shadow-xl">
                <p className="text-end text-xl font-bold">CARD</p>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <FcSimCardChip className="text-5xl" />
                    <LuNfc className="text-2xl lg:text-3xl" />
                  </div>
                  <p className="text-lg lg:text-xl drop-shadow-md">
                    XXXX XXXX XXXX XXXX
                  </p>
                  <p className="text-end text-sm lg:text-base drop-shadow-md">
                    XX/XX
                  </p>
                  <p className="text-sm lg:text-base drop-shadow-md">
                    YOUR CARDS NAME
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 lg:flex-row items-center lg:justify-between mt-8">
                <button className="px-4 py-2 lg:py-1  w-80 lg:w-44 text-center text-white font-bold rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                  Pay
                </button>
                <button className="px-4 py-1  w-80 lg:w-44 text-center  text-white font-bold bg-zinc-800 rounded-lg hover:bg-orange-500 focus:bg-orange-500  duration-300">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
