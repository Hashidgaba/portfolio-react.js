import React from 'react'
import './About.css';

export default function About(props) {
  return (
    <div className='container' id='about'>
      <div className='skill-container'>
        <div className='img-cont'>
          <img src='https://media-mct1-1.cdn.whatsapp.net/v/t61.24694-24/363097372_223896063481145_5608192509917987327_n.jpg?ccb=11-4&oh=01_AdTZVrtlDHx3SycRP3NusIJW3BkKa1kkiplAwAqUQdtWTQ&oe=65C19AFD&_nc_sid=e6ed6c&_nc_cat=110' alt='my-image'></img>
          <div className='intor'>
            <p><strong>NAME:</strong>Hashid</p>
            <p> <strong>EMAIL:</strong>hashidgaba@gmail.com</p>
            <p> <strong>ROLE:</strong>web developer</p>
            <p> <strong>AGE:</strong>20</p>

          </div>

        </div>

        <h2 className='skill-1'>{props.message}</h2>
        <ul className='ul-1'>
          <li><strong>JavaScript</strong>60%
            <p>
              <div className='line-1 '>
                <div className='JS'>
                </div>
              </div>
            </p>
          </li>
          <li><strong>HTML</strong>80%
            <p>
              <div className='line-1 '>
                <div className='HTML'>
                </div>
              </div>
            </p>
          </li>
          <li><strong>CSS3</strong>75%
            <p>
              <div className='line-1 '>
                <div className='CSS'>
                </div>
              </div>
            </p>
          </li>
          <li><strong>REACT</strong>65%
            <p>
              <div className='line-1 '>
                <div className='REACT'>
                </div>
              </div>
            </p>
          </li>
        </ul>
      </div>
      <div className='about-container'>
        <h2 className='about-1'>About</h2>
        <ul>
          <li><strong>Introduction:</strong><p>Hi there! I'm Hashid gaba, a passionate development with a love for coding. Welcome to my corner of the internet.</p></li>
          <li><strong>Passions and Interests:</strong><p>Beyond the world of coding, I am deeply passionate about web developemnt. Whether it's exploring the latest tech trends, or enjoying a good book, I find inspiration in various aspects of life. </p></li>
          <li><strong>Education:</strong><p>I hold a degree in intermediate, where I gained a solid foundation in many subkects. Continuous learning is a core value of mine, and I'm always eager to explore new technologies.</p></li>
          <li><strong>Team Collaboration::</strong><p>Collaboration is at the heart of my work. I thrive in dynamic team environments and enjoy contributing my skills to create cohesive and successful projects. .</p></li>


        </ul>
      </div>
    </div>

  )
}