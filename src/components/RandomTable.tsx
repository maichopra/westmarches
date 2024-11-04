import * as React from "react"

import { TableDemo } from "./Table";
import { Button } from "./ui/button";

export function RandomTable () {
    const [highlightedRow, setHighlightedRow] = React.useState<number | null>(null);
    
    const handleRandomSelect = () => {
        const randomIndex = Math.floor(Math.random() * 7);
        console.log(randomIndex);
        setHighlightedRow(randomIndex);
      };

      return (
        <>
            <Button onClick={handleRandomSelect}>Select a Row</Button>
            <TableDemo highlightedRow={highlightedRow}></TableDemo>
        </>
      )
}
