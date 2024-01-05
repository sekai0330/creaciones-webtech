import { useState, useRef } from "react";
import { IconSendFill, IconWhatsapp } from "./Icons";
import { redes } from "../constants";
import { toast } from "react-toastify";
import emailjs  from '@emailjs/browser'

export function Formulario () {
    const form = useRef();
    const [formError,setFormError] = useState(false)
    const [formValues, setFormValues] = useState({})

    const sendEmail = (e) => {
        e.preventDefault();

        const { nombre, email, mensaje } = form.current;
        if (!nombre.value || !email.value || !mensaje.value) {
            setFormError(true);
            return;
        }

        emailjs.sendForm('service_7qh4pxf', 'template_qu40jpr', form.current, 'IYV1jTyhjv08dD_Qs')
        .then((result) => {
        toast.success("Mensaje Enviado Correctamente", {
            theme: "colored"
          });
    
          // Restablecer los valores de los campos del formulario
          setFormValues({});
          form.current.reset();
        })
        .catch((error) => {
          console.log(error.text);
        });
    };

    const handleInputChange = (e) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value
        });
    };

    const whatsappNumber = '75331045';
    const message = `¡Hola! Estoy interesado en cotizar sobre sus servicios de desarrollo web`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div id="contacto" className="[background-image:url(/img/formulario.webp)] bg-center bg-cover bg-no-repeat">
            <section className="max-w-screen-xl px-5 md:px-0 flex flex-col lg:justify-between mx-auto md:w-5/6 lg:w-5/6 md:pl-0 py-10">
                <h2 className="textodegradado text-3xl text-center font-extrabold py-2 [text-wrap:balance]">Ponte En Contacto</h2>
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className='w-full md:w-2/5 mt-10'>
                        {formError && (
                            <div className="mb-3">
                            <p className="text-red-500">Por favor, completa todos los campos del formulario.</p>
                            </div>
                        )}
                        <form ref={form} onSubmit={sendEmail}>
                            
                        <div className="mb-6">
                            <label htmlFor="nombre" className="block mb-2  font-medium text-white">Tu Nombre</label>
                            <input type="text" value={formValues.nombre || ""} onChange={handleInputChange} id="nombre" name="nombre" placeholder="Ej... Edwin Santos" className=" bg-black bg-opacity-50 border border-[#49F992] text-white rounded-lg focus:ring-[#EDFF7D] focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2  font-medium text-white">Tu Correo</label>
                            <input type="email" value={formValues.email || ""} onChange={handleInputChange} id="email" name="email" className=" bg-black bg-opacity-50 border border-[#49F992] text-white rounded-lg focus:ring-[#EDFF7D] focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" placeholder="escribetucorreo@gmail.com" required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="mensaje" className="block mb-2  font-medium text-white">Tu Mensaje</label>
                            <textarea id="mensaje" value={formValues.mensaje || ""} onChange={handleInputChange} name="mensaje" rows="4" className="bg-black bg-opacity-50 border border-[#49F992] text-white rounded-lg focus:ring-[#EDFF7D] focus:outline-none focus:ring-2  block w-full p-2.5 transition duration-300" placeholder="Ej... Cuando nos podriamos reunir " required></textarea>
                        </div>
                        <button type="submit" className="flex items-center justify-center gap-2 rounded-xl hover:before:bg-redborder-red-500 relative py-1.5 overflow-hidden bg-gradient-to-r from-[#EDFF7D] to-[#49F992] px-8 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#EDFF7D] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full">
                            <span className='relative z-10 font-bold'>Enviar</span>
                              <span className='relative z-10'><IconSendFill /></span>
                        </button>
                        </form>
                    </div>
                    <div className="md:w-3/5 mt-10 flex flex-col items-center">
                        <div className=" bg-black bg-opacity-50 border border-opacity-50 border-[#49F992] py-5 px-10 rounded-xl">
                            <div className='flex items-center gap-3 text-3xl font-semibold text-[#49F992] '>
                                <h3>WhatsApp</h3>
                                <IconWhatsapp />
                            </div>
                            <p className="text-white font-semibold pt-2">Cotiza Rapido por WhatsApp</p>
                            <p className="text-[#92A7AA]">Escribenos ahora y cotiza tu Pagina Web</p>
                            <div className="flex items-center pt-1 justify-start md:justify-center lg:justify-start">
                                <div className=' md:p-0 mt-3'>
                                    <a href={whatsappLink} target="_blank" rel="noreferrer" className='flex items-center justify-center gap-2 rounded-xl hover:before:bg-redborder-red-500 relative py-1.5 overflow-hidden bg-gradient-to-r from-[#EDFF7D] to-[#49F992] px-8 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#EDFF7D] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
                                        <span className='relative z-10 font-bold'>Escribir al WhatsApp</span>
                                        <span className='relative z-10'><IconWhatsapp /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-[#EDFF7D] text-2xl font-bold mt-10">Redes Sociales</h3>
                        <div className='mt-3'>
                            <ul className="flex flex-row space-x-2 mt-0">
                                {redes.map(red => (
                                <li key={red.id} className="p-1.5 hover:bg-green-700 transition-colors duration-300 rounded-lg" >
                                    <a href={red.link} target="_blank" rel="noreferrer">
                                    <img src={`/img/${red.image}.svg`} alt={`Logo de ${red.name}`} className="w-5 h-5"/>
                                    </a>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}