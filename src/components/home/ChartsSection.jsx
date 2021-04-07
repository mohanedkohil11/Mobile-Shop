import React, { useEffect, useState } from 'react'
import ReactApexChart from "react-apexcharts";

export default function ChartsSection({ database }) {
    const [barChartData, setBarChartData] = useState({});
    const [donutChartData, setDonutChartData] = useState({});
    useEffect(() => {
        let barChartData = {};
        let donnutChartData = {};
        database.map(mobile => {
            barChartData.[mobile.manfactureYear] = (barChartData.[mobile.manfactureYear] + 1) || 1;
            donnutChartData.[mobile.brand] = (donnutChartData.[mobile.brand] + 1) || 1;
        })
        setBarChartData({ ...barChartData });
        setDonutChartData({ ...donnutChartData });
    });

    const barChartService = {

        series: [{
            name: 'Count',
            data: Object.values(barChartData),
        }],
        options: {


            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top',
                    },
                }
            },
            dataLabels: {
                enabled: false,
            },

            xaxis: {
                categories: Object.keys(barChartData),
                position: 'bottom',
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true
                },
                tooltip: {
                    enabled: false,
                }
            },
            yaxis: {
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: true,
                },
                labels: {
                    show: true,
                }

            },
            title: {
                text: 'Year vs Mobile count ',
                floating: true,
                align: 'center',
                style: {
                    color: '#444'
                }
            }
        },
    };

    const donutChartService = {
        series: Object.values(donutChartData),
        options: {
            labels: Object.keys(donutChartData),

            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,

                options: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },

    }

    return (
        <div>
            <ReactApexChart options={barChartService.options} series={barChartService.series} type="bar" height={350} />
            <ReactApexChart options={donutChartService.options} series={donutChartService.series} type="donut" height={350} />

        </div>
    )
}
