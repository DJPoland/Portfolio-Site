import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/hover.css'

const InnerContent = () => {
  // Provides the clickable button links, which are iterated in the innerContent function.
  const links = [
    { href: 'https://github.com/DJPoland', className: 'fa-github' },
    { href: 'https://twitter.com/djpoland21', className: 'fa-twitter' },
    {
      href: 'https://stackoverflow.com/users/6833727/dj-poland?tab=profile',
      className: 'fa-stack-overflow',
    },
    {
      href: 'https://www.linkedin.com/in/donald-poland/',
      className: 'fa-linkedin',
    },
  ]

// Presents the social media icons and other inner content.
  return (
    <div className="content inner">
      <div className="inner">
        <h1>Hello, I'm DJ!</h1>
        <p>I'm a Full-Stack Web and Game Developer </p>
        <div className="icons-social">
          {links.map(val => {
            return (
              <a
                className="hvr-float"
                target="_blank"
                href={val.href}
                rel="noopener noreferrer"
              >
                <i className={`fab ${val.className}`}></i>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Provides the linux photo and adds the inner-content with navbar.
const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-linux"></span>
    </div>
    <InnerContent/>
    <nav>
      <ul>
          {/* TODO: Make these articles actual routes for breadcrumb. */}
        <li><span onClick={() => {props.onOpenArticle('work')}}>Work</span></li>
        <li><span onClick={() => {props.onOpenArticle('about')}}>About</span></li>
        <li><span onClick={() => {props.onOpenArticle('contact')}}>Contact</span></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
