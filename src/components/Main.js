import React from 'react'
import PropTypes from 'prop-types'

import Article from './Article'
import workPhoto from '../images/workPhoto.jpg'

// TODO: Refactor the article elements into Article.js component.
class Main extends React.Component {
  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Article
          name="work"
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
        >
          <p>
            This page is currently under development. It should be ready in the
            next few days. For more info, check out the source code of this
            website by clicking.{' '}
          </p>
        </Article>
        <Article
          name="about"
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
        >
          <span className="image main">
            <img src={workPhoto} alt="" />
          </span>
          <p>
            At the age of 12, I became fascinated with video games and how they
            were developed. This interest led to hacking and modifying code
            within games to eventually building them in the Java programming
            language. Soon afterwards I maintained servers with 50 to 100
            concurrent players for years in middle and high school, which
            instilled my passion for game and software development.
          </p>
          <p>
            As my college experience progresses, I have found a deep interest in
            Node.js, React.js, and Amazon Web Services, yet I'm still
            comfortable with C/C++, Java, Python, Javascript and C#.
            Additionally I have programmed in well-known game engines like
            Unreal and Unity, which has inspired me to construct simple games in
            virtual and augmented reality. Now I hope to develop video games of
            any form or develop software that's utilized by many users.
          </p>
        </Article>
        <Article
          name="contact"
          article={this.props.article}
          articleTimeout={this.props.articleTimeout}
          onCloseArticle={this.props.onCloseArticle}
        >
        </Article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
