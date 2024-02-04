import React from 'react'
import './Header.css';
export default function Header() {

    document.addEventListener("scroll", scrollHandler);
    function scrollHandler() {
        const navbar = document.querySelector(".Navbar");

        const scrollY = window.scrollY;
        if (scrollY > 0) {
            navbar.style.backgroundColor = "blue";

        }
        else {
            navbar.style.backgroundColor = "black";
        }
    }

    return (
        <div className='header'>
            <div className="Navbar">
                <ul className="left">
                    <li><a href='/' className='link-1'>Home</a></li>
                    <li><a href='#about' className='link-1'>Aboout me</a></li>
                    <li><a href='#services' className='link-1'>Services</a></li>
                    <li><a href='/' className='link-1'>contact me</a></li>
                </ul>
                <div className="right">
                    <img src='https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/363097372_223896063481145_5608192509917987327_n.jpg?ccb=11-4&oh=01_AdTZVrtlDHx3SycRP3NusIJW3BkKa1kkiplAwAqUQdtWTQ&oe=65C19AFD&_nc_sid=e6ed6c&_nc_cat=110' alt='my-image'></img>

                </div>
            </div>
            <div className='header-cont' >
                <div className='cont-1'>
                    <h2 className='developer'>hey! its me developer</h2>
                    <h3>A front-end Developer</h3>
                </div>
            </div>
        </div>
    )
}