import {HiPhone} from 'react-icons/hi'
import {FiMail} from 'react-icons/fi'
import {BiMap} from 'react-icons/bi'
import {AiFillLinkedin, AiOutlineCopyrightCircle} from 'react-icons/ai'

import './index.css'

const Footer = () => (
  <div className="footer-bg1">
    <div className="footer-bg">
      <div className="footer-card">
        <div className="photo-name">
          <img
            src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679634158/WhatsApp_Image_2023-03-24_at_10.31.52_sxflkx.jpg"
            alt="footer-img"
            className="footer-img"
          />
          <div className="footer-list">
            <h2 className="footer-names">Srinivasulu Nagalapuram</h2>
            <p className="call-details2">MERN Stack Developer</p>
          </div>
        </div>

        <div className="footer-list">
          <h2 className="footer-names">Phone No.</h2>
          <div className="footer-name-tab">
            <HiPhone size={20} color="white" />
            <p className="call-details">+91 77022XXXXX</p>
          </div>
        </div>
        <div className="footer-list">
          <h2 className="footer-names">E-Mail</h2>
          <div className="footer-name-tab">
            <FiMail size={20} color="white" />
            <p className="call-details">nagalapuramsrinu14@gmail.com</p>
          </div>
        </div>
        <div className="footer-list">
          <h2 className="footer-names">Address</h2>
          <div className="footer-name-tab">
            <BiMap size={20} color="white" />
            <p className="call-details">Sri Kalahasti, Chittoor, AP</p>
          </div>
        </div>
      </div>
      <div className="footer-list1">
        <h2 className="footer-names">Follow Me</h2>
        <div className="footer-name-tab">
          <AiFillLinkedin size={20} color="white" />
          <a
            href="https://www.linkedin.com/in/srinivasulu-nagalapuram"
            target="_blank"
            rel="noreferrer"
            className="call-details1"
          >
            View Linkedin Profile
          </a>
        </div>
      </div>
    </div>
    <hr className="line" />
    <div className="copy-right-tab">
      <AiOutlineCopyrightCircle color="white" size={20} />
      <p className="copy-right">Copyright 2023 by Srinivasulu Nagalapuram</p>
    </div>
  </div>
)

export default Footer
