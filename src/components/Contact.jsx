import React from 'react'
import './contact.css';
import '../index.css';

export default function Contact() {
    return (
        <div className='contact-cont' id='contact'>

            <div className='right-1'>
                <h2>HIT ME THROUGH SOCIAL MEDIA</h2>
                <p>you gyes can also get in touch with me through any social mdia </p>
                <div className='links'>
                    <ul className='facebook'>
                        <li>
                            <a href='https://www.facebook.com/hashidgaba' target='blank'><i class="fa-brands fa-facebook"></i>HIT ME ON FACEBOOK</a>
                        </li>
                    </ul>
                    <ul className='facebook'>
                        <li>
                            <a href='https://www.linkedin.com/in/hashid-gaba-7324892a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'><i class="fa-brands fa-linkedin"></i>HIT ME ON LINKEDIN</a>
                        </li>
                    </ul>
                    <ul className='facebook'>
                        <li>
                            <a href='https://github.com/Hashidgaba' target='blank'><i class="fa-brands fa-github"></i>HIT ME ON GITHUB</a>
                        </li>
                    </ul>
                    <ul className='facebook'>
                        <li>
                            <a href='https://www.instagram.com/hashidgaba?igsh=MTRmMTI1ejByMDJiZw==' target='blank'><i class="fa-brands fa-instagram"></i>HIT ME ON INSTAGRAM</a>
                        </li>
                    </ul>
                </div>
            </div>
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
