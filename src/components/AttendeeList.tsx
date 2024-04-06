import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendee"
import { IconButton } from "./IconButton"
import { Table } from "./table/Table"
import { TableCell } from "./table/TableCell"
import { TableHeader } from "./table/TableHeader"
import { TableRow } from "./table/TableRow"

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

interface Attendee {
  id: string,
  name: string,
  email: string,
  createdAt: string,
  checkedInAt: string | null
};

export function AttendeeList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('page')) {
      return url.searchParams.get('page') ?? ''
    }

    return ""
  })

  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'))
    }

    return 1
  })
  // const [attendees, setAttendees] = useState<Ateendee>([]);
  // const [total, setTotal] = useState(0);



  const totalPages = Math.ceil(attendees.length / 10);


  // useEffect(() => {
  //   const url = new URL(
  //     "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"
  //   );

  //   url.searchParams.set("pageIndex", String(page - 1));
  //   if (search.length > 1) {
  //     url.searchParams.set("query", search);
  //   }

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAttendees(data.attendees);
  //       setTotal(data.total);
  //     });
  // }, [page, search]);


  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())

    url.searchParams.set('search', search)

    window.history.pushState({}, "", url)

    setSearch(search)
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())

    url.searchParams.set('page', String(page))

    window.history.pushState({}, "", url)

    setPage(page)
  }



  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
    setCurrentSearch(event.target.value)
    setCurrentPage(1)
  }

  function goToNextPage(){
    // setPage(page + 1)
    setCurrentPage(page + 1)
  }

  function goToLastPage(){
    // setPage(totalPages)
    setCurrentPage(totalPages)
  }


  function goToPreviousPage(){
    // setPage(page -1)
    setCurrentPage(page - 1)
  }

  function goToFirstPage(){
    // setPage(1)
    setCurrentPage(1)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className="flex gap-3 items-center">
        <h1 className='text-2xl font-bold'>Participanetes</h1>
        <div className='w-72 px-3 py-1.5  rounded-lg border border-white/10 bg-transparent text-sm flex items-center gap-3'>
          <Search className='w-4 text-emerald-300'/>
          <input
            onChange={onSearchInputChanged}
            value={search}
            className='bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0' type="text"
            placeholder="Buscar participante..."
            />
        </div>
      </div>

      <Table>
      <thead>
          <tr className='border-b border-white/10'>
              <TableHeader style={{width: 48}}>
                <input type="checkbox" name="" id="" className='size-4 bg-black/20 rounded border border-white/10'/>
              </TableHeader>
              <TableHeader>Código</TableHeader>
              <TableHeader>Participante</TableHeader>
              <TableHeader>Data de inscrição</TableHeader>
              <TableHeader>Data do check-in</TableHeader>
              <TableHeader style={{width: 64}}></TableHeader>
          </tr>
          </thead>
          <tbody>
            {
              attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                return (
                  <TableRow key={attendee.id}>
                  <TableCell>
                    <input type="checkbox" name="" id="" className='size-4 bg-black/20 rounded border border-white/10'/>
                  </TableCell>
                  <TableCell>{attendee.id}</TableCell>
                  <TableCell>
                    <div className='flex flex-col'>
                      <span className='font-semibold text-white'>{attendee.name}</span>
                      <span>{attendee.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                  <TableCell>{
                    attendee.checkedInAt === null
                    ? <span className="text-zinc-500">Não fez check-in</span>
                    : dayjs().to(attendee.checkedInAt)
                  }</TableCell>
                  <TableCell>
                    <IconButton transparent>
                      <MoreHorizontal className='size-4'/>
                    </IconButton>
                  </TableCell>
                </TableRow>
                )
              })
            }
          </tbody>
          <tfoot>
            <tr>
              <TableCell colSpan={3}>
                  Mostrando 10 de {attendees.length} itens
              </TableCell>
              <TableCell className='text-right' colSpan={3}>
                <div className='inline-flex items-center gap-8'>
                  <span>Página {page} de {totalPages}</span>

                  <div className='flex gap-1.5'>
                    <IconButton
                      onClick={goToFirstPage}
                      disabled={page === 1}
                    >
                        <ChevronsLeft className='size-4'/>
                      </IconButton>
                      <IconButton
                        onClick={goToPreviousPage}
                        disabled={page === 1}
                      >
                        <ChevronLeft className='size-4'/>
                      </IconButton>
                      <IconButton
                        onClick={goToNextPage}
                        disabled={page === totalPages}
                      >
                        <ChevronRight className='size-4'/>
                      </IconButton>
                      <IconButton
                        onClick={goToLastPage}
                        disabled={page === totalPages}
                        >
                        <ChevronsRight className='size-4'/>
                      </IconButton>
                  </div>
                </div>
              </TableCell>
            </tr>
          </tfoot>
      </Table>
    </div>

  )
}
