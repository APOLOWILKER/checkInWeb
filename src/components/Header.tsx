import nlwUniteIconHeader from '../assets/header-nlw-icon-header.svg'

export function Header(){
  return (
    <div className='flex items-center gap-5 py-2'>
      <img src={nlwUniteIconHeader} alt="Icone nlw" />

      <nav className='flex items-center gap-5'>
        <a href="" className='font-medium text-sm text-zinc-300'>Eventos</a>
        <a href="" className='font-medium text-sm'>Participantes</a>
      </nav>
    </div>
  )
}