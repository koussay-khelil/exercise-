import React from 'react'
import PropTypes from 'prop-types'
import './Clap.scss'

const Clap = ({numberOfClaps}) => (
  <div className="clap">
    <img className="image" alt="hands" src="https://static.thenounproject.com/png/518728-200.png" />
    <div className="number">
    {numberOfClaps}
    </div>
  </div>
)

 Clap.propTypes = {
  numberOfClaps : PropTypes.number,
 }
 Clap.defaultProps =
 {
  numberOfClaps : 0,
 }

export default Clap
