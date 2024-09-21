"use client";

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const dataSales = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#e0d3ff",
    },
  ],
};

const dataOrders = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const WeeklySalesCharts = () => {
  const tabs = [
    {
      title: "Sales",
      type: "sales",
    },
    {
      title: "Orders",
      type: "orders",
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState<string>("sales");

  return (
    <div className="dark:bg-slate-700 bg-white p-8 rounded-lg border border-green-400/50">
      <h2 className="text-xl font-semibold mb-2">Weekly Sales Charts</h2>
      <div className="p-4">
        {/* Tabs */}
        <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => (
              <li className="me-2" key={i}>
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  className={
                    chartToDisplay === tab.type
                      ? "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  }
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content to Display */}
        <div className="mt-4">
          {chartToDisplay === "sales" ? (
            <Line data={dataSales} />
          ) : (
            <Line data={dataOrders} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeeklySalesCharts;
