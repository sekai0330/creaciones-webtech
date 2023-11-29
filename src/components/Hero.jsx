import { IconArrowDownRight } from "./Icons"

export function Hero () {

    return (
        <main className="[background-image:url(/img/hero.webp)] bg-center bg-cover h-[750px] flex">
          <div className="max-w-screen-xl px-5 md:px-0 flex items-center justify-between mx-auto md:w-5/6 lg:w-[1140px] py-3 md:pl-0">
              <div className="md:w-2/5 space-y-5">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r textodegradado py-2 [text-wrap:balance]">Creación de Paginas Web que destacan tu presencia digital</h1>
                <p className="text-base text-[#92A7AA] [text-wrap:balance]">Nos especializamos en la creación de paginas web que van mas allá de lo ordinario. <span className="text-white font-bold">Damos vida a tu visión digital</span>, fusionamos creatividad con funcionalida para ofrecerte webs que capturan la esencia de tu marca.</p>
                <div className='flex items-center gap-5'>
                  <a href='' className='flex items-center justify-center gap-2 rounded-xl hover:before:bg-redborder-red-500 relative py-1.5 overflow-hidden bg-gradient-to-r from-[#EDFF7D] to-[#49F992] px-5 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#EDFF7D] before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full'>
                      <span className='relative z-10 font-bold'>Conoce mas </span>
                      <span className='relative z-10'><IconArrowDownRight /></span>
                  </a>
                  <ul className="flex flex-row space-x-4 mt-0">
                    {redes.map(red => (
                      <li key={red.id} >
                        <a href={red.link} >
                          <img src={`/img/${red.image}.svg`} alt={`Logo de ${red.name}`} className="w-5 h-5"/>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
          </div>
        </main>
    )
}

const redes = [
  {
      id:1,
      name: "Facebook",
      link: "https://www.facebook.com/",
      image: "facebook"
  },
  {
      id:2,
      name: "Instagram",
      link: "https://www.instagram.com/",
      image: "instagram"
  },
  {
      id:3,
      name: "TikTok",
      link: "https://www.tiktok.com/",
      image: "tiktok"
  }
]