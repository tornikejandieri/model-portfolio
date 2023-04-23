import React from 'react';
import Socials from "./Socials";
import {Link} from 'react-router-dom'




const Header = () => {
    return (
        <div className='header-container' style={{width: '100%', backgroundColor: 'transparent'}}>
            <div style={{display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
                <div className='links' style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to="/" style={{
                        textDecoration: 'none',
                        fontFamily: 'trebuchet ms',
                        fontWeight: 'bold',
                        fontSize: 30,
                        margin: 10,
                        color: 'black'
                    }}>IRINA JANDIERI</Link>
                    <div style={{margin: 10}}>
                        <Link to="/about" style={{
                            textDecoration: 'none',
                            border: 'none',
                            fontSize: 25,
                            fontFamily: 'trebuchet ms',
                            backgroundColor: 'transparent',
                            color: '#333',
                            marginRight: 10,
                            marginLeft: 10
                        }}>About</Link>
                        <Link to="/contact" style={{
                            textDecoration: 'none',
                            border: 'none',
                            fontSize: 25,
                            fontFamily: 'trebuchet ms',
                            backgroundColor: 'transparent',
                            color: '#333',
                            marginRight: 10,
                            marginLeft: 10
                        }}>Contact</Link>
                        <Link to="/gallery" style={{
                            textDecoration: 'none',
                            border: 'none',
                            fontSize: 25,
                            fontFamily: 'trebuchet ms',
                            backgroundColor: 'transparent',
                            color: '#333',
                            marginRight: 10,
                            marginLeft: 10
                        }}>Gallery</Link>
                    </div>
                </div>
                <div className='icons' style={{display: "flex", justifyContent: "flex-end", margin: 15}}>
                    <Socials/>
                </div>

            </div>
            <div className='line' style={{width: '100%', height: 1, backgroundColor: '#999'}}></div>
        </div>
    );
}

export default Header;