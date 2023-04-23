import React from "react";
import Socials from "../components/Socials";

const Contact = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{fontFamily: 'trebuchet ms'}}>Contact me</h1>
            <p>You can write me directly on my socials,
                <br/>
                links are down below</p>
            <Socials />
            <p>Or to my email</p>
            <p>irinkajandieri@gmail.com</p>


        </div>
    );
}

export default Contact;