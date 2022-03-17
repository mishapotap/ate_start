import React from 'react'
import './VideoControlBtn.css'

// import { Settings } from '../../components/svg/'
import Languages from '../../const/languages';

export default ({onClick, ...props}) => (
  <div className="btn btn-control" onClick={onClick} style={{right: '0', top: '-12px'}}>
  	{/* <div className="btn__icon">
  		<Settings />
  	</div> */}
    <div className="btn__label btn__label__bottom">{Languages.controls}</div>
    <div className="btn__circles"/>
  </div>
)
