import React from 'react'
 import PropTypes from 'prop-types'
import './Ticket.scss'

const Ticket = ({title}) => (
  <div className="ticket">
  
    <div className="button">
    #{title}
    </div>
  
  </div>
)

 Ticket.propTypes = {
   title : PropTypes.string.isRequired,
 }

export default Ticket
