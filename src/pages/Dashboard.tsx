import Cards from "../components/Cards";
import Listings from "../components/Listings";
import SaleRent from "../components/SaleRent";
import SplineChart from "../components/SplineChart";
import Transactions from "../components/Transactions";


const Dashboard = () => {
  return (
    <div className="bg-[#f6f6f6] p-7 flex gap-9 flex-col">
      <Cards />
      <div className="flex gap-7 max-lg:flex-col"> 

        <div className="w-4/6 flex flex-col gap-10 max-lg:w-full">
            <SplineChart/>
            <Listings/>
        </div>
        
        <div className="w-2/6 flex flex-col gap-10 max-lg:w-full">
            <Transactions/>
            <SaleRent/>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
