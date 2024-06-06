import { FaSearch } from 'react-icons/fa'
const SearchBar = () => {
    return (
        <div className="flex items-center bg-[#F8F8F8] rounded-lg w-96 p-2 max-md:w-56">
          <input
            type="text"
            placeholder="Search type of keywords"
            className="bg-[#F8F8F8] outline-none w-full flex-grow px-2  text-gray-500"
          />
          <FaSearch className="flex items-center justify-center w-5 h-5  bg-transparent text-[#BBBBBB] cursor-pointer"/>
            
      
        </div>
      );
}

export default SearchBar