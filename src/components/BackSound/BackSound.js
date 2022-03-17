import React, { Component } from 'react'
import { withUiContext } from '../../UiContext'
import { getElementOffset } from '../../lib/utils'
import './BackSound.css'

import VolumeOn from '../../components/svg/icon-volume-on'
import VolumeOff from '../../components/svg/icon-volume-off'
import VolumeSwiper from '../../components/svg/volume-swiper'

class BackSound extends Component {
	componentDidMount = () => {
		const { ui } = this.props
		const { playBackAudio, volume, isBackAudioMutedByUser } = ui

		if (!isBackAudioMutedByUser) {
			playBackAudio()
		}

		this.changeVolume(volume.level);
	}

	toggleVolume = () => {
		const { ui } = this.props
		const {
			backAudioPaused,
			toggleBackAudio,
			enableBackAudioUserControl,
			disableBackAudioUserControl
		} = ui

		toggleBackAudio()

		if (!backAudioPaused) enableBackAudioUserControl()
		if (backAudioPaused) disableBackAudioUserControl()
	}

	isDragging = false

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

	changeFill = (percent) => {
		this.fill.style.height = percent * 100 + '%';
	}

	changeVolume = (volume) => {
		const { ui } = this.props
		const { backAudioSetVolume } = ui
		backAudioSetVolume(volume)
		// this.setState({volume: volume})
		this.props.ui.volume.level = volume

		this.forceUpdate(); // времянка

		this.changeFill(volume);
	}

	render(){
		const volume = this.props.ui.volume.level
		const { ui, navContent } = this.props
		const { backAudioPaused } = ui

		// let volumeOn = volume > 0.01 // backAudioPaused ???

		return(
			<div className={`volume-swiper animated ${!navContent ? 'fadeInLeft' : 'fadeOutLeft'}`}>
				{!backAudioPaused ? (
					<div className="volume-swiper__label">
						{parseInt(volume * 100)}%
					</div>
				) : (
					<div className="volume-swiper__label">0%</div>
				)}
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
						{!backAudioPaused &&
						<VolumeSwiper />
						}
					</div>
				</div>

				<div className="volume-swiper__icon" onClick={this.toggleVolume}>
					{backAudioPaused &&
						<VolumeOff />
					}
					{!backAudioPaused &&
						<VolumeOn />
					}
				</div>
			</div>
		)
	}
}

export default withUiContext(BackSound)
