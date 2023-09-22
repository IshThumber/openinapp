import React, { useState } from "react";
import Basic from "./Basic";
import Contact from "./Contact";
import { X } from "lucide-react";

const Modal = ({ onclose, basicData, setBasicData, setStateCheck }) => {
    const [active, setActive] = useState("basic");
    const stateHandler = (curr) => {
        setActive(curr);
    };
    return (
        <>
            <div className="h-full flex flex-col">
                <div className="bg-slate-300 flex flex-row justify-between">
                    <div>Add New Profile </div>
                    <button
                        onClick={onclose}
                        className="p-1 bg-red-300 rounded-full"
                    >
                        <X size={16} color="red" />
                    </button>
                </div>
                <div className="flex gap-8 justify-between p-4 px-20">
                    <span
                        className={`${
                            active === "basic"
                                ? "underline underline-thickness-thin underline-offset-4 decoration-blue-600"
                                : "underline underline-thickness-thin underline-offset-4 under decoration-gray-300  "
                        }`}
                    >
                        Basic
                    </span>
                    <span
                        className={`${
                            active === "contact"
                                ? "underline underline-thickness-thin underline-offset-4 decoration-blue-600"
                                : "underline underline-thickness-thin underline-offset-4 under decoration-gray-300"
                        }`}
                    >
                        Contact
                    </span>
                </div>
                <div className="justify-center">
                    <div>
                        {active === "basic" ? (
                            <Basic
                                setStateCheck={setStateCheck}
                                basicData={basicData}
                                setBasicData={setBasicData}
                                onclose={onclose}
                            />
                        ) : (
                            <Contact
                                setStateCheck={setStateCheck}
                                basicData={basicData}
                                setBasicData={setBasicData}
                                onclose={onclose}
                            />
                        )}
                    </div>
                </div>
                <div>
                    <div className="flex gap-3 justify-start">
                        {active === "contact" && (
                            <>
                                <button
                                    onClick={() => stateHandler("basic")}
                                    className={`${
                                        active === "basic"
                                            ? "bg-blue-600 text-white "
                                            : "bg-white border border-gray-800 text-gray-600"
                                    } p-2  my-2 px-5 rounded-lg -mt-10`}
                                >
                                    Back
                                </button>
                            </>
                        )}
                    </div>
                    <div className="flex justify-end">
                        {active === "basic" && (
                            <button
                                onClick={(e) => {
                                    stateHandler("contact");
                                    e.preventDefault();
                                }}
                                className={`${
                                    active === "contact"
                                        ? "bg-white text-gray-800 border-gray-600"
                                        : "bg-blue-600 border  text-white"
                                } p-2  my-2 px-5 rounded-lg`}
                            >
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
