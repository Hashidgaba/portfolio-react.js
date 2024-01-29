import React from 'react'
import './contact.css';

export default function Contact() {
    return (
        <div className='contact-cont'>
            <div className='left-1'>
                <form className='form-1'>
                    <h2 class="heading">Get in touch with Me</h2>

                    <div class="box-1">
                        <input type="text" placeholder="Name" title="username" />
                    </div>
                    <div class="box-1">

                        <input type="email" placeholder="Email" title="Email" />

                    </div>
                    <div class="box-1">
                        <textarea rows="5" cols="50" placeholder="Message" title="write your thoughts"></textarea>
                    </div>
                    <div class="btn">
                        <input type="submit" title="send Now" />
                        <input type="reset" title="Reset" />
                    </div>
                </form>
            </div>
        </div>
    )
}
