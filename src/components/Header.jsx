import React from 'react'
import './Header.css';
export default function Header() {

    document.addEventListener("scroll", scrollHandler);
    function scrollHandler() {
        const navbar = document.querySelector(".Navbar");
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            navbar.style.backgroundColor = "rgb(5, 5, 49)";

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
                    <img src='https://media.istockphoto.com/id/1453953453/photo/strategy-of-diversified-investment.jpg?s=612x612&w=0&k=20&c=GdKGA5EuK0QfKm76ExjkK64iPZLuTUOyIDQlXs-ZRQM=' alt='image' width={"50px"}></img>
                </div>
            </div>
            <div className='header-cont' >
                <div className='cont-1'>
                    <h2>hey! its me developer</h2>
                    <h3>A front-end Developer</h3>
                </div>
            </div>
        </div>
    )
}