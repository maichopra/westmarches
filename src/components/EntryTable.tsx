import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  import { Badge } from "@/components/ui/badge"


  interface ITableEntry {
    index: number;
    "roll-min": number;
    "roll-max": number;
    label: string;
    description: string;
  }
 
  interface ITableData {
    name: string;
    type: string;
    tag: string;
    entries: ITableEntry[];
  }

  interface TableProps {
    tableData: ITableData;
    highlightedRow: number | null;
  }


  
  export function EntryTable ({ tableData, highlightedRow }: TableProps) {
    return (
      <Table>
        <TableCaption>Random {tableData.name} table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Index</TableHead>
            <TableHead>Roll</TableHead>
            <TableHead>Outcome</TableHead>
            <TableHead className="text-right">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.entries.map((entry) => (
            <TableRow key={entry.index} className={entry.index === highlightedRow ? "bg-blue-400" : ""}>
              <TableCell className="font-medium">{entry.index}</TableCell>
              <TableCell>{entry["roll-min"]} - {entry["roll-max"]}</TableCell>
              <TableCell>{entry.label}</TableCell>
              <TableCell className="text-right">{entry.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Tags</TableCell>
            <TableCell className="text-right"><Badge>{tableData.tag}</Badge> <Badge>{tableData.type}</Badge></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  