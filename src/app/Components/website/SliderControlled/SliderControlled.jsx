"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export default function SliderControlled() {
  const [value, setValue] = useState([50, 300])

  return (
    <div className="mx-auto grid w-full max-w-xs gap-3">
      <Slider
        id="slider-demo-temperature"
        value={value}
        onValueChange={setValue}
        min={50}
        max={300}
        step={10}
      />
      <div className="flex items-center  gap-2">
        <span className="text-sm flex gap-1">
          <span>از</span>
          {value.join(" تا ")}
        </span>
      </div>
    </div>
  )
}
