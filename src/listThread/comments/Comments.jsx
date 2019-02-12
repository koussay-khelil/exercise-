import React from 'react'
import PropTypes from 'prop-types'
import './Comments.scss'

const Comments = ({number}) => (
  <div className="comments">
    <img className="comment-image" alt="comment" src="https://icons-for-free.com/free-icons/png/512/1904663.png" />
    Comments ({number})
   
  </div>
)

 Comments.propTypes = {
  number : PropTypes.number,
 }
 Comments.defaultProps = {
  number: 0,
 }

export default Comments
