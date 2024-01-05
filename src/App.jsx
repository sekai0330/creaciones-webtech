import { Servicios } from "./components/Servicios"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Footer } from "./components/Footer"
import { Conocemas } from "./components/Conocemas"
import { Formulario } from "./components/Formulario"
import { Faqs } from "./components/Faqs"
import { Experiencia } from "./components/Experiencia"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Conocemas />
      <Servicios />
      <Experiencia />
      <Faqs />
      <Formulario />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App
