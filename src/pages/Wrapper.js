import {
    ArrowDownUp,
    Bell,
    Clock2,
    Hourglass,
    Plus,
    Sigma
} from "lucide-react";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import DynamicBarChart from "../components/Barchart";
import DynamicDoughnutChart from "../components/DoughNut";
import Sidebar from "../components/Sidebar";
import Card from "../utils/Card";
import Modal from "../utils/Modal";

const Wrapper = ({ user }) => {
    const [data, setData] = useState({});
    const [quota, setQuota] = useState({});
    const [usd, setUsd] = useState({});
    const [eur, setEur] = useState({});
    const [gbp, setGbp] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [basicData, setBasicData] = useState({
        name: "",
        email: "",
        phone: "",
        insta: "",
        yt: ""
    });
    const [stateCheck, setStateCheck] = useState(false);

    const key = "e33214128e2e0db90e5efff5";
    // const key = "99f6bba557bf78e3974542d8"
    const url = `https://v6.exchangerate-api.com/v6/${key}`;
    const latest = `${url}/latest/INR`;
    const quotaUrl = `${url}/quota`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${latest}`);
                // "https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/latest/INR"
                if (response.ok) {
                    const json = await response.json();
                    setData(json);
                } else {
                    throw new Error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const fetchQuota = async () => {
            try {
                const response = await fetch(`${quotaUrl}`);
                // "https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/quota"
                if (response.ok) {
                    const json = await response.json();
                    setQuota(json);
                } else {
                    throw new Error("Failed to fetch quota data");
                }
            } catch (error) {
                console.error("Error fetching quota data:", error);
            }
        };

        const fetchCurrencyData = async (currency) => {
            try {
                const urlcurrency = `${url}/pair/${currency}/INR/100`;
                const response = await fetch(`${urlcurrency}`);
                // `https://v6.exchangerate-api.com/v6/e33214128e2e0db90e5efff5/pair/${currency}/INR/100`
                if (response.ok) {
                    const json = await response.json();
                    switch (currency) {
                        case "USD":
                            setUsd(json);
                            break;
                        case "EUR":
                            setEur(json);
                            break;
                        case "GBP":
                            setGbp(json);
                            break;
                        default:
                            break;
                    }
                } else {
                    throw new Error(`Failed to fetch ${currency} data`);
                }
            } catch (error) {
                console.error(`Error fetching ${currency} data:`, error);
            }
        };

        fetchData();
        fetchQuota();
        fetchCurrencyData("USD");
        fetchCurrencyData("EUR");
        fetchCurrencyData("GBP");
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    let time = data.time_last_update_utc;
    let tq = quota.plan_quota;
    let rq = quota.requests_remaining;
    let rf = quota.refresh_day_of_month;

    let totalQuota = `Total Quota: ${tq}`;
    let remainingQuota = `Remaining Quota: ${rq}`;
    let refresh = `Refreshs on day ${rf}/${new Date().getMonth() + 2}`;
    let text = `Last updated on ${time}`;

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

    function separateFullName(fullName) {
        if (typeof fullName !== "string" || fullName.trim() === "") {
            return { firstName: "", lastName: "" }; // Return empty values for invalid input
        }

        const parts = fullName.trim().split(" ");

        let firstName = "";
        let lastName = "";

        if (parts.length > 0) {
            firstName = parts[0];
            lastName = parts.slice(1).join(" "); // Combine remaining parts as the last name
        }

        return { firstName, lastName };
    }
    const fullname = separateFullName(user.name);
    let fname = `${fullname.firstName}`;
    let lname = `${fullname.lastName}`;

    const pic = user.picture
        ? user.picture
        : `https://eu.ui-avatars.com/api/?name=${fname}+${lname}&size=250`;

    return (
        <>
            <div className="w-full flex">
                <div className="w-1/6 h-full">
                    <Sidebar />
                </div>
                <div className="w-5/6 p-2 flex flex-col justify-between">
                    <div className="flex flex-row justify-between items-center m-3 mb-5">
                        <h1 className="text-xl">Dashboard</h1>
                        <div className="flex flex-row items-center gap-7">
                            <div>
                                <div>
                                    <input
                                        className="border border-gray-800 rounded-xl p-2 placeholder:text-xs items-center text-sm"
                                        type="text"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                            <div className="p-2 bg-orange-100 rounded-full">
                                <Bell size={16} />
                            </div>
                            <div>
                                <img
                                    className="rounded-full w-[40px] h-[40px] aspect-square"
                                    src={pic}
                                    alt="profile"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-1/6 p-3 px-4 bg-white m-3 flex flex-col gap-3 border border-gray-700 rounded-xl shadow-xl">
                            <div className="flex flex-row items-center gap-3">
                                <span className="bg-green-100 p-2 rounded-full">
                                    <Sigma size={18} color="green" />
                                </span>
                                <span className="text-sm">{"Total Quota"}</span>
                            </div>
                            <span className="text-xs">{totalQuota}</span>
                        </div>

                        <div className="w-1/6 p-3 px-4 bg-white m-3 flex flex-col gap-3 border border-gray-700 rounded-xl shadow-xl">
                            <div className="flex flex-row items-center gap-3">
                                <span className="bg-yellow-100 p-2 rounded-full">
                                    <Hourglass size={18} color="orange" />
                                </span>
                                <span className="text-sm">
                                    {"Remaining Quota"}
                                </span>
                            </div>
                            <span className="text-xs">{remainingQuota}</span>
                        </div>

                        <div className="w-1/6 p-3 px-4 bg-white m-3 flex flex-col gap-3 border border-gray-700 rounded-xl shadow-xl">
                            <div className="flex flex-row items-center gap-3">
                                <span className="bg-blue-100 p-2 rounded-full">
                                    <Clock2 size={18} color="blue" />
                                </span>
                                <span className="text-sm">{"Refresh"}</span>
                            </div>
                            <span className="text-xs">{refresh}</span>
                        </div>

                        <div className="w-1/6 p-3 px-4 bg-white m-3 flex flex-col gap-3 border border-gray-700 rounded-xl shadow-xl">
                            <div className="flex flex-row items-center gap-3">
                                <span className="bg-red-100 p-2 rounded-full">
                                    <ArrowDownUp size={18} color="red" />
                                </span>
                                <span className="text-sm">
                                    {"Last Updated"}
                                </span>
                            </div>
                            <span className="text-xs">{text}</span>
                        </div>
                    </div>
                    <div className="bg-white w-3/5 p-7 border border-gray-700 rounded-3xl shadow-xl m-3">
                        <DynamicBarChart data={data} />
                    </div>
                    <div className="flex flex-row">
                        <div className="bg-white w-1/2 border border-gray-700 rounded-3xl shadow-xl m-3">
                            <DynamicDoughnutChart
                                usd={usd}
                                eur={eur}
                                gbp={gbp}
                            />
                        </div>

                        <div className="bg-white w-1/2 border border-gray-700 rounded-3xl shadow-xl m-3">
                            {!stateCheck ? (
                                <div className="flex justify-center items-center h-full">
                                    <div className="items-center flex flex-col gap-2 text-sm">
                                        <button onClick={setIsOpen}>
                                            <div className="p-2 bg-slate-200 rounded-full w-fit h-fit ">
                                                <Plus />
                                            </div>
                                        </button>
                                        Add Profile
                                    </div>
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
                                                WebkitOverflowScrolling:
                                                    "touch",
                                                borderRadius: "4px",
                                                outline: "none",
                                                padding: "20px",
                                                width: "50%",
                                                margin: "auto"
                                            }
                                        }}
                                    >
                                        <Modal
                                            setStateCheck={setStateCheck}
                                            onclose={handleClose}
                                            basicData={basicData}
                                            setBasicData={setBasicData}
                                        />
                                    </ReactModal>
                                </div>
                            ) : (
                                <div>
                                    <Card basicData={basicData} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wrapper;
