import React from "react";
import { Input } from "../../components/shared";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

function Checkout() {
  return (
    <div className="lg:pl-28 grid">
      <div className="place-self-center">
        <div className="flex flex-col bg-zinc-900 text-gray-300 rounded-xl py-6 lg:px-4 w-96	lg:w-full">
          <h1 className="text-3xl font-bold text-start mb-4 ps-4 lg:ps-0">
            Checkout
          </h1>
          <div action="" className="flex flex-col gap-4 px-4 lg:px-0">
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
            <Input label={"ID:"} labelFor={"id"} name={"id"} type={"number"} />
            <Input
              label={"Postal code:"}
              labelFor={"postal"}
              name={"postal"}
              type={"number"}
            />
            <Input
              label={"Shipping addres:"}
              labelFor={"addres"}
              name={"addres"}
              type={"text"}
            />
            <div className="flex flex-col lg:flex-row gap-4">
              <Input
                label={"Phone number:"}
                labelFor={"phone"}
                name={"phone"}
                type={"number"}
              />
              <Input
                label={"E-mail:"}
                labelFor={"email"}
                name={"email"}
                type={"text"}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mt-8">
            <div className="">
              <h2 className="text-2xl font-bold mb-4 ps-4 lg:ps-0">Billing</h2>
              <div className="flex flex-col gap-4 px-4 lg:px-0">
                <Input
                  name={"addres"}
                  type={"number"}
                  placeholder={"CARD NUMBER"}
                />
                <Input
                  name={"addres"}
                  type={"text"}
                  placeholder={"CARDHOLDER NAME"}
                />
              </div>
              <div className="flex flex-row lg:gap-4 mt-4 lg:px-0 ">
                <Input
                  customStyle={
                    "rounded-lg border-0 focus:border-2 border-orange-500 text-black p-2 w-3/4 lg:w-full text-center self-center"
                  }
                  name={"month"}
                  type={"number"}
                  placeholder={"MM"}
                />
                <Input
                  customStyle={
                    "rounded-lg border-0 focus:border-2 border-orange-500 text-black p-2 w-3/4 lg:w-full text-center self-center"
                  }
                  name={"year"}
                  type={"number"}
                  placeholder={"YY"}
                />
                <Input
                  customStyle={
                    "rounded-lg border-0 focus:border-2 border-orange-500 text-black p-2 w-3/4 lg:w-full text-center self-center"
                  }
                  name={"cvv"}
                  type={"number"}
                  placeholder={"CVV"}
                />
              </div>
            </div>
            <div className="flex justify-center py-4 mb-24 lg:mb-8 px-4">
              <div className="w-80 h-52 lg:w-96 lg:h-56 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 drop-shadow-xl">
                <p className="text-end text-xl font-bold">CARD</p>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <FcSimCardChip className="text-5xl" />
                    <LuNfc className="text-2xl" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
