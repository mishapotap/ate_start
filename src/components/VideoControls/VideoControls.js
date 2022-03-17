import React, { Component } from 'react'
import cx from 'classnames'
import './VideoControls.css'

export default class VideoControls extends Component{
	state = {
		muted: false,
		canForward: true,
		canBackward: false,
		expanded: false,
		soundBtnInteracted: false,
	}
	componentDidMount() {
		// this.hookControlsUpdate()
	}
	componentDidUpdate(prevProps, prevState) {
		// this.hookControlsUpdate()
		const { player} = this.props
		if (!prevProps.player && player) {
			player.getVolume().then((volume) => {
				// if ((volume === 0 || isIos()) && !muted) this.setState({muted: true})
			})
		}
	}
	playClickSound = () => {
    const {ui} = this.props
    ui.playClickSound1()
  }
  handleMouseEnter = () => {
    const {ui} = this.props
    ui.playOverSound1()
  }
	hookControlsUpdate = () => {
		const { video } = this.props
		if (!video || !video.addEventListener || this.isTimeupdateListener) return
		this.isTimeupdateListener = true
		video.addEventListener("timeupdate", this.updateControls)
	}
	componentWillUnmount() {
		const { video } = this.props
		if (!video || !video.addEventListener) return
		video.removeEventListener("timeupdate", this.updateControls)
		this.isTimeupdateListener = false
	}
	updateControls = () => {
		this.toggleFfwBckw()
	}
	toggleFfwBckw = () => {
		const { video } = this.props
		if (!video || !video.addEventListener) return
		let canBackward = video.currentTime !== 0
		let canForward = video.currentTime < video.duration - 2
		if (this.state.canBackward !== canBackward || this.state.canForward !== canForward) {
			this.setState({
				canBackward: canBackward,
				canForward: canForward
			})
		}
	}
	toggleMute = (e) => {
		e.stopPropagation()

		this.playClickSound()

		const { video, player } = this.props

		this.setState((prevState) => {
			if (video) video.muted = !prevState.muted

			if (player) {
				prevState.muted ? player.setVolume(0.5) : player.setVolume(0)
			}

			return {muted: !prevState.muted, soundBtnInteracted: true}
		})
	}
	startForward = () => {
		const { video } = this.props
		this.playClickSound()
		if (!video) return
		video.pause()
		this.forvard = setInterval(() => {
			if (video.currentTime === video.duration) return
			video.currentTime = video.currentTime + 2
		}, 300)

	}
	stopForward = () => {
		const { video } = this.props
		if (!video) return
		clearInterval(this.forvard)
		if (video.currentTime === video.duration) return
		video.play()
	}
	startBackward = () => {
		const { video } = this.props
		this.playClickSound()
		if (!video) return
		video.pause()
		this.backward = setInterval(() => {
			if (video.currentTime === 0) return
			video.currentTime = video.currentTime - 2
		}, 300)
		this.playClickSound()
	}
	stopBackward = () => {
		const { video } = this.props
		if (!video) return
		clearInterval(this.backward)
		if (video.currentTime === 0) return
		video.play()
	}
	togglePlay = () => {
		const { video } = this.props
		video.paused ? video.play() : video.pause()
	}
	toggleExpanded = (e) => {
		e.stopPropagation()
		this.setState((prevState) => ({expanded: !prevState.expanded}))
	}
  render(){
  	const { expanded } = this.state
	  return(
	  	<div className={cx("video-controls", expanded && "_expanded")} onClick={this.toggleExpanded}>
	  	</div>
	  );
  }
}

