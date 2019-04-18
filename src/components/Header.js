import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/hover.css'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-linux"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Hello, I'm Donald!</h1>
                <p>Game Developer | Linux Enthusiast | Code Fanatic</p>
                <div class="icons-social">
			        <a class="hvr-float" target="_blank" href="https://github.com/DJPoland"><i class="fab fa-github"></i></a>
			        <a class="hvr-float" target="_blank" href="https://twitter.com/djpoland21"><i class="fab fa-twitter"></i></a>
			        <a class="hvr-float" target="_blank" href="https://stackoverflow.com/users/6833727/dj-poland?tab=profile"><i class="fab fa-stack-overflow"></i></a>
			        <a class="hvr-float" target="_blank" href="https://www.linkedin.com/in/donald-poland/"><i class="fab fa-linkedin"></i></a>
		        </div>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
