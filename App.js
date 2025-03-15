/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */


/*CLASS COMPONENT 
import React, { Component } from 'react';
class myapp extends Component {
  state = { 
    a:10,
    b:20
   } 
  render() { 
    return (
      <div id="container">
        <h1>the sum of two values are {this.state.a + this.state.b}</h1>
      </div>
    );
  }
}
 
export default myapp;

//FUNCTION COMPONENT
import React, { Component } from 'react';
function myapp() {
  return (  );
}

export default myapp;*/
/* import React, { Component } from "react";

class StudentName extends Component {
  render() {
    return (
      <div>
        <h1>Student Name Details</h1>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <li>{this.props.data.name}</li>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [{ name: "Abhishek" }, { name: "SWAYAM" }, { name: "Ajay" }],
    };
  }

  render() {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map((item, index) => (
            <List key={index} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App; */
/* import React, { Component } from 'react';  
class App extends Component {  
 constructor() {  
      super();        
      this.state = { displayBio: true };  
      }  
      render() {  
          const bio = this.state.displayBio ? (  
              <div>  
                  <p><h3>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h3></p>   
            </div>  
              ) : null;  
              return (  
                  <div>  
                      <h1> Welcome to JavaTpoint!! </h1>  
                      { bio }   
                  </div>  
              );  
     }  
}  
export default App;  
 */
/* import React, { Component } from 'react';  
class App extends React.Component {  
 constructor() {  
      super();        
      this.state = { displayBio: false };  
      console.log('Component this', this);  
      this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
      }  
      toggleDisplayBio(){  
          this.setState({displayBio: !this.state.displayBio});  
          }  
      render() {  
          return (  
              <div>  
                  <h1>Welcome to JavaTpoint!!</h1>  
                  {  
                      this.state.displayBio ? (   
                          <div>  
                              <p><h4>Javatpoint is one of the best Java training institute in Noida, Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of experienced Java developers and trainers from multinational companies to teach our campus students.</h4></p>  
                              <button onClick={this.toggleDisplayBio}> Show Less </button>  
                        </div>  
                          ) : (  
                              <div>  
                                  <button onClick={this.toggleDisplayBio}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default App;   */
/* import React, { Component } from 'react';  
class App extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            personGoing: true,  
            numberOfPersons: 5  
        };  
        this.handleInputChange = this.handleInputChange.bind(this);  
   }  
   handleInputChange(event) {  
       const target = event.target;  
       const value = target.type === 'checkbox' ? target.checked : target.value;  
       const name = target.name;  
       this.setState({  
           [name]: value  
       });  
  }  
  render() {  
      return (  
          <form>  
              <h1>Multiple Input Controlled Form Example</h1>  
              <label>  
                  Is Person going:  
                  <input  
                    name="personGoing"  
                    type="checkbox"  
                    checked={this.state.personGoing}  
                    onChange={this.handleInputChange} />  
             </label>  
             <br />  
             <label>  
                 Number of persons:  
                 <input  
                 name="numberOfPersons"  
                 type="number"  
                 value={this.state.numberOfPersons}  
                 onChange={this.handleInputChange} />  
             </label>  
         </form>  
     );  
  }  
}  
export default App;   */

/* import React, { Component } from 'react';    
// Message Component   
function Message(props)   
{   
    if (props.isLoggedIn)   
        return <h1>Welcome Back!!!</h1>;   
    else  
        return <h1>Please Login First!!!</h1>;   
}   
// Login Component   
function Login(props)   
{   
   return(   
           <button onClick = {props.clickInfo}> Login </button>   
       );   
}    
// Logout Component   
function Logout(props)   
{   
    return(   
           <button onClick = {props.clickInfo}> Logout </button>   
       );   
}   
class App extends Component{    
   constructor(props)   
    {   
        super(props);    
        this.handleLogin = this.handleLogin.bind(this);  
          this.handleLogout = this.handleLogout.bind(this);   
      this.state = {isLoggedIn : false};   
    }   
   handleLogin()   
    {   
        this.setState({isLoggedIn : true});   
    }   
    handleLogout()   
    {   
        this.setState({isLoggedIn : false});   
    }   
    render(){   
        return(   
            <div>   
        <h1> Conditional Rendering Example </h1>  
                <Message isLoggedIn = {this.state.isLoggedIn}/>               
                {   
                    (this.state.isLoggedIn)?(   
                    <Logout clickInfo = {this.handleLogout} />   
                    ) : (   
                    <Login clickInfo = {this.handleLogin} />   
                    )   
                }   
            </div>         
            );   
    }   
}   
export default App;     */
/*
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`portfolio ${darkMode ? "dark" : "light"} ${scrollPosition > 300 ? "scrolled" : ""}`}>
      {// Toggle Button }
      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      
      // Home Section //
      <section className="home">
        <h1>Your Name</h1>
        <p>Your tagline or profession</p>
        <a href="/resume.pdf" download className="resume-btn">Download Resume</a>
      </section>

      // About Section //
      <section className="about">
        <h2>About Me</h2>
        <p>Write something about yourself.</p>
      </section>

      {// Skills Section //}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">ReactJS</div>
        </div>
      </section>

      // Projects Section //
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project">Project 1</div>
          <div className="project">Project 2</div>
          <div className="project">Project 3</div>
        </div>
      </section>

      //{ Certificates Section //}
      <section className="certificates">
        <h2>Certificates</h2>
        <div className="certificate-grid">
          <div className="certificate">
            <img src="/certificates/sql_certificate.jpg" alt="SQL Certificate" />
            <p>SQL Certification</p>
          </div>
          <div className="certificate">
            <img src="/certificates/react_certificate.jpg" alt="React Certificate" />
            <p>ReactJS Certification</p>
          </div>
        </div>
      </section>

      {// Contact Section //}
      <section className="contact">
        <h2>Contact</h2>
        <p>Add your social media links here.</p>
      </section>
    </div>
  );
};

export default App;*/
/* import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const certificates = [
    { 
      title: "SQL basic certificate", 
      imgSrc: "https://i.postimg.cc/tJxxQPQC/sql-basic-certificate.jpg" // Replace with actual image URL
    },
    { title: "Certificate 2", imgSrc: "https://via.placeholder.com/250" },
    { title: "Certificate 3", imgSrc: "https://via.placeholder.com/250" },
    { title: "Certificate 4", imgSrc: "https://via.placeholder.com/250" },
  ];

  return (
    <div className={`portfolio-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      
      <section className="white-section">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to My Portfolio
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          Scroll down to see my certifications.
        </motion.p>
      </section>

      <motion.div className="transition-effect" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} />

      <section className="black-section">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          About Me
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          I am a passionate web developer with a focus on creating seamless digital experiences.
        </motion.p>
      </section>

      <section className="certificate-section">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Certificates
        </motion.h2>
        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <motion.div key={index} className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={cert.imgSrc} alt={cert.title} className="certificate-img" />
              <p>{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="resume-container">
        <motion.a href="#" className="resume-btn" download whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

export default App;
 */import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percentage = scrollY / maxScroll;
      document.body.style.backgroundColor = `rgb(${255 - percentage * 255}, ${255 - percentage * 255}, ${255 - percentage * 255})`;
      document.body.style.color = percentage > 0.5 ? "white" : "black";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const certificates = [
    { title: "SQL Basic", imgSrc: "https://i.postimg.cc/tJxxQPQC/sql-basic-certificate.jpg" },
    { title: "SQl Intermediate", imgSrc: "https://i.postimg.cc/VsTN7P95/sql-intermediate-certificate-page-0001.jpg" },
    { title: "flipkart Grid", imgSrc: "https://i.postimg.cc/Jhv1pbJv/flipkart-grid.jpg" },
    { title: "Devolution", imgSrc: "https://i.postimg.cc/fLYh51MS/devolution.jpg" },
  ];

  return (
    <div className={`portfolio-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Profile Section */}
      <section className="profile-section">
        <motion.img
          src="https://i.postimg.cc/HkpYPYN0/profile-photo.jpg" // Replace with actual profile photo
          alt="Profile"
          className="profile-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          John Doe
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          A passionate web developer dedicated to creating stunning, user-friendly experiences.
        </motion.p>
      </section>

      {/* Introduction Section */}
      <section className="white-section">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to My Portfolio
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          Here, you’ll find information about my work, projects, and certifications. I strive to build responsive and accessible websites that create seamless digital experiences.
        </motion.p>
      </section>

      {/* About Me Section */}
      <section className="black-section">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          About Me
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          I specialize in front-end development, particularly in React.js, HTML, CSS, and JavaScript. I love designing intuitive user interfaces and crafting smooth animations with Framer Motion.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.8 }}>
          Beyond coding, I enjoy solving complex problems, learning new technologies, and contributing to open-source projects. My goal is to continuously improve and push boundaries in web development.
        </motion.p>
      </section>

      {/* Certificates Section */}
      <section className="certificate-section">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Certificates
        </motion.h2>
        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <motion.div key={index} className="certificate-card" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <img src={cert.imgSrc} alt={cert.title} className="certificate-img" />
              <p>{cert.title}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Download */}
      <div className="resume-container">
        <motion.a href="#" className="resume-btn" download whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          Download Resume
        </motion.a>
      </div>
    </div>
  );
};

export default App;
