import React, { useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const PatientsCategory = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ["Critical", "High Priority", "Moderate", "Low Priority"],
    datasets: [
      {
        data: [34, 76, 120, 24],
        backgroundColor: ["#0b1b3d", "#2a3a5d", "#8c9bb3", "#cfd4e0"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: { position: "right" },
    },
  };

  // Destroy chart on unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Patients Category</h3>
        <span className="text-sm text-gray-500">Month</span>
      </div>
      <Doughnut ref={chartRef} data={data} options={options} />
      <div className="text-center mt-4 text-gray-500">100% Data Recorded</div>
    </div>
  );
};

export default PatientsCategory;
