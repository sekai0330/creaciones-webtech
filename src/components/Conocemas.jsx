import { herramientas, razones } from "../constants"


export function Conocemas () {
    return(
        <div id="conocemas" className="[background-image:url(/img/conocemassection.webp)] bg-center bg-cover bg-no-repeat">
            <section className="max-w-screen-xl px-5 md:px-0 flex flex-col items-center justify-center lg:justify-between mx-auto md:w-5/6 lg:w-5/6 py-3 md:pl-0 pt-20">
                <h2 className="textodegradado text-3xl font-extrabold py-2 [text-wrap:balance]">¿Cómo una Página Web Eleva tu Negocio al Próximo Nivel?</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    <div className="lg:w-1/2 animaciones">
                        <img src="/img/imgconocemas.webp" alt="imagen de Hero" />
                    </div>
                    <div className="lg:w-1/2">
                        <ul className="space-y-3">
                            {razones.map(razon => (
                                <li key={razon.id} className="animaciones">
                                    <p className="text-lg font-bold text-white [text-wrap:balance]">{razon.titulo}</p>
                                    <p className=" text-[#92A7AA] [text-wrap:balance]">{razon.descripcion}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 items-center mt-10">
                    <div className="lg:w-3/5 order-last lg:order-none">
                        <ul className="grid grid-cols-2 gap-10">
                            {herramientas.map(herramienta => (
                                <li key={herramienta.id} className="animaciones">
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
                    <div className="lg:w-2/5 order-first lg:order-none ">
                        <h2 className="textodegradado text-3xl font-extrabold pb-2 [text-wrap:balance] mb-3 animaciones">Todo lo esencial para hacer despegar tu sitio web</h2>
                        <div className="space-y-4 animaciones">
                            <p className="text-base text-[#92A7AA] [text-wrap:balance]">Descubre todo lo esencial para impulsar tu sitio web. Desde un diseño atractivo hasta funciones avanzadas, ofrecemos las herramientas necesarias para hacer despegar tu presencia en línea</p> 
                            <p className="text-base text-[#92A7AA] [text-wrap:balance]">Con nosotros, tu sitio web estará listo para destacar y captar la atención que merece.</p>  
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

