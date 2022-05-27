import React from 'react'
import './Footer.scss';

export const Footer = (props) => {
    return (
        <div className='footer'>
            <div className='footer__inner'>
                <div className='footer__content'>
                    { props.children }
                </div>
            </div>
        </div>
    );
};