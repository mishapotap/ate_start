import React from 'react'
import cx from 'classnames'
import './Power.scss'
import { CloseIcon } from '../svg/CloseIcon';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { PowerIcon } from '../svg/PowerIcon';

export const Power = (props) => {
    const percent = props.percent || 50;
	return(
        <div className={cx("power", props.className)}>
            <div className='power__percent'>{percent}%</div>
            <div className='power__line' style={{width: `${percent}%`}}>
                <div className='power__line-inner'><PowerIcon /></div>
            </div>
        </div>
	);
};