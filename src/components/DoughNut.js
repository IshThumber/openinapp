import React from "react";
import { Doughnut } from "react-chartjs-2";

const DynamicDoughnutChart = ({ usd, eur, gbp }) => {
    let inrusd = usd.conversion_result ? usd.conversion_result : 10;
    let inreur = eur.conversion_result ? eur.conversion_result : 7;
    let inrgbp = gbp.conversion_result ? gbp.conversion_result : 15;

    return (
        <div className="flex flex-row p-2 items-center text-left justify-center gap-4">
            <div className="p-5 w-1/3">
                <Doughnut
                    options={{
                        plugins: {
                            title: {
                                display: false,
                                text: "Doughnut Chart"
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                    data={{
                        labels: ["USD", "EUR", "GBP"],
                        datasets: [
                            {
                                label: "My First Dataset",
                                data: [inrusd, inreur, inrgbp],
                                backgroundColor: [
                                    "rgb(255, 99, 132)",
                                    "rgb(54, 162, 235)",
                                    "rgb(255, 205, 86)"
                                ],
                                hoverOffset: 4,
                                cutout: 50,
                                borderWidth: 1,
                                borderColor: "rgb(255, 255, 255)",
                                // borderRadius: 5,
                                borderSkipped: false,
                                hoverBorderWidth: 3,
                                width: 100
                            }
                        ]
                    }}
                />
            </div>
            <div className="p-3 justify-between">
                <span className="text-md font-bold">
                    This stats shows the current exchange rate of INR with other
                    at every 100 INR.
                </span>
                <ul className="text-sm px-4 py-3">
                    <li type="disc" className="py-1 indent-3">
                        United States Dollar: ${inrusd}
                    </li>
                    <li type="disc" className="py-1 indent-3">
                        Euro: €{inreur}
                    </li>
                    <li
                        type="disc"
                        className="py-1 indent-3 marker:text-yellow-600"
                    >
                        Pound Sterling: £{inrgbp}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DynamicDoughnutChart;
