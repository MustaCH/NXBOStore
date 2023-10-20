import React from "react";
import { Input } from "../../components/shared";
import { RiSendPlane2Line } from "react-icons/ri";

function Chat() {
  return (
    <div className="lg:ps-28 mb-24 lg:mb-10">
      <h1 className="text-3xl text-gray-300 font-bold border-b-2 border-orange-500 p-8">
        Chat.
      </h1>
      <div className="flex justify-center mt-4 lg:mt-12">
        <div className="w-[90%]  bg-zinc-900 p-4 rounded-lg">
          <div className="flex justify-center items-center h-[550px] lg:h-[600px] m-0 lg:m-12 lg:mb-4 p-4 border-2 border-orange-500 rounded-lg">
            <h2 className="text-gray-300 text-lg font-semibold">
              Chat is not available at the moment 😢. Come back later!
            </h2>
            {/*<p className="text-gray-300 text-sm bg-zinc-800 p-2 rounded-lg w-fit mb-4">
              Welcome to the NXBO chatbot! 🤖❤
              <br />
              <br />
              How can i help you?
            </p>
            <div className="flex flex-col gap-2">
              <button className="text-start w-fit text-sm bg-zinc-800 border border-orange-500 rounded-lg p-2 text-gray-300">
                How can i see the measures of the clothes? 🤔📏
              </button>
              <button className="text-start w-fit text-sm bg-zinc-800 border border-orange-500 rounded-lg p-2 text-gray-300">
                Problem with my shipping 🛥📦
              </button>
              <button className="text-start w-fit text-sm bg-zinc-800 border border-orange-500 rounded-lg p-2 text-gray-300">
                Problem with payment 💵😥
              </button>
              <button className="text-start w-fit text-sm bg-zinc-800 border border-orange-500 rounded-lg p-2 text-gray-300">
                Chat with a human 🙋‍♂️
              </button>
  </div>*/}
          </div>
          <div>
            <div className="flex gap-4 justify-center items-center mt-4 lg:mt-0">
              <Input
                type={"text"}
                placeholder={"Write your message"}
                customStyle={"w-[250px] lg:w-[800px]"}
              />
              <button className="bg-orange-500 rounded-full p-2">
                <RiSendPlane2Line className=" text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
