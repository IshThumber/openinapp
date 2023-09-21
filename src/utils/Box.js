import React from "react";

const Box = ({ name, icon }) => {
    return (
        <>
            <div className="w-1/6 p-3 bg-white m-3 flex flex-col gap-3 rounded-xl">
                <span className="">{icon}</span>
                <span className="text-sm">{name}</span>
            </div>
        </>
    );
};

export default Box;
