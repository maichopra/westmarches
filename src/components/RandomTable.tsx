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
    type: number;
    tag: string;
    entries: ITableEntry[];
  }

export function RandomTable(tableData : ITableData) {
    const [highlightedRow, setHighlightedRow] = React.useState<number | null>(null);
    
    const handleRandomSelect = () => {
        const randomRoll = Math.floor(Math.random() * tableData.type) + 1;
        const randomIndex = tableData.entries.find(entry => randomRoll >= entry["roll-min"] && randomRoll <= entry["roll-max"])?.index;
        setHighlightedRow(randomIndex != null ? randomIndex : 0);
      };

      return (
        <div className="flex flex-col gap-5 items-end">         
            <EntryTable tableData={tableData} highlightedRow={highlightedRow}></EntryTable>
            <Separator></Separator>
            <Button onClick={handleRandomSelect}>Roll on the {tableData.name} table</Button>
        </div>
      )
}
