import { useState } from "react";

export const Accordion = ({ id, question, answer }) => {
  const [show, setShow] = useState();
  return (
    <div key={id}>
      <h2 id="accordion-flush-heading-1">
        <button
          onClick={() => setShow(!show)}
          type="button"
          className="text-lg flex items-center justify-between w-full py-5 font-medium text-left text-neutral-500 border-b border-neutral-400 dark:border-neutral-500 dark:text-gray-400 cursor-pointer"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span className="text-xl text-Accent dark:text-white">
            {question}
          </span>
          {!show && (
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0 dark:text-neutral-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          {show && (
            <svg
              data-accordion-icon
              className="rotate-180 w-6 h-6 shrink-0 dark:text-neutral-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </h2>
      {show && (
        <div
          id="accordion-flush-body-1"
          className=""
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-5 border-b border-neutral-400 dark:border-neutral-500">
            <p className="text-lg mb-2 text-neutral-500 dark:dark:text-neutral-500">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
