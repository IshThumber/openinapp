import {
    PieChart,
    Settings,
    ArrowDownUp,
    Clock2,
    Hourglass
} from "lucide-react";
import React from "react";

const Sidebar = () => {
    return (
        <>
            <div className="bg-blue-600 p-3 h-full m-4 rounded-lg flex flex-col justify-between">
                <h1 className="text-left ml-6 mt-6 font-bold text-3xl text-slate-100">
                    Boards.
                </h1>

                <div className="flex justify-between flex-col ">
                    <div className="flex flex-col text-left mb-64">
                        <div className="relative w-full p-3 my-2 mt-16 items-center flex flex-row gap-4 text-sm hover:text-white text-slate-200 cursor-pointer">
                            <span>
                                <PieChart size={18} />
                            </span>
                            <span>Dashboard</span>
                        </div>
                        <div className="relative w-full  p-3 my-2 items-center flex flex-row gap-4 text-sm hover:text-white text-slate-200 cursor-pointer">
                            <span>
                                <Hourglass size={18} />
                            </span>
                            <span>Remaining Quota</span>
                        </div>
                        <div className="relative w-full  p-3 my-2 items-center flex flex-row gap-4 text-sm hover:text-white text-slate-200 cursor-pointer">
                            <span>
                                <Clock2 size={18} />
                            </span>
                            <span>Refreshes in</span>
                        </div>
                        <div className="relative w-full  p-3 my-2 items-center flex flex-row gap-4 text-sm hover:text-white text-slate-200 cursor-pointer">
                            <span>
                                <ArrowDownUp size={18} />
                            </span>
                            <span>Updated on</span>
                        </div>
                        <div className="relative w-full  p-3 my-2 items-center flex flex-row gap-4 text-sm hover:text-white text-slate-200 cursor-pointer">
                            <span>
                                <Settings size={18} />
                            </span>
                            <span>Settings</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col text-xs  gap-4 justify-center my-10 p-2 px-2">
                            <span className="hover:text-white text-slate-300 cursor-pointer">
                                Help
                            </span>
                            <span className="hover:text-white text-slate-300 cursor-pointer">
                                Contact us
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
