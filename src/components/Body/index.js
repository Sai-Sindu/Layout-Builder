// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar-card">
              <h1 className="body-card-title">Left Navbar Menu</h1>
              <ul className="items-card">
                <li className="body-card-text">Item 1</li>
                <li className="body-card-text">Item 2</li>
                <li className="body-card-text">Item 3</li>
                <li className="body-card-text">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="show-content-card">
              <h1 className="body-card-title">Content</h1>
              <p className="body-card-text">
                Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-card">
              <h1 className="body-card-title">Right Navbar</h1>
              <div className="ad-card">
                <p className="body-card-text">Ad 1</p>
              </div>
              <div className="ad-card">
                <p className="body-card-text">Ad 2</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
