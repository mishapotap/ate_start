import React from 'react'
import cx from 'classnames'
import IconPlay from '../../components/Common/Icons/IconPlay'
import './PlayBtn.css'

export default ({onClick, className, ...props}) => (
  <div className={cx("play-btn", className)} onClick={onClick}>
  	<IconPlay />
  </div>
)