import React from 'react'
import PropTypes from 'prop-types'

// Should this be a stateless component? Hmm ill found out later....
const Article = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    // This logic is verbose but neccessary since it adds the right classNames.
    <article
      id={props.name}
      className={`${props.article === props.name ? 'active' : ''} ${
        props.articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <h2 className="major">{props.name}</h2>
      {props.children}
      {close}
    </article>
  )
}

Article.propTypes = {
  onCloseArticle: PropTypes.func,
  name: PropTypes.string,
  article: PropTypes.string,
  articleTimeout: PropTypes.func
}

export default Article

