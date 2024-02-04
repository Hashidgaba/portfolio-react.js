import React from 'react'
import './service.css';
import '../index.css';
import Card from './Card';
export default function Services() {
    return (
        <div className='container-1' id='services'>
            <h2>Services</h2>
            <div className='service-cont' >
                <Card heading = "web developement" src = "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"/>
                <Card heading = "web design" src = "https://www.shutterstock.com/image-photo/web-design-studio-site-responsive-260nw-1670306362.jpg"/>
                <Card heading = "Responsiveness" src = "https://ik.imgkit.net/ikmedia/Responsive_images_EMdeg0HEP.jpg"/>
            </div>


        </div>
    )
}
