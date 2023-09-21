import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DynamicBarChart from "../components/Barchart";
import DynamicDoughnutChart from "../components/DoughNut";
import Box from "../utils/Box";
import { ArrowDownUp, Clock2, Hourglass, Plus, Sigma } from "lucide-react";
import ReactModal from "react-modal";
import Modal from "../utils/Modal";
import Card from "../utils/Card";

const Wrapper = () => {
    const [data, setData] = useState([]);
    const [quota, setQuota] = useState([]);
    const [usd, setUsd] = useState([]);
    const [eur, setEur] = useState([]);
    const [gbp, setGbp] = useState([]);

    const [isOpen, setIsOpen] = useState(false);
    const [basicData, setBasicData] = useState({
        name: "",
        email: "",
        phone: "",
        insta: "",
        yt: ""
    });

    // {
    // const fetchData = async () => {
    //     return await fetch(
    //         `https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/latest/INR`
    //     )
    //         .then((res) => res.json())
    //         .then((json) => setData(json));
    // };

    // const fetchquota = async () => {
    //     return await fetch(
    //         `https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/quota`
    //     )
    //         .then((res) => res.json())
    //         .then((json) => setQuota(json));
    // };

    // const fetchDatausd = async () => {
    //     return await fetch(
    //         `https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/pair/USD/INR/100`
    //     )
    //         .then((res) => res.json())
    //         .then((json) => setUsd(json));
    // };

    // const fetchDataeur = async () => {
    //     return await fetch(
    //         `https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/pair/EUR/INR/100`
    //     )
    //         .then((res) => res.json())
    //         .then((json) => setEur(json));
    // };

    // const fetchDatagbp = async () => {
    //     return await fetch(
    //         `https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/pair/GBP/INR/100`
    //     )
    //         .then((res) => res.json())
    //         .then((json) => setGbp(json));
    // };

    // useEffect(() => {
    //     fetchData();
    //     fetchquota();
    //     fetchDatausd();
    //     fetchDataeur();
    //     fetchDatagbp();
    // }, []);
    // }

    const handleClose = () => {
        setIsOpen(false);
    };
    const time = data.time_last_update_utc;
    const tq = quota.plan_quota;
    const rq = quota.requests_remaining;
    const rf = quota.refresh_day_of_month;
    let month = new Date().getMonth() + 2;

    let text = `Last updated on ${time}`;
    let totalQuota = `Total Quota: ${tq}`;
    let remainingQuota = `Remaining Quota: ${rq}`;
    let refresh = `Refreshs on day ${rf}/${month}`;
    if (
        time === undefined ||
        tq === undefined ||
        rq === undefined ||
        rf === undefined
    ) {
        text = "Loading...";
        totalQuota = "Loading...";
        remainingQuota = "Loading...";
        refresh = "Loading...";
    }
    return (
        <>
            <div className="w-full flex">
                <div className="w-1/6 bg-pink-300 h-full">
                    <Sidebar />
                </div>
                <div className="w-5/6 bg-purple-300 p-2 flex flex-col justify-between">
                    <div className="bg-cyan-200 flex flex-row justify-between">
                        <h1 className="text-xl">Dashboard</h1>
                        <h1 className="text-xl">Dashboard</h1>
                    </div>
                    <div className="bg-green-200 flex flex-row justify-between">
                        <Box name={totalQuota} icon={<Sigma size={16} />} />
                        <Box
                            name={remainingQuota}
                            icon={<Hourglass size={16} />}
                        />
                        <Box name={refresh} icon={<Clock2 size={16} />} />
                        <Box name={text} icon={<ArrowDownUp size={16} />} />
                    </div>
                    <div className="bg-white w-3/5 p-7 border-2 border-black rounded-3xl shadow-xl m-3">
                        <DynamicBarChart data={data} />
                    </div>
                    <div className="bg-yellow-500 flex flex-row">
                        <div className="bg-white w-1/2 border-2 border-black rounded-3xl shadow-xl mx-3">
                            <DynamicDoughnutChart
                                usd={usd}
                                eur={eur}
                                gbp={gbp}
                            />
                        </div>

                        <div className="bg-white w-1/2 border-2 border-black rounded-3xl shadow-xl mx-3">
                            {/* map */}
                            <div className="flex justify-center items-center h-full">
                                <button onClick={setIsOpen}>
                                    <div className="p-2 bg-slate-200 rounded-full w-fit h-fit ">
                                        <Plus />
                                    </div>
                                </button>

                                <ReactModal
                                    isOpen={isOpen}
                                    onRequestClose={() => setIsOpen(false)}
                                    // className="bg-pink-200 inline-block p-5"
                                    overlayClassName="flex flex-col justify-center items-center bg-yellow-200"
                                    style={{
                                        content: {
                                            position: "absolute",
                                            top: "40px",
                                            left: "40px",
                                            right: "40px",
                                            bottom: "40px",
                                            border: "1px solid #ccc",
                                            background: "#fff",
                                            overflow: "auto",
                                            WebkitOverflowScrolling: "touch",
                                            borderRadius: "4px",
                                            outline: "none",
                                            padding: "20px",
                                            width: "50%",
                                            margin: "auto"
                                        }
                                    }}
                                >
                                    <Modal
                                        onclose={handleClose}
                                        basicData={basicData}
                                        setBasicData={setBasicData}
                                    />
                                </ReactModal>
                            </div>
                            <Card basicData={basicData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wrapper;
