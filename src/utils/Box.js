import React from "react";

const Box = ({ name, icon, title, color }) => {
    return (
        <>
            <div className="w-1/6 p-3 px-4 bg-white m-3 flex flex-col gap-3 border border-gray-700 rounded-xl shadow-xl">
                <div className="flex flex-row items-center gap-3">
                    <span className={`bg-${color}-200 p-2 rounded-full`}>
                        {icon}
                    </span>
                    <span className="text-sm">{title}</span>
                </div>
                <span className="text-xs">{name}</span>
            </div>
        </>
    );
};

export default Box;
