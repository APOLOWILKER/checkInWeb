import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { IconButton } from "./IconButton"

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className='text-2xl font-bold'>Participanetes</h1>
        <div className='w-72 px-3 py-1.5  rounded-lg border border-white/10 bg-transparent text-sm flex items-center gap-3'>
          <Search className='w-4 text-emerald-300'/>
          <input className='bg-transparent flex-1 outline-none border-0 p-0 text-sm' type="text"  placeholder="Buscar participante..." />
        </div>
      </div>

      <div className='border border-white/10 rounded'>
        <table className='w-full'>
          <thead>
            <tr className='border-b border-white/10'>
              <th style={{width: 48}} className='py-3 px-4 text-sm font-semibold text-left'>
                <input type="checkbox" name="" id="" className='size-4 bg-black/20 rounded border border-white/10'/>
              </th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Participante</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Data de inscrição</th>
              <th className='py-3 px-4 text-sm font-semibold text-left'>Data do check-in</th>
              <th style={{width: 64}} className='py-3 px-4 text-sm font-semibold text-left'></th>
            </tr>
          </thead>
          <tbody>
            {
              Array.from({length: 10}).map((_, index) => {
                return (
                  <tr key={index} className='border-b border-white/10 hover:bg-white/5'>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <input type="checkbox" name="" id="" className='size-4 bg-black/20 rounded border border-white/10'/>
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>12319</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <div className='flex flex-col'>
                      <span className='font-semibold text-white'>Apolo Wilker</span>
                      <span>teste@gmai..com</span>
                    </div>
                  </td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</td>
                  <td className='py-3 px-4 text-sm text-zinc-300'>
                    <IconButton transparent>
                      <MoreHorizontal className='size-4'/>
                    </IconButton>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}  className='py-3 px-4 text-sm text-zinc-300'>
                  Mostrando 10 de 228 itens
              </td>
              <td colSpan={3}  className='py-3 px-4 text-sm text-zinc-300 text-right'>
                <div className='inline-flex items-center gap-8'>
                  <span>Página 1 de 24</span>

                  <div className='flex gap-1.5'>
                    <IconButton>
                        <ChevronsLeft className='size-4'/>
                      </IconButton>
                      <IconButton>
                        <ChevronLeft className='size-4'/>
                      </IconButton>
                      <IconButton>
                        <ChevronsRight className='size-4'/>
                      </IconButton>
                      <IconButton>
                        <ChevronRight className='size-4'/>
                      </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>

  )
}
