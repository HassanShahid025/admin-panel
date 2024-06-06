import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      <Table>
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
            <TableRow key={index} className="font-semibold text-base whitespace-nowrap border-b-4 border-gray-200">
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.email}</TableCell>
              <TableCell>{data.nationality}</TableCell>
              <TableCell>{data.projects}</TableCell>
              <TableCell>{data.language}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
