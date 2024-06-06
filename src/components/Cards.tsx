import card1 from "../assets/dashboard/card1.svg";
import card2 from "../assets/dashboard/card2.svg";
import card3 from "../assets/dashboard/card3.svg";
import card4 from "../assets/dashboard/card4.svg";
import arrowUp from "../assets/dashboard/arrow-up.svg";
import arrowDown from "../assets/dashboard/arrow-down.svg";

const Cards = () => {
  const cardsInfo = [
    {
      name: "Total Property",
      currentValue: 7.421,
      prevValue: 6.421,
      image: card1,
      percentage: "2.01%",
      type: "noCurrency",
    },
    {
      name: "Total Sale",
      currentValue: 421,
      prevValue: 500,
      image: card2,
      percentage: "1.02%",
      type: "currency",
    },
    {
      name: "Total Rent",
      currentValue: 1.421,
      prevValue: 1.111,
      image: card3,
      percentage: "2.01%",
      type: "noCurrency",
    },
    {
      name: "Total Earnings",
      currentValue: 321,
      prevValue: 221,
      image: card4,
      percentage: "2.01%",
      type: "currency",
    },
  ];
  return (
    <div className="flex gap-5">
      {cardsInfo.map((card, index) => (
        <div key={index} className="flex flex-1 gap-10 items-center bg-[#FFFFFF] rounded-xl p-3">
          <div className="flex flex-col gap-3">
            <p className="text-[#959595]">{card.name}</p>
            <div className="flex gap-3 items-end">
                {card.type === "currency" ? <p className="font-bold text-xl">${card.currentValue}K</p> : <p className="font-bold text-xl">{card.currentValue}</p>}
              <div className="flex items-end gap-1">
              {card.currentValue - card.prevValue > 0 ? (
                <>
                <img src={arrowUp} alt="" />
                <p className="text-[#2DBF3C] ">{card.percentage}</p>
                </>
            ) : (
                <>
                <img src={arrowDown} alt="" />
                <p className="text-[#FF7D33]">{card.percentage}</p>
                </>
            )}
            
              </div>
              
            </div>
          </div>
          <img src={card.image} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Cards;
