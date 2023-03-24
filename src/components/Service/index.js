import './index.css'

const Service = () => (
  <div className="service-bg">
    <h1 className="about-heading ">Service</h1>
    <h2 className="service-heading1">What I do</h2>
    <ul className="ul-list">
      <li className="service-card">
        <img
          src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679645981/1_samohf.png"
          alt="python"
          className="service-logo"
        />

        <h1 className="service-heading">Static Websites</h1>
        <p className="para">
          A Static Website contains Web pages with fixed content. Each page is
          developed using HTML and CSS and displays the same information to
          every visitor.
        </p>
      </li>
      <li className="service-card">
        <img
          src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679645981/2_lgpre4.png"
          alt="python"
          className="service-logo"
        />
        <h1 className="service-heading">Responsive Web design</h1>
        <p className="para">
          Responsive Web design is the approach that suggests that design and
          development should respond to the user’s behaviour and environment
          based on screen size, platform and orientation.
        </p>
      </li>
      <li className="service-card">
        <img
          src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679645981/3_vfc2n1.png"
          alt="python"
          className="service-logo"
        />
        <h1 className="service-heading">Customisable Layouts</h1>
        <p className="para">
          Customisable sites are templates with set layouts. You may be able to
          change photos and colors, but your site will look similar to many
          other sites due to the template. The same goes for...
        </p>
      </li>
      <li className="service-card">
        <img
          src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679645981/4_ajltbo.png"
          alt="python"
          className="service-logo"
        />
        <h1 className="service-heading">Web Developer</h1>
        <p className="para">
          A web developer is a programmer who develops World Wide Web
          applications using a client–server model. The applications typically
          use HTML, CSS, and JavaScript in the client, and any general-purpose
          programming language in the server. HTTP is used for communications
          between client and server.
        </p>
      </li>
      <li className="service-card">
        <img
          src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679645981/5_x4yfp4.png"
          alt="python"
          className="service-logo"
        />
        <h1 className="service-heading">Full-stack Developer</h1>
        <p className="para">
          A full-stack developer is a developer or engineer who can build both
          the front end and the back end of a website. The front end (the parts
          of a website a user sees and interacts with) and the back end (the
          behind-the-scenes data storage and processing) require different skill
          sets.
        </p>
      </li>
      <li className="service-card">
        <img
          src="https://res.cloudinary.com/dxvsvzsai/image/upload/v1679645982/6_twkqw7.webp"
          alt="python"
          className="service-logo"
        />
        <h1 className="service-heading">Front-end Developer</h1>
        <p className="para">
          A front-end developer creates websites and applications using web
          languages such as HTML, CSS, and JavaScript that allow users to access
          and interact with the site or app. When you visit a website, the
          design elements you see were created by a front-end developer.
        </p>
      </li>
    </ul>
  </div>
)

export default Service
