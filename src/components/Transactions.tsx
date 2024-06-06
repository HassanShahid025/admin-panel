import avatar from "../assets/dashboard/Avatar.png";

const Transactions = () => {
  const transactionsData = [
    {
      name: "Jacob Jones",
      hours: 5,
      amount: "21,900",
    },
    {
      name: "Leslie Alexander",
      hours: 5,
      amount: "10,000",
    },
    {
      name: "Guy Hawkins",
      hours: 5,
      amount: "10,800",
    },
    {
      name: "Guy Hawkins",
      hours: 5,
      amount: "10,000",
    },
  ];
  return (
    <div className="bg-[#ffff] rounded-xl p-5 flex flex-col gap-10">
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg">Transactions</h2>
        <p className="text-[#FFBF20] font-semibold cursor-pointer">See all</p>
      </div>
      <div className="flex flex-col justify-center gap-5 text-sm">
        {transactionsData.map((transaction, index) => (
          <div key={index} className="flex justify-between">
            <div className="flex gap-5">
              <img src={avatar} alt="avatar" />
              <div>
                <h2 className="font-semibold whitespace-nowrap">{transaction.name}</h2>
                <p className="text-[#BBBBBB]">{transaction.hours} hours ago</p>
              </div>
            </div>
            <h3 className="text-[#FFBF20] font-semibold">${transaction.amount}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
