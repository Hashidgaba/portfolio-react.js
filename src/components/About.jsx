import React from 'react'
import './About.css';
import '../index.css';

const About = () => {
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


        <div className='skill-1'>
          <h2 className='center'>Skill</h2>
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
      </div>
      <div className='about-container'>
        <h2 className='center'>About</h2>
        <p>
          "I am a motivated and passionate individual with a strong desire to make a positive impact. My diverse background and experiences have equipped me with a unique set of skills, allowing me to approach challenges with creativity and adaptability. Whether working independently or collaboratively, I am dedicated to achieving excellence in all endeavors. With a keen interest in web development, I am committed to continuous learning and growth. I thrive in dynamic environments, embracing opportunities to contribute innovative ideas and solutions. As a person who values integrity and teamwork, I am excited about the prospect of making meaningful contributions to any project or community I engage with."
        </p>
      </div>
    </div>

  );
};
export default About;