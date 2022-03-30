import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './Video.css'
import VideoContainer from '../../components/VideoContainer'
import VideoControls from '../../components/VideoControls'
import VideoProgressBar from '../../components/VideoProgressBar'
import Throbber from '../../components/Throbber'
import PlayBtn from '../../components/PlayBtn'
import { isMobile } from '../../lib/utils'
import * as videos from "../../const/videos";
import Volume from "../Volume";

export default class VideoPlayer extends Component{
	state = {
		loaded: false,
		showThrobber: false,
		showTitle: false,
		showPlayBtn: false,
		paused: false,
	}

	componentDidMount() {
		const { ui, background } = this.props
		// if (!background) ui.pauseBackAudio()

		//
		// ui.setVideoEl(this.videoEl);

		// this.handleVolumeChange(this.props.ui.volume.level)

		this.videoEl.addEventListener('playing', this.handlePlaying)
		this.videoEl.addEventListener('waiting', this.handleWaiting)

		if (isMobile()) {
			this.play()
			this.setState({loaded: true})
			return
		}

		this.videoEl.addEventListener('canplay', this.handleCanplay)
		this.videoEl.addEventListener('timeupdate', this.handleTimeupdate)
	}

	componentWillUnmount() {
		const { ui, background } = this.props
		this.videoEl.removeEventListener('canplay', this.handleCanplay)
		this.videoEl.removeEventListener('waiting', this.handleWaiting)
		this.videoEl.removeEventListener('playing', this.handlePlaying)
		this.videoEl.removeEventListener('timeupdate', this.handleTimeupdate)

		// if (!ui.isBackAudioMutedByUser && !background) ui.playBackAudio()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isMapPlaying && !this.props.isMapPlaying) {
			this.videoEl.play()
		}
	}

	handleCanplay = () => {
		this.setState({loaded: true})
		this.play()
	}

	play = () => {
		const { ui, background } = this.props
		let playPromise = this.videoEl.play()
		if (playPromise !== 'undefined') {
	    playPromise.then(() => {
	    	this.hidePlayBtn()
	    	this.setState({paused: false})
	    	// if (!background) ui.pauseBackAudio()
	    })
	    .catch(error => {
	    	console.log('Video error')
	    })
	  }
	}

	pause = () => {
		this.videoEl.pause()
		this.setState({paused: true, showPlayBtn: true})
	}

	togglePlay = () => {
		const videoEl  = this.videoEl
		videoEl.paused ? this.play() : this.pause()
		this.hideThrobber()
	}

	handleEnded = () => {
		const { showNavigationOnEnded = true, ui, onEnded, background } = this.props
		// if (showNavigationOnEnded && !ui.navExpanded) ui.toggleNav()
		if (onEnded) onEnded()
		// if (!ui.isBackAudioMutedByUser && !background) ui.playBackAudio()
	}

	handleWaiting = () => {
		this.setState({showThrobber: true})
	}

	handlePlaying = () => {
		this.hideThrobber()
		setTimeout(() => {
			this.hideTitle()
		}, 3000)
	}

	hideThrobber = () => {
		const { showThrobber } = this.state
		if (showThrobber) {
			this.setState({showThrobber: false})
		}
	}

	hideTitle = () => {
		const { showTitle } = this.state
		if (showTitle) this.setState({showTitle: false})
	}

	handleTimeupdate = () => {
		const { ui, background } = this.props
		// if (!background) ui.pauseBackAudio()
		const seconds = this.videoEl.currentTime
		const duration = this.videoEl.duration
		if (this.props.onTimeUpdate) {
			this.props.onTimeUpdate(seconds, duration)
		}
	}

	showPlayBtn = () => {
		const { showPlayBtn } = this.state
		if (!showPlayBtn) {
			this.setState({showPlayBtn: true})
		}
	}

	hidePlayBtn = () => {
		const { showPlayBtn } = this.state
		if (showPlayBtn) {
			this.setState({showPlayBtn: false})
		}
	}

	handleVolumeChange = (volume) => {
		const { videoEl } = this

		if (videoEl) videoEl.volume = volume
		// if (player) player.setVolume(volume);
	}

	toggleVolume = () => {
		const { videoEl } = this
		if (videoEl) {
			// videoEl.volume > 0.01 ? videoEl.volume = 0 : videoEl.volume = this.props.ui.volume.levelw
		}
	}

  render(){
  	const { loaded, showThrobber, showTitle, showPlayBtn, paused } = this.state
  	const {
  		video,
	  	title,
	  	loop,
	  	background,
		controls,
		volumeSwiper,
		navContent
	  } = this.props

	  let videoSrc = video

	  if (window.innerWidth < 1281) {
	  	let varr = videoSrc.split('.')
	  	varr[0] = varr[0]+'_tab'
	  	videoSrc = varr.join('.')

	  }

	  const muted = !!background

	  return(
	  	<div className="video">
	  		<TransitionGroup>
				{title && showTitle &&
					<CSSTransition timeout={500} classNames="fade">
						<div className="video-title">{title}</div>
					</CSSTransition>
		    	}
	    	</TransitionGroup>

	    	<VideoContainer>
	    		<video src={videoSrc} playsInline webkit-playsinline="true"
		  			ref={(videoEl) => this.videoEl = videoEl}
		  			loop={loop}
		  			muted={muted}
		  			onClick={ controls ? this.togglePlay : null}
		  			onEnded={this.handleEnded} />
	    	</VideoContainer>

			{ controls && <VideoControls video={this.videoEl} />}

	    	{!background &&
		    	<VideoProgressBar video={this.videoEl} onPauseBtnClick={this.togglePlay} paused={paused} />
		    }

			{ false && (
				<TransitionGroup>
					{!loaded &&
					<CSSTransition timeout={500} classNames="fade">
						<Throbber />
					</CSSTransition>
					}

					{showThrobber &&
					<CSSTransition timeout={500} classNames="fade">
						<Throbber />
					</CSSTransition>
					}

					{showPlayBtn &&
					<CSSTransition timeout={500} classNames="fade">
						<PlayBtn onClick={this.play} />
					</CSSTransition>
					}
				</TransitionGroup>
			)}

			{/* { volumeSwiper && (
				<Volume onVolumeChange={this.handleVolumeChange} onToggleVolume={this.toggleVolume} navContent={navContent} volume={0} />
			)} */}
	  	</div>
	  );
  }
}
