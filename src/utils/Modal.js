import React, { useState } from "react";
import Basic from "./Basic";
import Contact from "./Contact";

const Modal = ({ onclose, basicData, setBasicData }) => {
    const [active, setActive] = useState("basic");
    const stateHandler = (curr) => {
        setActive(curr);
    };
    return (
        <>
            <div>
                <div>
                    <div>Add New </div>
                    <button onClick={onclose}>close</button>
                </div>
                <div className="flex gap-8 justify-center">
                    <span
                        className={`${
                            active === "basic"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600"
                        }`}
                    >
                        Basic
                    </span>
                    <span
                        className={`${
                            active === "contact"
                                ? "bg-blue-600 text-white"
                                : "bg-white text-blue-600"
                        }`}
                    >
                        Contact
                    </span>
                </div>
                <div className="justify-center">
                    <div>
                        {active === "basic" ? (
                            <Basic
                                basicData={basicData}
                                setBasicData={setBasicData}
                                onclose={onclose}
                            />
                        ) : (
                            <Contact
                                basicData={basicData}
                                setBasicData={setBasicData}
                                onclose={onclose}
                            />
                        )}
                    </div>
                </div>

                <div className="flex gap-3 justify-end">
                    {active === "contact" && (
                        <>
                            <button
                                onClick={() => stateHandler("basic")}
                                className={`${
                                    active === "basic"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-blue-600"
                                } p-2 rounded-lg`}
                            >
                                Back
                            </button>

                            <button
                                onClick={() => stateHandler("contact")}
                                className={`${
                                    active === "contact"
                                        ? "bg-blue-600 text-white"
                                        : "bg-white text-blue-600"
                                } p-2 rounded-lg`}
                            >
                                Submit
                            </button>
                        </>
                    )}

                    {active === "basic" && (
                        <button
                            onClick={(e) => {
                                stateHandler("contact");
                                e.preventDefault();
                            }}
                            className={`${
                                active === "contact"
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-blue-600"
                            } p-2 rounded-lg`}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Modal;
