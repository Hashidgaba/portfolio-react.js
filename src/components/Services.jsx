import React from 'react'
import './service.css';

export default function Services() {
    return (
        <div className='container-1' id='services'>
            <h2>Services</h2>
            <div className='service-cont'>
                <div className='development'>
                    <div className='img'>
                    <img src='https://www.shutterstock.com/image-photo/web-development-coding-programming-internet-260nw-1141706672.jpg' width={"50px"}></img>
                    </div>
                    <h3>web development</h3>
                   <p> I bring a wealth of experience and passion to help you establish a powerful online presence.From crafting visually stunning websites to developing functional web applications, my goal is to bring your digital vision to life. </p>
                    
                </div>
                <div className='development '>
                    <img src='https://www.shutterstock.com/image-photo/web-design-studio-site-responsive-260nw-1670306362.jpg'></img>
                    <h3>web Desingn</h3>
                    <p>"Web design is the art and science of creating visually appealing and user-friendly websites.</p>
                </div>
                
                <div className='development'>
                    <img src='https://ik.imgkit.net/ikmedia/Responsive_images_EMdeg0HEP.jpg'></img>
                    <h3>Responsivness</h3>
                    <p>I recognize the importance of responsive web design in creating a positive and inclusive user experience. </p>
                </div>
                
                
            </div>
            

        </div>
    )
}
