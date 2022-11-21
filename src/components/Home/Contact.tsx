import React from "react";
import Envelope from "../Icons/Envelope";
import Phone from "../Icons/Phone";

const Contact = () => {
    return (
        <section className="container">
            <h2>Contact</h2>
            <div className="max-w-max mx-auto flex flex-col gap-4 content-top-margin">
                <div className="flex gap-4">
                    <Envelope />
                    <a href="mailto: surendranjagadeesh@gmail">surendranjagadeesh@gmail.com</a>
                </div>
                <div className="flex gap-4">
                    <Phone />
                    <a href="tel:+919945130349 ">+91-9945130349</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
