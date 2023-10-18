import React, { useContext, useState } from "react";
import { Input } from "../../components/shared";
import { CartContext } from "../../storage/cart-context";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { BiLinkExternal } from "react-icons/bi";
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCreditCard,
} from "react-icons/fa6";
import { addDoc, collection, updateDoc, doc, getDoc } from "firebase/firestore";
import db from "../../database/firebase";

function Checkout() {
  const [validName, setValidName] = useState(true);
  const [validLastName, setValidLastName] = useState(true);
  const [validId, setValidId] = useState(true);
  const [validPostal, setValidPostal] = useState(true);
  const [validAddress, setValidAddress] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [cardType, setCardType] = useState("debit");
  const [cardBrand, setCardBrand] = useState("CARD");
  const [cardNumber, setCardNumber] = useState("XXXX XXXX XXXX XXXX");
  const [cardHolder, setCardHolder] = useState("YOUR CARDS NAME");
  const [expMonth, setExpMonth] = useState("XX");
  const [expYear, setExpYear] = useState("XX");
  const [cvvCode, setCvvCode] = useState("XXX");
  const [isCvvFlipped, setIsCvvFlipped] = useState(false);
  const [installments, setInstallments] = useState(1);
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalDiscount = cart.reduce((total, product) => {
    return total + product.discount;
  }, 0);

  const totalPrice = cart.reduce((total, product) => {
    const productPrice = (product.price - product.discount) * product.quantity;
    return total + productPrice;
  }, 0);

  const installmentAmount = (totalPrice / installments).toFixed(2);

  const handleValidName = (e) => {
    let value = e.target.value;
    setValidName(value);
    if (validName === "") {
      setValidName(false);
    }
  };

  const handleValidLastName = (e) => {
    let value = e.target.value;
    setValidLastName(value);
    if (validLastName === "") {
      setValidLastName(false);
    }
  };

  const handleValidId = (e) => {
    let value = e.target.value;
    setValidId(value);
    if (validId === "") {
      setValidId(false);
    }
  };

  const handleValidPostal = (e) => {
    let value = e.target.value;
    setValidPostal(value);
    if (validPostal === "") {
      setValidPostal(false);
    }
  };

  const handleValidAddress = (e) => {
    let value = e.target.value;
    setValidAddress(value);
    if (validAddress === "") {
      setValidAddress(false);
    }
  };

  const handleValidEmail = (e) => {
    let value = e.target.value;
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    setValidEmail(value);
    if (!emailRegex.test(value)) {
      setValidEmail(value);
    } else {
      //
    }
  };

  const handleCardType = (e) => {
    let value = e.target.value;
    setCardType(value);
    if (cardType === "debit") {
      setInstallments(1);
    }
  };

  const handleCardNumber = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    value = value.slice(0, 16);

    const cardBrand = getCardType(value);

    setCardBrand(cardBrand);

    const formattedValue = formatCardNumber(value, cardBrand);

    setCardNumber(formattedValue);

    if (value === "") {
      setCardNumber("XXXX XXXX XXXX XXXX");
      setCardBrand("CARD");
    }
  };

  const getCardType = (value) => {
    if (/^4/.test(value)) {
      return "visa";
    }
    if (/^5/.test(value)) {
      return "mastercard";
    }
    if (/^3/.test(value)) {
      return "amex";
    }
    return "CARD";
  };

  const formatCardNumber = (value, cardType) => {
    let formattedValue = value;
    switch (cardType) {
      case "visa":
      case "mastercard":
        formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
        break;
      case "amex":
        formattedValue = value.replace(/(\d{4})(\d{6})(?=\d)/, "$1 $2 ");
        break;
      default:
        break;
    }
    return formattedValue;
  };

  const handleCardHolder = (e) => {
    let value = e.target.value;
    setCardHolder(value);
    if (value === "") {
      setCardHolder("YOUR CARDS NAME");
    }
  };

  const handleExpMonth = (e) => {
    let value = e.target.value;
    if (/^[1-9]$|^[0-1][0-2]$/.test(value)) {
      setExpMonth(value);
    } else {
      setExpMonth("XX");
    }
  };

  const handleExpYear = (e) => {
    let value = e.target.value;
    const currentYear = new Date().getFullYear() % 100;
    if (/^\d{2}$/.test(value) && parseInt(value, 10) >= currentYear) {
      setExpYear(value);
    } else {
      setExpYear("XX");
    }
  };

  const handleCvvCode = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    setCvvCode(value);
    if (value === "") {
      setCvvCode("XXX");
    }
  };

  const handleInstallments = (e) => {
    let value = e.target.value;
    setInstallments(value);
  };

  const handlePay = async () => {
    const orderData = {
      firstName: validName,
      lastName: validLastName,
      ID: validId,
      postal: validPostal,
      address: validAddress,
      email: validEmail,

      products: cart.map((product) => ({
        productId: product.id,
        productName: product.title,
        quantity: product.quantity,
      })),
    };

    const ordersRef = collection(db, "Orders");
    const newOrder = await addDoc(ordersRef, orderData);

    for (const product of cart) {
      const productId = product.id;
      const productRef = doc(db, "products", productId);
      const productSnapshot = await getDoc(productRef);
      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        const newStock = productData.stock - product.quantity;

        await updateDoc(productRef, { stock: newStock });
      }
    }

    console.log("Orden creada con exito");
  };

  return (
    <div className="lg:pl-28 grid ">
      <Link onClick={() => navigate(-1)} className="relative h-16 lg:h-0 w-4">
        <RiArrowLeftSLine className="absolute lg:fixed left-4 top-4 lg:left-32 p-2 box-content text-gray-300 bg-zinc-900 rounded-full text-xl" />
      </Link>
      <div className="place-self-center lg:mt-6">
        <div className="flex flex-col bg-zinc-900 text-gray-300 rounded-xl py-6 lg:px-4 w-96	lg:w-full">
          <legend className="text-3xl font-bold text-start mb-4 ps-4 lg:ps-0">
            Checkout
          </legend>
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-4 px-4 lg:px-0">
              <div className="flex flex-col lg:flex-row gap-4 ">
                <div className="flex flex-col">
                  <Input
                    label={"First name:"}
                    labelFor={"firstname"}
                    name={"firstname"}
                    type={"text"}
                    optional={false}
                    onChange={handleValidName}
                  />
                  <p
                    className={`${
                      !validName ? `text-red-500 uppercase text-xs` : `hidden`
                    }`}
                  >
                    Please enter a name
                  </p>
                </div>
                <div className="flex flex-col">
                  <Input
                    label={"Last name:"}
                    labelFor={"lastname"}
                    name={"lastname"}
                    type={"text"}
                    optional={false}
                    onChange={handleValidLastName}
                  />
                  <p
                    className={`${
                      !validLastName
                        ? `text-red-500 uppercase text-xs`
                        : `hidden`
                    }`}
                  >
                    Please enter a lastname
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div>
                  <Input
                    label={"ID:"}
                    labelFor={"id"}
                    name={"id"}
                    type={"text"}
                    customStyle={"w-full"}
                    optional={false}
                    onChange={handleValidId}
                  />
                  <p
                    className={`${
                      !validId ? `text-red-500 uppercase text-xs` : `hidden`
                    }`}
                  >
                    Please enter your ID
                  </p>
                </div>
                <div>
                  <Input
                    label={"Postal code:"}
                    labelFor={"postal"}
                    name={"postal"}
                    type={"text"}
                    customStyle={"w-full"}
                    optional={false}
                    onChange={handleValidPostal}
                  />
                  <p
                    className={`${
                      !validPostal ? `text-red-500 uppercase text-xs` : `hidden`
                    }`}
                  >
                    Please enter your postal code
                  </p>
                </div>
              </div>
              <Input
                label={"Shipping address:"}
                labelFor={"addres"}
                name={"address"}
                type={"address"}
                customStyle={"lg:w-96"}
                optional={false}
                onChange={handleValidAddress}
              />
              <p
                className={`${
                  !validAddress ? `text-red-500 uppercase text-xs` : `hidden`
                }`}
              >
                Please enter your address
              </p>
              <div className="flex flex-col lg:flex-row gap-4">
                <Input
                  label={"Phone number:"}
                  labelFor={"phone"}
                  name={"phone"}
                  type={"tel"}
                />
                <div className="flex flex-col">
                  <Input
                    label={"E-mail:"}
                    labelFor={"email"}
                    name={"email"}
                    type={"text"}
                    optional={false}
                    onBlur={handleValidEmail}
                  />
                  <p
                    className={`${
                      !validEmail ? `text-red-500 uppercase text-xs` : `hidden`
                    }`}
                  >
                    Please enter a valid email
                  </p>
                </div>
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
              <h3>Shipping: Free</h3>
              <h3 className="text-red-500">Discount: -{totalDiscount}%</h3>
              <h3 className="text-3xl text-white font-bold bg-gradient-to-r from-orange-500 to-red-500 px-2 py-1 rounded-lg">
                Total: ${totalPrice}
              </h3>
              <h4
                className={`${
                  cardType === "credit" ? `font-semibold text-sm` : `hidden`
                }`}
              >
                Payments: {installments} x {installmentAmount}
              </h4>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            <div className="">
              <legend className="text-2xl font-bold mb-4 ps-4 lg:ps-0">
                Billing
              </legend>
              <div className="flex flex-col gap-4 px-4 lg:px-0">
                <form className="flex items-center gap-4">
                  <legend className="font-semibold text-lg">Card type:</legend>
                  <p>Debit:</p>
                  <Input
                    name={"cardType"}
                    type={"radio"}
                    value={"debit"}
                    checked={cardType === "debit"}
                    onChange={handleCardType}
                  />
                  <p>Credit:</p>
                  <Input
                    name={"cardType"}
                    type={"radio"}
                    value={"credit"}
                    checked={cardType === "credit"}
                    onChange={handleCardType}
                    maxLength={"16"}
                  />
                </form>
                <div>
                  <form className="flex flex-col gap-4">
                    <Input
                      name={"cardnumber"}
                      type={"text"}
                      placeholder={"CARD NUMBER"}
                      onChange={handleCardNumber}
                      maxLength="16"
                    />

                    <Input
                      name={"cardname"}
                      type={"text"}
                      placeholder={"CARDHOLDER NAME"}
                      onChange={handleCardHolder}
                    />
                  </form>
                </div>
                <form className="flex flex-row lg:gap-4 lg:px-0 ">
                  <Input
                    customStyle={"w-3/4 lg:w-full text-center self-center"}
                    name={"month"}
                    type={"text"}
                    placeholder={"MM"}
                    onChange={handleExpMonth}
                    maxLength="2"
                  />
                  <Input
                    customStyle={"w-3/4 lg:w-full text-center self-center"}
                    name={"year"}
                    type={"text"}
                    placeholder={"YY"}
                    onChange={handleExpYear}
                    maxLength="2"
                  />
                  <Input
                    customStyle={"w-3/4 lg:w-full text-center self-center"}
                    name={"cvv"}
                    type={"text"}
                    placeholder={"CVV"}
                    onChange={handleCvvCode}
                    maxLength="3"
                    onSelect={() => setIsCvvFlipped(true)}
                    onBlur={() => setIsCvvFlipped(false)}
                  />
                </form>
                {cardType === "credit" ? (
                  <form className="flex items-center justify-between mt-4">
                    <h3 className="font-bold">Monthly Payments:</h3>
                    <div className="flex items-center justify-between w-96">
                      <p>1 Payment</p>
                      <Input
                        name={"installment"}
                        type={"radio"}
                        checked={installments === 1}
                        value={1}
                        onChange={handleInstallments}
                      />
                      <p>3 Payments</p>
                      <Input
                        name={"installment"}
                        type={"radio"}
                        value={3}
                        onChange={handleInstallments}
                      />
                      <p>6 Payments</p>
                      <Input
                        name={"installment"}
                        type={"radio"}
                        value={6}
                        onChange={handleInstallments}
                      />
                    </div>
                  </form>
                ) : (
                  <div />
                )}
              </div>
              <div className="flex justify-start ps-4 lg:ps-0 gap-2 lg:gap-0 lg:justify-evenly lg:w-1/4 pt-2 text-5xl opacity-50">
                <FaCcVisa />
                <FaCcAmex />
                <FaCcMastercard />
              </div>
              <div className="w-96 mt-4">
                <p className="text-xs text-gray-300/50">
                  *By filling out this form you agree that your personal data
                  provided to NXBO will be used exclusively for the purpose of
                  collecting payment for the products and services provided by
                  the company. And you understand that this data will not be
                  used for any other purpose without my explicit consent.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center py-4 mb-24 lg:mb-4 px-4">
              {isCvvFlipped === false ? (
                <div
                  className={`${
                    cardBrand === "CARD"
                      ? "w-80 h-52 lg:w-96 lg:h-56 bg-gray-600 opacity-50 text-white rounded-xl p-6 drop-shadow-xl"
                      : "w-80 h-52 lg:w-96 lg:h-56 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 drop-shadow-xl"
                  }`}
                >
                  <div className="flex justify-end text-5xl pb-1">
                    {cardBrand === "CARD" && <FaCreditCard />}
                    {cardBrand === "visa" && <FaCcVisa />}
                    {cardBrand === "mastercard" && <FaCcMastercard />}
                    {cardBrand === "amex" && <FaCcAmex />}
                  </div>
                  <div className="ps-4 pb-4 pe-4 pt-0">
                    <div className="flex items-center justify-between">
                      <FcSimCardChip className="text-5xl" />
                      <LuNfc className="text-2xl lg:text-3xl" />
                    </div>
                    <p className="text-lg lg:text-xl drop-shadow-md">
                      {cardNumber}
                    </p>
                    <p className="text-end text-sm lg:text-base drop-shadow-md">
                      {expMonth}/{expYear}
                    </p>
                    <p className="text-sm lg:text-base drop-shadow-md">
                      {cardHolder.toUpperCase()}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className={`${
                    cardBrand === "CARD"
                      ? "w-80 h-52 lg:w-96 lg:h-56 bg-gray-600 opacity-50 text-white rounded-xl drop-shadow-xl"
                      : " w-80 h-52 lg:w-96 lg:h-56 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl drop-shadow-xl"
                  }`}
                >
                  <div className="bg-black w-full h-10 mt-4" />
                  <div className="flex items-center justify-end bg-gray-300 w-100 h-8 mx-5 mt-4 pe-2 text-black">
                    {cvvCode}
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-4 lg:flex-row items-center lg:justify-between mt-8">
                <button
                  onClick={handlePay}
                  className="px-4 py-2 lg:py-1  w-80 lg:w-44 text-center text-white font-bold rounded-lg bg-gradient-to-r from-orange-500 to-red-500"
                >
                  Pay
                </button>
                <Link
                  to={"/cart"}
                  className="px-4 py-1  w-80 lg:w-44 text-center  text-white font-bold bg-zinc-800 rounded-lg hover:bg-orange-500 focus:bg-orange-500  duration-300"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
