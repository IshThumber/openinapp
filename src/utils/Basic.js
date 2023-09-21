import React, { useState } from "react";
import Form from "./Form";

const Basic = (props) => {
    return (
        <>
            <Form
                active="basic"
                basicData={props.basicData}
                setBasicData={props.setBasicData}
                onclose={props.onclose}
            />
        </>
    );
};

export default Basic;
