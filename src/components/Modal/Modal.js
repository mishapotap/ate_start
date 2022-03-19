import React from 'react'
import cx from 'classnames'
import './Modal.scss'
import { CloseIcon } from '../svg/CloseIcon';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const Modal = (props) => {
	const onClose = () => {
		props.onClose();
	}
	return(
		<TransitionGroup>
			{props.isOpened &&
				<CSSTransition timeout={400} classNames="fade">
					<div className={cx("modal-outer", props.className)}>
						<div className={cx("modal")}>
							<div className='modal__close' onClick={onClose}><CloseIcon /></div>
							{props.children}
						</div>
					</div>
				</CSSTransition>
			}
		</TransitionGroup>
	);
};