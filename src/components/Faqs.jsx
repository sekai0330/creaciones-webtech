import { useState } from "react"
import { faqs } from "../constants";
import { IconWhatsapp } from "./Icons";

export function Faqs ( ) {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const whatsappNumber = '75331045';
    const message = `¡Hola! Tengo dudas sobre sus servicios, me podrian brindar mas informacion?`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return(
        <div id="faqs" className="">
            <section className="max-w-screen-xl px-5 md:px-0 flex flex-col items-center justify-center lg:justify-between mx-auto md:w-5/6 lg:w-5/6 md:pl-0 py-10">
                <h2 className="textodegradado text-3xl font-extrabold py-2 [text-wrap:balance]">Preguntas Frecuentes</h2>
            
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="mt-10 w-full lg:w-3/5">
                    {faqs.map((faq, index) => (
                      <div key={index} className="mb-3">
                        <h2
                          id={`accordion-collapse-heading-${index}`}
                          className={`flex items-center justify-between px-5 py-3 font-medium rtl:text-right text-white border border-[#49F992] bg-[#051b0d] border-opacity-50 rounded-2xl hover:bg-[#001308] transition-colors duration-300 cursor-pointer ${
                            activeIndex === index ? 'bg-[#051b0d] rounded-b-none ' : ''
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
                          <div className="px-5 py-2.5 ">
                            <p className=" text-[#92A7AA]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="lg:w-2/5 space-y-3 [text-wrap:balance]">
                    <h3 className="text-[#EDFF7D] text-2xl font-bold">¿Aun tienes alguna pregunta?</h3>
                    <p className="text-[#92A7AA] ">Si tienes alguna pregunta o inquietud, no dudes en contactarnos a través de WhatsApp. Estámos listos para proporcionarte respuestas rápidas y soluciones personalizadas.</p>
                    <p className="text-[#92A7AA] ">No dejes que ninguna duda te detenga, ¡estamos a solo un mensaje de distancia para hacer tu experiencia aún mejor!</p>
                    <div className="flex items-center justify-start md:justify-center lg:justify-start">
                      <div className=' md:p-0 mt-3'>
                          <a href={whatsappLink} target="_blank" rel="noreferrer" className='flex items-center justify-center gap-2 rounded-xl hover:before:bg-redborder-red-500 relative py-1.5 overflow-hidden bg-gradient-to-r from-[#EDFF7D] to-[#49F992] px-8 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#EDFF7D] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
                              <span className='relative z-10 font-bold'>Escribir al WhatsApp</span>
                              <span className='relative z-10'><IconWhatsapp /></span>
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        </div>
    )
}