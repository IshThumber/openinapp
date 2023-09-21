import React, { useRef } from "react";

const Form = (props) => {
    const handleChange = (e) => {
        e.preventDefault();
        props.setBasicData({
            ...props.basicData,
            [e.target.name]: e.target.value
        });
        // console.log(e.target.name, e.target.value);
    };
    console.log(props.basicData);
    // console.log(nameRef.current.value);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(props.basicData.name);
        const temp = {
            name: props.basicData.name,
            email: props.basicData.email,
            phone: props.basicData.phone,
            insta: props.basicData.insta,
            yt: props.basicData.yt
        };

        props.setBasicData(temp);

        props.onclose();

        // e.target.email.value = "";

        // formRef.current?.reset();
    };

    return (
        <>
            <div>
                <div className="flex flex-col gap-3">
                    <form onSubmit={handleSubmit}>
                        {props.active === "basic" && (
                            <>
                                <div>
                                    <label for="name">Enter Name*</label>
                                    <div className="p-2 border-1 border rounded-xl flex flex-col">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Eg. John Doe"
                                            name="name"
                                            value={props.basicData.name}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="email">Enter Email*</label>
                                    <div className="p-2 border-1 border rounded-xl flex flex-col">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Eg. johndoe@gmail.com"
                                            name="email"
                                            value={props.basicData.email}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="phone">Enter Phone*</label>
                                    <div className="p-2 border-1 border rounded-xl flex flex-col">
                                        <input
                                            onChange={handleChange}
                                            type="tel"
                                            placeholder="91999999999"
                                            name="phone"
                                            value={props.basicData.phone}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                        {props.active === "contact" && (
                            <>
                                <div>
                                    <label for="insta">Instagram</label>
                                    <div className="p-2 border-1 border rounded-xl flex flex-col">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Eg. John Doe"
                                            name="insta"
                                            value={props.basicData.insta}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="yt">Youtube</label>
                                    <div className="p-2 border-1 border rounded-xl flex flex-col">
                                        <input
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Eg. johndoe@gmail.com"
                                            name="yt"
                                            value={props.basicData.yt}
                                        />
                                    </div>
                                </div>
                                <button type="submit">Submit</button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
