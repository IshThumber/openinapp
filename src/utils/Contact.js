import React from "react";
import Form from "./Form";

const Contact = (props) => {
    return (
        <>
            <Form
                setStateCheck={props.setStateCheck}
                active="contact"
                basicData={props.basicData}
                setBasicData={props.setBasicData}
                onclose={props.onclose}
            />
        </>
    );
};

export default Contact;
