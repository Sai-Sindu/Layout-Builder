// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const toggleShowContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const toggleShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      const toggleShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }
      return (
        <div className="configuration-controller-container">
          <h1 className="layout-title">Layout</h1>
          <div className="checkbox-card">
            <input
              type="checkbox"
              id="content"
              className="check-box"
              onChange={toggleShowContent}
              checked={showContent}
            />
            <label className="label-text" htmlFor="content">
              Content
            </label>
          </div>
          <div className="checkbox-card">
            <input
              type="checkbox"
              id="left-navbar"
              className="check-box"
              onChange={toggleShowLeftNavbar}
              checked={showLeftNavbar}
            />
            <label className="label-text" htmlFor="left-navbar">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-card">
            <input
              type="checkbox"
              id="right-navbar"
              className="check-box"
              onChange={toggleShowRightNavbar}
              checked={showRightNavbar}
            />
            <label className="label-text" htmlFor="right-navbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
