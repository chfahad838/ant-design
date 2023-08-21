import React from 'react';
import ApexCharts from 'react-apexcharts';

const SimplePieChart = () => {
    const options = {
        series: [55, 44, 13, 43],
        chart: {
        width: 380,
        type: 'pie',
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#FFDF44", "#30A6E2", "#AAD79B", "#E26057"],
      labels: ['Not interested', 'Offer rejected', 'Not available', 'Other'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show:true,
          position: 'top',
          floating: true,
          verticalAlign: 'top',
          align:'start'
          }
        }
      }]
      };
    
  return (
    <ApexCharts
    type='pie'
    options={options}
    series={options.series}
    width={"700px"}
    height={300}
    />
  )
}

export default SimplePieChart