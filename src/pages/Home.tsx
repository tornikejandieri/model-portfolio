import React from "react";
import {Link} from 'react-router-dom'


const Home = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div className="hero-message" style={{marginTop: '20%'}}>
                <h1>
                    Hello
                </h1>
                <p>
                    I'm Irina Jandieri, Freelance model based in Tbilisi, Georgia
                    <br/>

                </p>
                <Link to="/contact" style={{marginTop: 10, textDecoration: 'none', backgroundColor: "#b484e8", color: 'white', border: 'none', fontSize: 18, borderRadius: 5, padding: 10}}>Hire Me</Link>
            </div>
            <div className="hero-image">
                <img style={{width: 500, height: 'auto', borderRadius: 5}} src="/images/2.jpeg"/>
            </div>
            
        </div>
    );
}

export default Home;