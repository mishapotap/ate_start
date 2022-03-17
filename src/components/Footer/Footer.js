import React from 'react'
import './Footer.scss';

export const Footer = (props) => {
    return (
        <div className='footer'>
            <div className='footer__btns'>

            </div>
            <div className='footer__content'>
                { props.children }
            </div>
        </div>
    );
};