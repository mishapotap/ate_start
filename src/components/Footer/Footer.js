import cx from 'classnames';
import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonSize } from '../Button/Button';
import { VolumeIcon } from '../svg/VolumeIcon';
import './Footer.scss';

import backAudio from '../../assets/audio/backSound.mp3';

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