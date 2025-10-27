import { Calendar, Users, FileText, DollarSign, ArrowUpCircle, ChevronDown } from "lucide-react"
import { Line } from "react-chartjs-2"
import React, { useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import RecentActivities from "./RecentActivities";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler
);


export default function Dashboard() {
   const chartRef = useRef(null);

const data1 = {
  labels: ["Critical (20%)", "High Priority (30%)", "Moderate (40%)", "Low Priority (10%)"],
  datasets: [
    {
      data: [34, 76, 120, 24],
      backgroundColor: ["#0b1b3d", "#2a3a5d", "#8c9bb3", "#cfd4e0"],
      borderWidth: 2,
      borderColor: "#fff",     // white gap between slices
      spacing: 4,              // gap between slices (Chart.js v4+)
      hoverOffset: 10,         // optional: makes slices pop on hover
    },
  ],
};

   
const options1 = {
  cutout: "60%",
  plugins: {
    legend: {
      position: "right",
      labels: {
        boxWidth: 20,      // width of color box
        boxHeight: 20,     // height of color box
        borderRadius: 10,  // make box rounded (max for circle)
        padding: 15,       // space between box and label
        color: "#333",     // label text color
        font: {
          size: 16,        // label font size
          weight: "500",
        },
      },
    },
  },
  maintainAspectRatio: false,
};

   
     // Destroy chart on unmount
     useEffect(() => {
       return () => {
         if (chartRef.current) {
           chartRef.current.destroy();
         }
       };
     }, []);
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"],
    datasets: [
      {
        label: "Admitted Patients",
        data: [50, 70, 65, 90, 80, 85, 60],
        fill: true,
        borderColor: "#3B44B2",
        tension: 0,
        backgroundColor: function (context) {
  const chart = context.chart;
  const { ctx, chartArea } = chart;
  if (!chartArea) return null;
  const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
  gradient.addColorStop(0, "#7F56D9"); // top near the line
  gradient.addColorStop(1, "rgba(127, 86, 217, 0)"); // bottom transparent
  return gradient;
},


      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { display: false },
      },
      y: {
        grid: { color: "transparent" },
        ticks: { display: false },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        fill: true,
        backgroundColor: "rgba(58,123,213,0.2)", // fill under line
      },
      point: {
        radius: 4,
        backgroundColor: "#3a7bd5",
        borderWidth: 2,
        borderColor: "#fff",
      },
    },
    animation: {
      onComplete: function () {
        const chart = this;
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset, i) => {
          const meta = chart.getDatasetMeta(i);
          ctx.save();
          ctx.shadowColor = "#7F56D9"; // shadow color
          ctx.shadowBlur = 0;                     // blur radius
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 0;
          ctx.beginPath();
          meta.data.forEach((point, index) => {
            if (index === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          });
          ctx.strokeStyle = dataset.borderColor;
          ctx.lineWidth = dataset.borderWidth;
          ctx.stroke();
          ctx.restore();
        });
      }
    }
  };



  return (
    <div className="p-6 ">
      <h1 className="text-3xl font-bold mb-8 text-foreground">Overview (Quick Stats)</h1>
    <div className="flex lg:flex-row md:flex-row flex-col justify-between gap-5">
      {/* Stat Cards */}
      <div className="bg-white p-5 rounded-lg shadow-md lg:w-1/2 md:w-1/2 w-full h-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Admitted Patients</h3>
          <div className="flex justify-baseline border p-2 rounded-md">
            <span className="text-sm text-gray-500">Month</span>
            <ChevronDown size={18}/>
          </div>
        </div>
        <div className="flex gap-5 items-center">
        <div className="text-2xl font-bold">560</div>
        <div  className="flex items-center gap-2">
          <div className="bg-[#C7FCD3] flex gap-1 items-center p-1 w-fit rounded-md">
            <ArrowUpCircle size={18}/>
            <p className="text-sm">+8.8% </p>
          </div>
          <p className="text-sm">is this month</p>
          </div>
        </div>
        <div className="h-70 w-full">
        <Line data={data} options={options} className="py-5" />
        </div>
      </div>

      {/* Stat Cards */}
    <div className="bg-white p-5 rounded-lg shadow-md lg:w-1/2 md:w-1/2 h-100">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Patients Category</h3>
          <div className="flex justify-baseline border p-2 rounded-md">
            <span className="text-sm text-gray-500">Month</span>
            <ChevronDown size={18}/>
          </div>
      </div>
<div className="w-90 h-90 relative">
  <Doughnut ref={chartRef} data={data1} options={options1} />
  <div className="absolute top-40 left-12 w-1/4  text-center">100% Data Recorded</div>
</div>


    </div>
    </div>
    <RecentActivities/>
    </div>
  )
}
