import React, { useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import MobilePlaceholder from "../../components/MobilePlaceholder";

import "./Layout.css";
import { Header } from "../Header";

import backAudio from "../../assets/audio/backSound.mp3";
import { Button, ButtonSize } from "../Button/Button";
import { VolumeIcon } from "../svg/VolumeIcon";

const Layout = (props) => {
	const { children } = props;
	const backAudioEl = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);

	useEffect(() => {
		let playPromise = backAudioEl.current.play();
		if (playPromise !== "undefined") {
			playPromise
				.then(() => {
					setIsPlaying(true);
				})
				.catch((error) => {
					setIsPlaying(false);
				});
		}
	}, []);

	const handleVolume = () => {
		if (isPlaying) {
			setIsPlaying(false);
			backAudioEl.current.pause();
		} else {
			setIsPlaying(true);
			backAudioEl.current.play();
		}
	};

	return (
		<div className={cx("page-section")} id="app">
			<Header />

			<MobilePlaceholder />

			<audio loop ref={backAudioEl} src={backAudio} />

			<div className="footer__volume-btn">
				<Button
					size={ButtonSize.m}
					onClick={handleVolume}
					className={cx("volume-btn", !isPlaying && "muted")}
				>
					<VolumeIcon />
				</Button>
			</div>

			{children}
		</div>
	);
};

export default Layout;
