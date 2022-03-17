import React from 'react'
import cx from 'classnames'

export default ({muted, ...props}) => (
  <div className={cx("video-controls__sound", muted && "_muted")} {...props}>
  	<svg xmlns="http://www.w3.org/2000/svg">
      <rect 
        height="27" 
        width="5" 
        id="sound_1" 
        rx="3" 
        ry="3" 
        x="0" 
        y="0"
        />
      <rect 
        height="27" 
        width="5" 
        id="sound_2" 
        rx="3" 
        ry="3" 
        x="13" 
        y="0"
        />
      <rect 
        height="27" 
        width="5" 
        id="sound_3" 
        rx="3" 
        ry="3" 
        x="27" 
        y="0"
        />
    </svg>
  </div>
)