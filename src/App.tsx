import ScrollToTop from './ScrollToTop';
import React, { useState } from "react";
import axios from "axios";

function App() {
  return (
    <>
    <NavBar />
    <ScrollToTop />
    <div id = "base">
      <h1 className="welcome">
        <span>WELCOME TO MY PORTFOLIO</span>
      </h1>
    <img className="pfp" src="https://media.licdn.com/dms/image/D5603AQGa_aOwjW3t8w/profile-displayphoto-shrink_400_400/0/1696898614854?e=1717632000&v=beta&t=29zwAiFmjCLgPcKt9hmzGWsTMrXNva6GKRWYAGr1MMM" alt="Picture of Vibhas Ramani"></img>    
    </div>
    <div id = "aboutme">
    <h2 className="aboutMe">
      About Me
    </h2>
    <p className="about">
        Born and raised in the country of Jamaica, I am currently 19 years old and attending the University
        of Maryland USA. As a kid I always had big dreams to help others and solve issues which were going 
        around the world. As a result, my CS journey began with a book of inventions which I keep to this
        day. These inventions were first realized with a World Robotics Olympiad in Jamaica. I was attending
        Hillel Academy at the time and we placed second. It was exilirating. The thrill I got from participating
        in the competition, made me realize that this was what I wanted to do, and further cemented my path
        to becoming a computer science student. Subsequently I ended up joining the computer science club at
        my school and then finally pursuing a degree of computer science in the University of Maryland.
      <br></br>
      <br></br>
        In regards to other aspects of my life apart from CS, I tend to enjoy reading, exercising, playing
        the piano, journaling, playing video games and watching informational videos. I also have a passion
        for leading, speaking and helping others, as can be seen by the things listed in my resume where I founded
        the peer counselor organization in my school, delivering a welcome speech for the governor general of
        Jamaica and taking on several leadership positions at my high school.

    </p>
    </div>
    <div id = "concl" className="conclusion">
      <h2 className="closing">This doesn't have to be goodbye!
      <br></br>
      Below I have included my LinkedIn. That has my resume and with it various other ways to contact me.
      I hope to hear from you soon! Doesn't have to be profession wise, I am willing to talk about anything.
      ALSO SMASH THAT LIKE BUTTON. I can't see how many do it, but it makes me happy some will :D
      </h2>
      <a href="https://www.linkedin.com/in/vibhas-ramani-060207295/">
      <img className= "linkedIn"src="https://cdn-icons-png.flaticon.com/512/61/61109.png"></img>
      </a>
      <br></br>
      <LikeButton />
    </div>
    </>
  );
  
}

function NavBar() {
  return (
    <nav>
      <div>
        <h1 className="logo">Portfolio</h1>
      </div>
      <ul className="nav-links">
        <li>
          <a href = "#base">
          Home
          </a>
        </li>
        <li className="aboutLink">
          <a href = "#aboutme">
          About
          </a>
        </li>
        <li>
          <a href="#concl">
          Contact
          </a>
        </li>
      </ul>
    </nav>
    
  );
}

function LikeButton() {
  const [click, setClick] = useState(0)

  function HandleClick() {
    setClick(click + 1)
    axios.post("http://localhost:8000/add")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error:", error);
      })
  }
  return (
  <>
  <button className='likeButton' onClick={HandleClick}>
    <img className='like' src="https://cdn.freebiesupply.com/logos/large/2x/like-button-facebook-logo-png-transparent.png" alt="" />
  </button>
  <br></br>
  <button className='count'>
    {click}
  </button>
  </>
  )
}

export default App