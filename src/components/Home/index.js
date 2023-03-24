import {Component} from 'react'

import Header from '../Header'
import About from '../About'
import Skills from '../Skills'
import Projects from '../Projects'
import Service from '../Service'
import Footer from '../Footer'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="profile-bg">
          <div className="profile-card">
            <img
              src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679634158/WhatsApp_Image_2023-03-24_at_10.31.52_sxflkx.jpg"
              alt="profile"
              className="profile1"
            />
            <div>
              <h1 className="name">
                Hello, I am <br />
                <span className="name-span"> Srinivasulu Nagalapuram</span>
              </h1>
              <h2 className="role">Full Stack Developer</h2>
            </div>
            <img
              src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679634158/WhatsApp_Image_2023-03-24_at_10.31.52_sxflkx.jpg"
              alt="profile"
              className="profile"
            />
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Service />
        <Footer />
      </div>
    )
  }
}

export default Home
