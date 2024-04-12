import ScrollToTop from './ScrollToTop';
import React, { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css"


function NavBar({darkMode}:{darkMode: boolean} ) {
  return (
    <nav className={darkMode? 'nav-dark': 'nav-light'}>
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


function App() {
  const [dark, setDark] = useState(false)


  function handleDark(){
    setDark(!dark)
  }

  return (
    <>
    
    <NavBar darkMode={dark}/>
  
          
          <Toggle
          onClick={handleDark}
          checked={dark}
          onChange={({ target }) => setDark(target.checked)}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode toggle"
          />
        
    
    <ScrollToTop/>

    <div id = "base">
      <h1 className={dark ? "dark-welcome" : "welcome"}>
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
      </h2>
      <a href="https://www.linkedin.com/in/vibhas-ramani-060207295/">
      <img className= "linkedIn"src="https://cdn-icons-png.flaticon.com/512/61/61109.png"></img>
      </a>
    </div>
    </>
  );
  

}



export default App
