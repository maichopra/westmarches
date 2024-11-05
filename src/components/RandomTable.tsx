import * as React from "react"

import { EntryTable } from "./EntryTable";
import { Button } from "./ui/button";
import { RandomChart } from "./RandomChart";
import { Separator } from "@/components/ui/separator"


interface ITableEntry {
    index: number;
    "roll-min": number;
    "roll-max": number;
    label: string;
    description: string;
  }
 
  interface ITableData {
    name: string;
    type: number;
    tag: string;
    entries: ITableEntry[];
  }

  interface TableProps {
    tableData: ITableData;
  }

export function RandomTable(table : TableProps) {
    const [highlightedRow, setHighlightedRow] = React.useState<number | null>(null);
    
    const handleRandomSelect = () => {
        const randomRoll = Math.floor(Math.random() * table.tableData.type) + 1;
        const randomIndex = table.tableData.entries.find(entry => randomRoll >= entry["roll-min"] && randomRoll <= entry["roll-max"])?.index;
        setHighlightedRow(randomIndex != null ? randomIndex : 0);
        setTimeout(() => setHighlightedRow(null), 2000);

      };

      return (
        <div className="flex flex-col gap-5 items-start">
          <div className="flex flex-col gap-3 items-end">
            <Button onClick={handleRandomSelect}>Roll on the {table.tableData.name} table</Button>
          </div>
          <div className="flex flex-row gap-5 items-start">
            <EntryTable tableData={table.tableData} highlightedRow={highlightedRow}></EntryTable>
            <RandomChart tableData={table.tableData} highlightedRow={highlightedRow}></RandomChart>
          </div>         
            <Separator></Separator>
        </div>
      )
}
