import React from 'react'
import Clap from "./clap"
import Ticket from "./ticket"
import Comments from './comments'
import Asked from './asked'
import PropTypes from 'prop-types'
import './ListThread.scss'

const ListThread = ({title, body}) => (
  <div className="list-thread">
    <div className="clap">
      <Clap />
    </div>
    <div className="text-block">
      <div className='title'>
      {title}
        <div className="asked"><Asked asker="John" /></div>
      </div>  
      <div className="paragraph">
      {body}
      </div>
      <div className="footer">
        <div className="comment">
         <Comments />
         </div>
        <div className="tickets">
        <Ticket title ="bitbucket"/>
        <Ticket title ="bitbucket"/>
         <Ticket title ="bitbucket"/>
        </div>
      </div>
    </div>
  </div>
)

 ListThread.propTypes = {
   title : PropTypes.string.isRequired,
   body : PropTypes.string.isRequired,
 }

export default ListThread
