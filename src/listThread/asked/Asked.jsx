import React from 'react'
import moment from "moment"
import PropTypes from 'prop-types'
import './Asked.scss'

const Asked = ({asker, views}) => (
  <div className="asked">
     · asked  {moment().startOf('minute').fromNow()} by <span style={{fontWeight : 'bold', fontSize:"15px"}}>{asker}</span> ·
    <img className="svg" alt="views" src="https://cdn0.iconfinder.com/data/icons/photography/512/e36-512.png" />
    {views} views
  </div>
)

 Asked.propTypes = 
 { 
   asker: PropTypes.string.isRequired,
   views: PropTypes.string,
 }
 Asked.defaultProps = 
 {
   views : "0",
 }

export default Asked
