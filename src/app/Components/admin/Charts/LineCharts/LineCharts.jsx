"use client";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots and colors";


const formatPrice = (value) => `${(value / 1000000).toLocaleString("fa-IR")} م`;
export default function ChartLineDotsColors({
  titleText,
  descriptionText,
  verticalAxis,
  XDataKey,
  chartConfig,
  fillterBtn
}) {
  return (
    <Card>
      <CardHeader className='flex justify-between'>
        <div className="flex flex-col gap-1">
        {titleText && <CardTitle>{titleText}</CardTitle>}
        {descriptionText && (
          <CardDescription>{descriptionText}</CardDescription>
        )}
        </div>
        {fillterBtn&&(
          <div className="flex gap-4">
            {fillterBtn.map((button=>
              <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer">{button}</button>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <LineChart
            accessibilityLayer
            data={verticalAxis}
            margin={{ top: 8, right: 8, left: 8, bottom: 0 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={XDataKey}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              width={64}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatPrice}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  indicator="line"
                  formatter={(value) => (
                    <div className="flex w-full items-center justify-between gap-4">
                      <span className="text-muted-foreground">قیمت</span>
                      <span className="font-medium tabular-nums">
                        {Number(value).toLocaleString("fa-IR")} تومان
                      </span>
                    </div>
                  )}
                />
              }
            />
            <Line
              dataKey="price"
              type="monotone"
              stroke="var(--color-price)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
