import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DialogComponent } from "./DialogComponent";

const TableComponent = () => {
  const tableData = [{
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    nationality: "Ukraine",
    projects : 12,
    language : "English, Russian"
  }]
  const repeatedData = Array.from({ length: 12 }, () => tableData[0]);
  return (
    <div>
      <Table className="max-lg:hidden">
        <TableHeader className="font-normal border-b-4 border-gray-200">
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Nationality</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead>Language</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repeatedData.map((data, index) => (
            <TableRow key={index} className="font-semibold text-sm whitespace-nowrap border-b-4 border-gray-200">
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.nationality}</TableCell>
              <TableCell>{data.projects}</TableCell>
              <TableCell>{data.language}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="rounded-xl flex flex-col p-5 lg:hidden gap-5 bg-[#ffff]">
        {repeatedData.map((data,index) => (
          <div key={index} className="flex justify-between items-center">
            <h2 className="font-semibold">{data.name}</h2>
            <DialogComponent data={data}/>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default TableComponent;
