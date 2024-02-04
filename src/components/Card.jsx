import React from 'react'
export default function card(props) {
    return (
        <div>
            <div className='development'>
                <div className='img'>
                   <img src={props.src}></img>
                </div>
                <h3>{props.heading}</h3>
                <p> I bring a wealth of experience and passion to help you establish a powerful online presence.From crafting visually stunning websites to developing functional web applications, my goal is to bring your digital vision to life. </p>

            </div>
        </div>
    )
}