import React, {Component} from 'react';
import cx from 'classnames';
import MobilePlaceholder from '../../components/MobilePlaceholder';

import './Layout.css';
import { Header } from '../Header';
import { Footer } from '../Footer';

// import backAudio from '../../assets/audio/backSound.mp3';

const Layout = (props) => {
    const { children } = props;

    return (
        <div
            className = { cx(
                'page-section',
            ) }
            id = 'app'
        >
            {/* <audio
                loop
                ref = { (backAudio) => this.backAudio = backAudio }
                src = { backAudio }
            /> */}

            <Header />

            {/* <MobilePlaceholder/> */}

            {children}

        </div>
    );
};

export default Layout;
