import avatar from '../assets/dashboard/Avatar.png'

const Transactions = () => {
    const transactionsData = [
        {
            name:"Jacob Jones",
            hours:5,
            amount:'21,900',
        },
        {
            name:"Leslie Alexander",
            hours:5,
            amount:'10,000',
        },
        {
            name:"Guy Hawkins",
            hours:5,
            amount:'10,800',
        },
        {
            name:"Guy Hawkins",
            hours:5,
            amount:'10,000',
        },
       
    ]
  return (
    <div className="bg-[#ffff] rounded-xl p-3 flex flex-col gap-5">
        <div className="flex justify-between">
            <h2 className="font-semibold text-xl">Transactions</h2>
            <p className="text-[#FFBF20] font-semibold cursor-pointer">See all</p>
        </div>
        <div className="flex flex-col gap-3">

        </div>
    </div>
  )
}

export default Transactions