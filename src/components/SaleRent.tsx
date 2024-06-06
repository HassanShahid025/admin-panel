//@ts-nocheck
import Chart from "react-apexcharts";
import { useState } from "react";

const SaleRent = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const chartData = {
    series: [2345, 1435],
    options: {
      chart: {
        width: 380,
        type: "donut",
        events: {
          dataPointSelection: (config) => {
            setSelectedIndex(config.dataPointIndex);
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          donut: {
            size: "75%", // Adjust the size to create a gap
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "22px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 600,
                color: "#373d3f",
                offsetY: -10,
                formatter: function (val: string) {
                  return val;
                },
              },
              value: {
                show: true,
                fontSize: "16px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: "#373d3f",
                offsetY: 16,
                formatter: function (val: number) {
                  return val;
                },
              },
              total: {
                show: true,
                showAlways: true,
                label: "Total",
                fontSize: "15px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                color: "#BBBBBB",
                formatter: function (w: {
                  globals: { seriesTotals: number[] };
                }): string {
                  const total = w.globals.seriesTotals.reduce(
                    (a, b) => a + b,
                    0
                  );
                  return total.toString();
                },
              },
            },
          },
          expandOnClick: true,
          customScale: 1,
          borderRadius: 10, // Make corners rounded
          offsetX: 0,
          offsetY: 0,
        },
      },
      fill: {
        colors: ["#FFBF20", "#EEF1FF"],
      },
      states: {
        active: {
          filter: {
            type: "none",
          },
        },
        normal: {
          filter: {
            type: "none",
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "bottom",
        offsetY: 0,
        height: 50,
        labels: {
          colors: "#373d3f",
          useSeriesColors: true,
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          radius: 12,
        },
        formatter: function (seriesName: string, opts: unknown) {
          const colors = opts.w.globals.seriesColors;
          const labels = ["Total Sales", "Total Rent"];
          const index = opts.seriesIndex;
          return `<span style="color: ${colors[index]};">${labels[index]}</span>`;
        },
      },
    },
  };

  // Override colors based on selected index
  const colors =
    selectedIndex === 0 ? ["#FFBF20", "#EEF1FF"] : ["#EEF1FF", "#FFBF20"];

  return (
    <div className="bg-[#ffff] rounded-xl p-5 flex flex-col gap-8">
      <h2 className="font-semibold text-lg">Sale And Rent</h2>
      <div className=" flex w-full justify-center">
        <Chart
          options={{ ...chartData.options, fill: { colors } }}
          series={chartData.series}
          type="donut"
          width={'120%'}
        />
      </div>
    </div>
  );
};

export default SaleRent;
