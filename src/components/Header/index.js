import {Component} from 'react'

import {BsList} from 'react-icons/bs'

import './index.css'

class Header extends Component {
  state = {listStatus: false}

  onClickList = () => {
    this.setState(prevState => ({listStatus: !prevState.listStatus}))
  }

  render() {
    const {listStatus} = this.state
    return (
      <div className="header-bg">
        <h1 className="header-heading">My Portfolio</h1>

        <button className="list-btn" type="button" onClick={this.onClickList}>
          <BsList color="black" />
        </button>

        <ul className="header-ul-list">
          <a href="aboutSectionId">
            <li className="list-items">Home</li>
          </a>

          <li className="list-items">About me</li>
          <li className="list-items">Skills</li>
          <li className="list-items">Projects</li>
          <li className="list-items">Service</li>
          <li className="list-items">Contact</li>
        </ul>
      </div>
    )
  }
}

export default Header
