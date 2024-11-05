import { type ChartConfig } from "@/components/ui/chart"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Rectangle } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

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
    highlightedRow: number | null;
  }

export function RandomChart({ tableData, highlightedRow } : TableProps) {

    const updatedData = tableData.entries.map((entry) => ({
        ...entry,
        chartLabel: `${entry.label}: ${entry["roll-min"]} - ${entry["roll-max"]}`,
        probability : (((entry["roll-max"] - entry["roll-min"]) + 1)/tableData.type * 100),
        fill: highlightedRow === entry.index ? `var(--color-highlight)` : `var(--color-${entry.label})`,
    }))

    let chartConfig = tableData.entries.reduce((config: { [key: string]: { label: string; color: string } }, entry) => {
        config[entry.label] = {
        label: entry.label,
        color: `hsl(var(--chart-${(entry.index)+ 1}))`
        };
        return config;
    }, {});

    chartConfig["highlight"] = {
        label: "highlight",
        color: "rgb(148 163 184)",
    }

  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Roll Chart</CardTitle>
        <CardDescription>{tableData.name} table</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={updatedData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="label"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="probability" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  )
}
