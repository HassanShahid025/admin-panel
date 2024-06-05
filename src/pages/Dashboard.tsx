import Cards from "../components/Cards";
import Listings from "../components/Listings";
import SplineChart from "../components/SplineChart";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  return (
    <div className="border border-red-500 bg-[#f6f6f6] p-7 flex gap-9 flex-col">
      <Cards />
      <div className="flex gap-5"> 

        <div className="w-3/5 flex flex-col gap-9">
            <SplineChart/>
            <Listings/>
        </div>
        
        <div className="w-2/5">
            <Transactions/>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
