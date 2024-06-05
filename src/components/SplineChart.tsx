import Chart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts';

const SplineChart = () => {
    const data = {
        series: [{
            name: 'Sales',
            data: [31, 40, 28, 51, 42, 109, 100,200,600]
          }, {
            name: 'Rent',
            data: [11, 32, 45, 32, 34, 52, 41,800,600,200]
          }],
        options: {
          chart: {
            height: 350,
            type: 'area',
          },
          colors: ['#FFBF20', '#FF7D33'],  // Set the colors for the series
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
            categories: [
              '2023-01-01T00:00:00.000Z', '2023-02-01T00:00:00.000Z', '2023-03-01T00:00:00.000Z', 
              '2023-04-01T00:00:00.000Z', '2023-05-01T00:00:00.000Z', '2023-06-01T00:00:00.000Z', 
              '2023-07-01T00:00:00.000Z', '2023-08-01T00:00:00.000Z', '2023-09-01T00:00:00.000Z', 
              '2023-10-01T00:00:00.000Z', '2023-11-01T00:00:00.000Z', '2023-12-01T00:00:00.000Z'
            ],
            labels: {
              formatter: function (value:string) {
                return new Date(value).toLocaleString('default', { month: 'short' });
              },
            },
          },
          yaxis: {
            min: 0,
            max: 800,
            tickAmount: 4,
            labels: {
              formatter: function (value:number) {
                return value.toFixed(0);
              },
            },
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm',
            },
          },
        } as ApexOptions,
      };
  return (
    <div className='bg-[#ffff] rounded-xl p-2'>
        <h2 className='font-semibold text-xl pl-3'>Overview</h2>
        <Chart options={data.options} series={data.series} width={700} height={320} />
    </div>
  )
}

export default SplineChart