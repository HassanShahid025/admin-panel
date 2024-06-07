import TableComponent from '@/components/TableComponent'

const Agent = () => {
  return (
    <div className=" bg-[#f6f6f6] p-7 flex gap-9 flex-col min-h-screen max-lg:mb-20">
        <h1 className='font-semibold text-lg max-lg:text-center'>Agents</h1>
        <TableComponent/>
    </div>
  )
}

export default Agent