import React, { Component } from 'react'
import { getElementOffset } from '../../lib/utils'
import './Volume.css'

import VolumeOn from '../../components/svg/icon-volume-on'
import VolumeOff from '../../components/svg/icon-volume-off'
import VolumeSwiper from '../../components/svg/volume-swiper'

export default class Volume extends Component{

	state = {
		volume: this.props.volume,
	}

	isDragging = false

	componentDidMount = () => {
		this.changeVolume(this.state.volume)
	}

	handleMousedown = (event) => {
		this.isDragging = true;
	}

	handleMouseup = (event) => {
		this.isDragging = false;
	}

	handleMousemove = (event) => {
		if (!this.isDragging) return;
		var percent = this.getMousePosition(event.clientY);
		this.changeVolume(percent);
	}

	getMousePosition = (clientY) => {
		// var windowHeight = window.innerHeight;
		var volumeHeight = this.line.offsetHeight;
		var volumeOffsetTop = getElementOffset(this.line).top;
		var innerY = (volumeOffsetTop + volumeHeight) - clientY;
		var percent = innerY / volumeHeight;
		if (percent < 0) percent = 0;
		if (percent > 1) percent = 1;
		return percent;
	}

	handleClick = (event) => {
		var percent = this.getMousePosition(event.clientY);
		this.changeVolume(percent);
	};

	changeFill = (volume) => {
		this.fill.style.height = volume * 100 + '%';
	}

	changeVolume = (volume) => {
		this.props.onVolumeChange(volume)
		this.changeFill(volume);
		this.setState({volume: volume})
	}

	handleButtonClick = () => {
		this.props.onToggleVolume()
		this.toggleVolume()
	}

	toggleVolume = () => {
		const { volume } = this.state
		volume > 0 ? this.changeVolume(0) : this.changeVolume(0.5)
	}

    render(){
		const { volume } = this.state
		const { navContent } = this.props
		let volumeOn = volume > 0

        return(
			<div className={`volume-swiper animated ${!navContent ? 'fadeInLeft' : 'fadeOutLeft'}`}>
                <div className="volume-swiper__label">{ parseInt(volume * 100) }%</div>

                <div className="volume-swiper__slider"
                     ref={(line) => this.line = line}
                     onClick={this.handleClick}
                     onMouseMove={this.handleMousemove}
                     onMouseDown={this.handleMousedown}
                     onMouseUp={this.handleMouseup}
                >
                    <div className="volume-swiper__slider__empty">
                        <VolumeSwiper />
                    </div>

                    <div className="volume-swiper__slider__filled" ref={(fill) => this.fill = fill}>
                        <VolumeSwiper />
                    </div>
                </div>

                <div className="volume-swiper__icon" onClick={this.handleButtonClick}>
                    {!volumeOn &&
                        <VolumeOff />
                    }
                    {volumeOn &&
                        <VolumeOn />
                    }
                </div>
            </div>
        )
    }
}
