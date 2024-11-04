import * as React from "react"

import { EntryTable } from "./EntryTable";
import { Button } from "./ui/button";
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
    type: string;
    tag: string;
    entries: ITableEntry[];
  }

export function RandomTable(tableData : ITableData) {
    const [highlightedRow, setHighlightedRow] = React.useState<number | null>(null);
    
    const handleRandomSelect = () => {
        const randomIndex = Math.floor(Math.random() * tableData.entries.length);
        setHighlightedRow(randomIndex);
      };

      return (
        <div className="flex flex-col gap-5 items-end">         
            <EntryTable tableData={tableData} highlightedRow={highlightedRow}></EntryTable>
            <Separator></Separator>
            <Button onClick={handleRandomSelect}>Roll on the {tableData.name} table</Button>
        </div>
      )
}
