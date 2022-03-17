import React from 'react'
import cx from 'classnames'
import './Throbber.css'
import IconThrobber from '../../components/Common/Icons/IconThrobber'

export default ({video, ...props}) => (
  <div 
  	className={cx(
  		"throbber", 
  		video && "throbber_video", 
  	)}
  >
  	<IconThrobber />
  </div>
)
