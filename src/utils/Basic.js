import React from "react";
import Form from "./Form";

const Basic = (props) => {
    return (
        <>
            <Form
                setStateCheck={props.setStateCheck}
                active="basic"
                basicData={props.basicData}
                setBasicData={props.setBasicData}
                onclose={props.onclose}
            />
        </>
    );
};

export default Basic;
