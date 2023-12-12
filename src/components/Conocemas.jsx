import { herramientas } from "../constants"


export function Conocemas () {
    return(
        <div className="">
            <section className="max-w-screen-xl px-5 md:px-0 flex flex-col items-center justify-center lg:justify-between mx-auto md:w-5/6 lg:w-5/6 py-3 md:pl-0">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                    <div className="lg:w-1/2">
                        <img src="/img/imghero.webp" alt="imagen de Hero" />
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="textodegradado text-3xl font-extrabold py-2 [text-wrap:balance] mb-3">Impulsa el crecimiento de tu empresa con la fuerza del internet</h2>
                        <div className="space-y-4">
                            <p className="text-base text-[#92A7AA] [text-wrap:balance]">Desata el potencial ilimitado de tu empresa con nuestra experiencia en creación de páginas web, landing pages y catálogos web. Sumérgete en el mundo digital y expande tu presencia online de manera impactante. Con un diseño cautivador y funcionalidades avanzadas, impulsaremos tu negocio hacia nuevos horizontes.</p> 
                            <p className="text-base text-[#92A7AA] [text-wrap:balance]">Aprovecha la fuerza del internet para atraer clientes, aumentar tus ventas y destacar en tu industria. ¡Convierte visitantes en clientes con soluciones web poderosas y personalizadas que harán crecer tu empresa a pasos agigantados!</p>  
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 items-center mt-20">
                    <div className="lg:w-3/5 order-last lg:order-none">
                        <ul className="grid grid-cols-2 gap-10">
                            {herramientas.map(herramienta => (
                                <li key={herramienta.id}>
                                    <div className="flex">
                                        <div className="p-4 border border-[#49F992] border-opacity-50 rounded-2xl overflow-hidden hover:scale-110 transition-all">
                                            {herramienta.image}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-bold text-white py-3 [text-wrap:balance]">{herramienta.name}</h3>
                                    <p className="text-sm text-[#92A7AA] [text-wrap:balance]">{herramienta.description}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-2/5 order-first lg:order-none">
                        <h2 className="textodegradado text-3xl font-extrabold pb-2 [text-wrap:balance] mb-3">Todo lo esencial para hacer despegar tu sitio web</h2>
                        <div className="space-y-4">
                            <p className="text-base text-[#92A7AA] [text-wrap:balance]">Descubre todo lo esencial para impulsar tu sitio web. Desde un diseño atractivo hasta funciones avanzadas, ofrecemos las herramientas necesarias para hacer despegar tu presencia en línea</p> 
                            <p className="text-base text-[#92A7AA] [text-wrap:balance]">Con nosotros, tu sitio web estará listo para destacar y captar la atención que merece.</p>  
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

