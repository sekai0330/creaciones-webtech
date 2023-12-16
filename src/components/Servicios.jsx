import { paquetes } from "../constants"
import { IconWhatsapp, IconCheck16 } from "./Icons"

export function Servicios () {
    return (
        <div className="">
            <section className="max-w-screen-xl px-5 md:px-0 flex flex-col items-center justify-center lg:justify-between mx-auto md:w-5/6 lg:w-5/6 py-3 md:pl-0 mt-20">
                <h3 className="textodegradado text-3xl font-extrabold py-2 [text-wrap:balance] ">Nuestros Paquetes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7 place-content-center mt-10">
                    {paquetes.map((subs, index) => (
                        <div key={subs.id} className={`${
                            index === 1
                                ? "bg-gradient-to-br from-[#010309] to-[#001308] shadow-md shadow-[#285c28] "
                                : "bg-gradient-to-br from-[#010309] to-[#001308]"
                        } flex flex-col items-center justify-between px-9 py-4 rounded-2xl border-green-900 border border-opacity-70 `}>
                            <div>
                                <h3 className="text-center text-white font-semibold">{subs.name}</h3>
                                <p className="text-center text-3xl font-bold text-[#EDFF7D] mt-2">{subs.tipo}</p>
                                <ul className="mt-3">
                                    {subs.carateristicas.map((caracteristicas, index) => (
                                        <li key={index} className="flex items-center space-y-2 gap-3 text-[#92A7AA] text-sm [text-wrap:balance]">
                                            <div className="mt-1.5"><IconCheck16 /></div>
                                            <p>{caracteristicas}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-wrap flex-col">
                                {/* {index === 1 ? <p className="text-center text-sm bg-white p-1 rounded-lg border border-sky-600 shadow-md shadow-sky-300 uppercase font-bold mt-3">Mas Popular</p> : ''} */}
                                <p className="text-white text mt-10 mb-2 text-center">{`"${subs.precio}"`}</p>
                                <div className='p-4 md:p-0 mt-3'>
                                    <a href='' className='flex items-center justify-center gap-2 rounded-xl hover:before:bg-redborder-red-500 relative py-1.5 overflow-hidden bg-gradient-to-r from-[#EDFF7D] to-[#49F992] px-5 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#EDFF7D] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
                                        <span className='relative z-10 font-bold'>Solicitar mas informacion </span>
                                        <span className='relative z-10'><IconWhatsapp /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
        </div>
    )
}