import React from 'react'
import './Header.css';
import '../index.css';

export default function Header() {

    document.addEventListener("scroll", scrollHandler);
    function scrollHandler() {
        const navbar = document.querySelector(".Navbar");
        function getRandomColor() {
            let val1 = Math.ceil(0 + Math.random() * 255);
            let val2 = Math.ceil(0 + Math.random() * 255);
            let val3 = Math.ceil(0 + Math.random() * 255);
            return `rgb(${val1} ${val2} ${val3})`

        }

        const scrollY = window.scrollY;
        if (scrollY > 0) {
            navbar.style.backgroundColor = getRandomColor();

        }
        else {
            navbar.style.backgroundColor = "black";
        }
    }

    return (
        <div className='header' id='home'>
            <div className="Navbar">
                <ul className="left">
                    <li ><a heref='#header' className='link-1'>Home</a></li>
                    <li><a href='#about' className='link-1'>Aboout me</a></li>
                    <li><a href='#services' className='link-1'>Services</a></li>
                    <li><a href='#contact' className='link-1'>contact </a></li>
                </ul>
                <div className="right">
                    <img src='https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/363097372_223896063481145_5608192509917987327_n.jpg?ccb=11-4&oh=01_AdRx3V-cbcK26MziLJI6LF5UCykm-R1L9cfskm--cE7Cgg&oe=65D1A53D&_nc_sid=e6ed6c&_nc_cat=110'></img>



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