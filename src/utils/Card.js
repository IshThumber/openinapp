import React from "react";

const Card = ({ basicData }) => {
    console.log(basicData);
    return (
        <>
            <div className="p-4 bg-orange-50 flex justify-center">
                <div>{basicData.name}</div>
            </div>
        </>
    );
};

export default Card;
