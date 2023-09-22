import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DynamicBarChart = ({ data }) => {
    // const [data, setData] = useState([]);
    // const fetchData = async () => {
    //     return await fetch(
    //         `https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/latest/INR`
    //     )
    //         .then((res) => res.json())
    //         .then((json) => setData(json));
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);

    console.log(data);

    // let inr = data.conversion_rates?.INR;
    let eur =
        data.conversion_rates?.EUR * 100
            ? data.conversion_rates?.EUR * 100
            : 10;
    let aud =
        data.conversion_rates?.AUD * 100
            ? data.conversion_rates?.AUD * 100
            : 10;
    let gbp =
        data.conversion_rates?.GBP * 100
            ? data.conversion_rates?.GBP * 100
            : 10;
    let chf =
        data.conversion_rates?.CHF * 100
            ? data.conversion_rates?.CHF * 100
            : 10;
    let cad =
        data.conversion_rates?.CAD * 100
            ? data.conversion_rates?.CAD * 100
            : 10;
    let usd =
        data.conversion_rates?.USD * 100
            ? data.conversion_rates?.USD * 100
            : 10;
    // console.log(code);

    // code.supported_codes?.map((item) => {
    //     console.log(item);
    // });

    return (
        <div className="w-full font-sans">
            <Bar
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            grid: {
                                display: false // Remove X-axis gridlines
                            },
                            title: {
                                display: false,
                                text: "Months"
                            }
                        },
                        y: {
                            grid: {
                                display: false // Remove Y-axis gridlines
                            },
                            title: {
                                display: false,
                                text: "Values"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }}
                data={{
                    labels: ["USD", "EUR", "GBP", "CHF", "CAD", "AUD"],
                    datasets: [
                        {
                            label: "My First Dataset",
                            data: [usd, eur, gbp, chf, cad, aud],
                            backgroundColor: [
                                "#FF638433",
                                "#FF9F4033",
                                "#4BC0C033",
                                "#FFCD5633",
                                "#36A2EB33",
                                "#9966FF33",
                                "#C9CBDF33"
                            ],
                            borderColor: [
                                "#FF6384",
                                "#FF9F40",
                                "#4BC0C0",
                                "#FFCD56",
                                "#36A2EB",
                                "#9966FF",
                                "#C9CBDF"
                            ],
                            borderWidth: 1,
                            barThickness: 60,
                            borderRadius: 10
                        }
                    ]
                }}
            />
        </div>
    );
};

export default DynamicBarChart;
