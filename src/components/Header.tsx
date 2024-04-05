import nlwUniteIconHeader from '../assets/header-nlw-icon-header.svg'
import { NavLink } from "./NavLink"


export function Header(){
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIconHeader} alt="Icone nlw" />

      <nav className='flex items-center gap-5'>
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}
