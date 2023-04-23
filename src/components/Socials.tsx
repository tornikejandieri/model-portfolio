import {AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";
import React from "react";

const Socials = () => {
    return (<div >
        <a style={{width: 30, height: "auto"}} href="https://www.facebook.com/irinka.irinka.92775"
           target="_blank"><AiOutlineFacebook size={30}/></a>
        <a style={{width: 30, height: "auto"}} href="https://www.instagram.com/irina.jandieri/"
           target="_blank"><AiOutlineInstagram size={30}/></a>
    </div>)
}

export default Socials;