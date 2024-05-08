import { useState } from "react";
import { faq } from "../shared/types";
import { GeneralFaqQuestions } from "../shared/data";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Faq = () => {
  const [toggle, setToggle] = useState(0);
  const toggleContent = (index: number) => {
    setToggle(index);
  };

  return (
    <section className=" w-full py-8  md:py-10 bg-gray-800 mt-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-lg flex flex-col gap-10">
        {/* Heading */}
        <h3 className="text-4xl font-light lg:text-center text-white">
          HAVE
          <span className="font-bold"> QUESTIONS? </span>
        </h3>

        <div>
          {/* FAQs */}
          {GeneralFaqQuestions.map((item: faq, index: number) => (
            <div
              key={item.id}
              className={`transition-all my-2  rounded-lg duration-200 py-2 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 ${
                toggle === item.id ? "open" : ""
              }`}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleContent(index)}
              >
                <span className="flex text-base md:text-lg font-semibold text-black text-left">
                  {item.question}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    toggle === item.id ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  toggle === index ? "" : "hidden"
                } text-sm md:text-base px-4 pb-5 sm:px-6 sm:pb-6 text-left`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}

          {/* lower bottom */}
          <p className="text-center  textbase mt-9 text-white flex justify-center gap-4 items-center text-lg">
            Created by Sid with ❤️ | Find me on:
            <a
              href="twitter.com/sidtalesara"
              title="Twitter"
              className="font-medium  transition-all duration-200 hover:text-gray-200  hover:underline"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="github.com/sid-talesara"
              title="Twitter"
              className="font-medium  transition-all duration-200 hover:text-gray-200  hover:underline"
            >
              <FaGithub />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
