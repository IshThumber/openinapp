import React from "react";

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
        props.setStateCheck(true);

        props.onclose();

        // e.target.email.value = "";

        // formRef.current?.reset();
    };
    let active = props.active;
    return (
        <>
            <div>
                <div className="flex flex-col gap-3">
                    <form onSubmit={handleSubmit}>
                        {props.active === "basic" && (
                            <>
                                <div className="gap-3 flex flex-col">
                                    <div>
                                        <label forHTML="name">
                                            Enter Name*
                                        </label>
                                        <div className="p-2 border-1 border rounded-xl flex flex-col">
                                            <input
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Eg. John Doe"
                                                name="name"
                                                value={props.basicData.name}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label forHTML="email">
                                            Enter Email*
                                        </label>
                                        <div className="p-2 border-1 border rounded-xl flex flex-col">
                                            <input
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Eg. johndoe@gmail.com"
                                                name="email"
                                                value={props.basicData.email}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label forHTML="phone">
                                            Enter Phone*
                                        </label>
                                        <div className="p-2 border-1 border rounded-xl flex flex-col">
                                            <input
                                                onChange={handleChange}
                                                type="tel"
                                                placeholder="91999999999"
                                                name="phone"
                                                value={props.basicData.phone}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {props.active === "contact" && (
                            <>
                                <div className="flex flex-col gap-4">
                                    <div className="gap-3 flex flex-col justify-between">
                                        <div>
                                            <label forHTML="insta">
                                                Instagram Link (Optional)
                                            </label>
                                            <div className="p-2 border-1 border rounded-xl flex flex-col">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Eg. instagram.com/johndoe"
                                                    name="insta"
                                                    value={
                                                        props.basicData.insta
                                                    }
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label forHTML="yt">
                                                Youtube Link (Optional)
                                            </label>
                                            <div className="p-2 border-1 border rounded-xl flex flex-col">
                                                <input
                                                    onChange={handleChange}
                                                    type="text"
                                                    placeholder="Eg. youtube.com/johndoe"
                                                    name="yt"
                                                    value={props.basicData.yt}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-blue-600 border text-white
                                            p-2 my-2 px-5 rounded-lg"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;
