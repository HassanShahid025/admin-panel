import { GoPlus } from "react-icons/go";
import listingImg from "../assets/dashboard/listing.png";
import { Dropdown } from "./Dropdown";

const Listings = () => {
  const listingsData = [
    {
      name: "Northeast, Washington D.C.",
      beds: 3,
      baths: 2,
      area: "1,865",
      price: "1,200,000",
      img: "",
    },
    {
      name: "NoMad, New York",
      beds: 3,
      baths: 2,
      area: "1,865",
      price: "3,053,019",
      img: "",
    },
    {
      name: "Tribeca, New York",
      beds: 3,
      baths: 2,
      area: "1,865",
      price: "2,024,414",
      img: "",
    },
  ];
  return (
    <div className="bg-[#ffff] rounded-lg p-5 flex flex-col gap-5">
      <div className="flex items-center justify-between text-sm max-md:flex-col max-md:gap-3 max-md:items-start">
        <h2 className="font-semibold text-lg">Listings</h2>
        <div className="flex items-center gap-5 max-md:justify-between max-md:w-full ">

          <div className="flex items-center gap-2">
            <p className="text-[#959595]">Sort By</p>
            <Dropdown />
          </div>

          <button className="flex items-center p-2 rounded-xl text-[#ffff] bg-[#FFBF20]">
            <GoPlus color="white" />
            Add
          </button>

        </div>
      </div>
      <div className="flex gap-5 max-md:flex-col">
        {listingsData.map((listing, index) => (
          <div key={index} className="flex-1 flex flex-col gap-3 text-sm">
            <img src={listingImg} alt="" />
            <h2 className="font-semibold">{listing.name}</h2>
            <p className="text-[#BBBBBB]">
              {listing.beds} Beds, {listing.baths} Baths, {listing.area} sqft
            </p>
            <h3 className="text-[#FFBF20] font-semibold">${listing.price}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
