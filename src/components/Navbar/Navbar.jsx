import { Github, Gitlab, Instagram, Linkedin, Sun } from "lucide-react"

const Navbar = () => {
  return (
    <div className="bg-black">
      <nav className="max-w-[75rem] mx-auto flex justify-between items-center h-[65vh] bg-black text-white">
        <h1 className="text-xl uppercase">Gabriel Moraes</h1>
        <div className="flex gap-5 items-center">
          <div className="flex gap-5 uppercase">
            <a href="">Início</a>
            <a href="">Experiência</a>
            <a href="">Projetos</a>
            <a href="">Sobre</a>
            <a href="">Contato</a>
          </div>

          <div className="bg-[#ccc] h-[24px] w-[1px]" />

          <div className="flex gap-4">
            <Sun />
            <Gitlab />
            <Github /> 
            <Linkedin />
            <Instagram />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar