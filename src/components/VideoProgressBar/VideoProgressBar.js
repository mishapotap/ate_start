import React, { Component } from 'react'
import cx from 'classnames'
import './VideoProgressBar.css'
// import Range from 'react-rangeslider'
import Range from '../../lib/rangeslider'
import { numberToHHMMSS } from '../../lib/utils'
import IconPause from '../../components/Common/Icons/IconPause'
import IconPlay2 from '../../components/Common/Icons/IconPlay2'
import Volume from '../../components/Volume'
import VideoControlBtn from '../../components/VideoControlBtn'
import 'react-rangeslider/lib/index.css'

export default class VideoProgressBar extends Component{
	state = {
		progress: 0,
		currentTime: 0,
		duration: 0,
		visibility: false
	}
	componentDidMount() {
		this.hookTimeUpdate()
	}
	componentWillUnmount() {
		const { video, player } = this.props

		if (player) {
			player.off('timeupdate')
		}

		if (!video || !video.addEventListener) return

		video.removeEventListener("timeupdate", this.update)
		clearInterval(this.watchInterval)
	}
	componentDidUpdate() {
		this.hookTimeUpdate()
		this.hookVimeoTimeUpdate()
	}
	videoSrc = ''
	hookTimeUpdate = () => {
		const { video } = this.props
		if (!video || !video.addEventListener) return
		const { src } = video.src
		if (src === this.videoSrc) return
		this.videoSrc = src
		video.addEventListener("timeupdate", this.update)
		this.setState({duration: video.duration})
	}
	hookVimeoTimeUpdate = () => {
		const { player } = this.props
		if (player) {
			const { src } = player.element
			if (src === this.videoSrc) return
			this.videoSrc = src
			// player.on('timeupdate', (data) => {
			// 	// console.log('VideoProgressBar timeupdate', data)
			// 	this.updateProgress(data.percent * 100, data.seconds, data.duration)
			// })
			this.watchInterval = setInterval(() => {
				player.getCurrentTime().then((seconds) => {
					const { duration } = this.state
					if (!duration) return
					let progress = (100 / duration) * seconds
					this.updateProgress(progress, seconds, duration)
				})
			}, 30)
			this.watchDurationInterval = setInterval(() => {
				player.getDuration().then((duration) => {
					if (duration !== this.duration) {
						this.duration = duration
						this.setState({duration: duration})
					}
				})
			}, 30)
			// player.getDuration().then((duration) => {
			// 	this.setState({duration: duration})
			// })
		}
	}
	update = () => {
		const { video } = this.props
	  let progress = (100 / video.duration) * video.currentTime
	  this.updateProgress(progress, video.currentTime, video.duration)
	}
	updateProgress = (progress, currentTime, duration) => {
		this.setState({progress: progress, currentTime: currentTime, duration: duration})
	}
	handleChange = (value) => {
		const { video, player } = this.props
		this.setState({progress: value})
		if (video) {
			var time = video.duration * (value / 100);
		  video.currentTime = time;
		}
		if (player) {
			player.getDuration().then((duration) => {
				var time = duration * (value / 100)
				player.setCurrentTime(time)
			})
		}
	}
	handleChangeStart = () => {
		const { video, player } = this.props
		if (video) video.pause()
		if (player) player.pause()
  }
  handleChangeComplete = () => {
  	const { video, player } = this.props
  	if (video) video.play()
  	if (player) player.play()
  }
	toMinutes = (seconds) => {
		return numberToHHMMSS(seconds)
	}
	handleVolumeChange = (volume) => {
		const { video, player } = this.props
		if (video) video.volume = volume
		if (player) player.setVolume(volume);
	}
	toggleVolume = () => {
		const { video, player } = this.props
		if (video) {
			video.volume > 0.01 ? video.volume = 0 : video.volume = this.props.ui.volume.level
		}
		if (player) {
			player.getVolume().then((volume) => {
				if (volume > 0.01) {
					player.setVolume(0)
				} else {
					player.setVolume(0.5)
				}
			})
		}
	}

	toggleVisible = () => {
		this.setState((prevState) => {return {visibility: !prevState.visibility}})
	}

  render(){
  	const { progress, currentTime, duration, visibility } = this.state
  	const { onPauseBtnClick, paused } = this.props

	  return(
	  	<div className={cx("video__progressbar", !visibility && "vp_hidden")}>
	  		<div className="btn-place">
		  		<div className={cx("pause-btn", paused && "pause-btn_paused")} onClick={onPauseBtnClick}>
		  			<i className="pause-btn__pause"><IconPause /></i>
		  			<i className="pause-btn__play"><IconPlay2 /></i>
		  		</div>
	  		</div>
	  		<div className="progress-place">
			  	<div className="video-progress">
			  		<Range
		          min={0}
		          max={100}
		          value={progress}
		          onChangeStart={this.handleChangeStart}
		          onChange={this.handleChange}
		          onChangeComplete={this.handleChangeComplete}
		        />
		        <div className="video-progress__counter">
		        	<i>{this.toMinutes(currentTime)}</i> / {this.toMinutes(duration)}
		        </div>
			  	</div>
		  	</div>
		  	<div className="control-btn-place"><VideoControlBtn onClick={this.toggleVisible} /></div>
		  	<div style={{display: "none"}}><Volume onVolumeChange={this.handleVolumeChange} onToggleVolume={this.toggleVolume} /></div>
	  	</div>
	  );
  }
}
