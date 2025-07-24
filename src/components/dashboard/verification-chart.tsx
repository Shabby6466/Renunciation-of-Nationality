"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import BarChartOne from "/charts/bar/BarChartOne";
import BarChartOne from "../charts/bar/BarChartOne";

export function VerificationChart() {
  const [period, setPeriod] = useState("Month");

  return (
    <div className="bg-white rounded-3xl p-6 shadow-md w-[510px] h-[404px]">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-sm text-gray-500 mb-1">Statistics</h3>
          <h2 className="text-xl font-semibold text-gray-900">
            Verification Rate
          </h2>
        </div>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="w-28">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Month">Month</SelectItem>
            <SelectItem value="Week">Week</SelectItem>
            <SelectItem value="Year">Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-5xl font-bold mb-8 text-gray-900">75%</div>

      <div>
        <BarChartOne />
      </div>

      {/* Chart representation matching the screenshot
      <div className="relative h-32 ">
        <div className="absolute bottom-0 left-10 top-56 right-0 flex items-end justify-between">
          <div className="flex flex-col items-center">
            <div className="w-28 h-16 bg-indigo-200 rounded-t"></div>
            <span className="text-xs text-gray-600 mt-2">1 - 10 Aug</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-20 bg-indigo-300 rounded-t"></div>
            <span className="text-xs text-gray-600 mt-2">11 - 20 Aug</span>
          </div>
          <div className="flex flex-col items-center relative">
            <div className="w-28 h-28 bg-indigo-600 rounded-t"></div>
            <div className="absolute -top-10 bg-indigo-600 text-white text-xs px-2 py-1 rounded font-medium">
              10
            </div>
            <span className="text-xs text-gray-600 mt-2">21 - 30 Aug</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-28 h-12 bg-indigo-200 rounded-t"></div>
            <span className="text-xs text-gray-600 mt-2">1 - 10 Nov</span>
          </div>
        </div>

        {/* Y-axis labels 
        <div className="absolute left-8 top-19 h-full flex flex-col justify-between text-xs text-gray-500 -ml-6">
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
      </div> */}
    </div>
  );
}
