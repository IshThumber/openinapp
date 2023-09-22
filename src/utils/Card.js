import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import React from "react";

const Card = ({ basicData }) => {
    // console.log(basicData);

    const name = basicData.name ? basicData.name : "Name";
    const email = basicData.email ? basicData.email : "Email";
    const phone = basicData.phone ? basicData.phone : "Phone";

    let link = basicData.insta ? basicData.insta : "Instagram";
    let insta;
    const parts = link.split("/"); // Split the string by '/' character
    if (parts.length > 1) {
        insta = parts[1];
    }

    let link2 = basicData.yt ? basicData.yt : "Youtube";
    let yt;
    const parts2 = link2.split("/"); // Split the string by '/' character
    if (parts2.length > 1) {
        yt = parts2[1];
    }

    return (
        <>
            <div className="flex flex-col justify-between items-center h-full w-full mt-3">
                <div className="p-4 text-lg font-bold">{name}</div>
                <div className="flex flex-row gap-5 p-3 w-full justify-between px-16 items-center text-sm">
                    <div className="p-2 w-1/2">
                        <div className="gap-6 flex flex-col">
                            <div className="flex flex-row gap-3 items-center">
                                <span className="p-2 rounded-full bg-green-50">
                                    <Phone size={16} color="green" />
                                </span>
                                <span>{phone}</span>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <span className="p-2 rounded-full bg-purple-100">
                                    <Mail size={16} color="purple" />
                                </span>
                                <span>{email}</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="gap-6 flex flex-col">
                            <div className="flex flex-row gap-3 items-center">
                                <span className="p-2 rounded-full bg-red-100">
                                    <Instagram size={16} color="red" />
                                </span>
                                <span>{insta}</span>
                            </div>
                            <div className="flex flex-row gap-3 items-center">
                                <span className="p-2 rounded-full bg-red-100">
                                    <Youtube size={16} color="red" />
                                </span>
                                <span>{yt}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
