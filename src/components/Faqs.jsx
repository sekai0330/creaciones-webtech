import { useState } from "react"
import { faqs } from "../constants";

export function Faqs ( ) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return(
        <div>
            <section className="max-w-screen-xl px-5 md:px-0 flex flex-col items-center justify-center lg:justify-between mx-auto md:w-5/6 lg:w-5/6 py-3 md:pl-0 mt-20">
                <h2 className="textodegradado text-3xl font-extrabold py-2 [text-wrap:balance]">Soluciona tus Dudas</h2>
            
                <div className="mt-10 w-full">
                  {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                      <h2
                        id={`accordion-collapse-heading-${index}`}
                        className={`flex items-center justify-between px-5 py-4 font-medium rtl:text-right text-white border border-[#49F992] border-opacity-50 rounded-2xl hover:bg-[#001308] cursor-pointer ${
                          activeIndex === index ? 'bg-[#001308] rounded-b-none' : ''
                        }`}
                        onClick={() => handleToggle(index)}
                        aria-expanded={activeIndex === index}
                        aria-controls={`accordion-collapse-body-${index}`}
                      >
                        <span>{faq.question}</span>
                        <svg
                          data-accordion-icon
                          className={`w-3 h-3 shrink-0 transition-transform ${
                            activeIndex === index ? '' : 'rotate-180'
                          }`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5 5 1 1 5"
                          />
                        </svg>
                      </h2>
                      <div
                        id={`accordion-collapse-body-${index}`}
                        className={` text-[#92A7AA] ${
                          activeIndex === index ? 'block border border-[#49F992] border-opacity-30 rounded-b-2xl' : 'hidden'
                        }`}
                        aria-labelledby={`accordion-collapse-heading-${index}`}
                      >
                        <div className="px-5 py-4 ">
                          <p className="mb-2 text-[#92A7AA]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </section>
        </div>
    )
}