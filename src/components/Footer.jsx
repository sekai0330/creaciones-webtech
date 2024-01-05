import { redes, enlaces } from "../constants"

export function Footer () {
    return (
        <footer className="[background-image:url(/img/footer.webp)] bg-center bg-cover mt-20 rounded-t-3xl">
            <section className="max-w-screen-xl mx-auto md:w-5/6 px-3 md:px-0 flex flex-col md:text-left text-center md:flex-row items-center md:items-start md:justify-between py-10 space-y-5 md:space-y-0">
                <div className="flex flex-col w-2/3 md:w-1/3 items-center md:items-start">
                    <a href='#inicio' className="flex gap-1 items-center pl-0">
                        <img src="/logo.webp" width={125} height={44} alt="Logo Creaciones Webtech" />
                    </a>
                    <p className="text-white [text-wrap:balance] mt-2 md:mt-4">Creación de Paginas Web que destacan tu presencia digital</p>
                    <ul className="flex flex-row space-x-2 mt-3">
                    {redes.map(red => (
                      <li key={red.id} className="p-1.5 hover:bg-green-700 transition-colors duration-300 rounded-lg">
                        <a href={red.link} target="_blank" rel="noreferrer">
                          <img src={`/img/${red.image}.svg`} alt={`Logo de ${red.name}`} className="w-5 h-5"/>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white text-xl font-extrabold textodegradado">Navegacion</h3>
                    <ul className="md:flex flex-col gap-2 text-white mt-2">
                        {enlaces.map(links => (
                            <li key={links.id}>
                                <a href={links.link} className=" hover:text-green-300">
                                    {links.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-white text-xl font-extrabold textodegradado">Contactos</h3>
                    <div className="mt-2">
                        <p className="text-white font-bold">Correo Electronico:</p>
                        <p className="text-white text-sm">creacioneswebtech@gmail.com</p>
                    </div>
                </div>
            </section>
            <div className="w-5/6 mx-auto border-t-2 border-green-400 border-opacity-50">
                <p className="text-white text-sm text-center py-4">&copy; 2023 Creaciones WebTech - Todos los derechos reservados</p>
            </div>
        </footer>
    )
}
