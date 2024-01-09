import { proyects } from "../constants"

export function Experiencia () {

    return (
        <div id="experiencias" className="[background-image:url(/img/sectionproyects.webp)] bg-center bg-cover bg-no-repeat">
            <section className="max-w-screen-xl px-5 md:px-0 flex flex-col lg:justify-between mx-auto md:w-5/6 lg:w-5/6 md:pl-0 py-10">
                <h2 className="textodegradado text-3xl text-center font-extrabold py-2 [text-wrap:balance]">Nuestra Experiencia</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                    {proyects.map(proyect => (
                        <li key={proyect.id} className="flex flex-col items-center animaciones">
                            <a target="_blank" rel="noreferrer" href={proyect.link} className="hover:scale-105 transition-all duration-500">
                                <img src={`/img/${proyect.image}.webp`} alt={`imagen de proyecto ${proyect.name}`} className="h-auto w-[400px]"/>
                            </a>
                            <h3 className="text-lg font-bold text-white">{proyect.name}</h3>
                            <p className="text-[#92A7AA]">{proyect.category}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}