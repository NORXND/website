/*
    src/footer/footer.jsx
    --
    Main Component for footer.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { createRef, useEffect } from 'react';
import styles from './footer.scss';

// Icons
import { Twitter, Facebook, YouTube, Github, SoundCloud } from './icons';

// Funny Messages
const funny_messages = [
	'Footer-FunnyMessage_1',
	'Footer-FunnyMessage_2',
	'Footer-FunnyMessage_3',
	'Footer-FunnyMessage_4',
	'Footer-FunnyMessage_5',
	'Footer-FunnyMessage_6',
	'Footer-FunnyMessage_7',
	'Footer-FunnyMessage_8',
];

function Footer(props) {
	const footer = createRef();
	useEffect(() => {
		// Bind ResizeObserver
		function outputsize(e) {
			document.body.style.paddingBottom = e[0].target.offsetHeight + 'px';
		}
		new ResizeObserver(outputsize).observe(footer.current);
	}, []);

	return (
		<footer className={styles.footer} ref={footer}>
			<div className={styles.footer_socials_container}>
				<Twitter />
				<Facebook />
				<YouTube />
				<Github />
				<SoundCloud />
			</div>
			<div className={styles.footer_funny_message_container}>
				<small>
					{props.t(
						funny_messages[
							Math.floor(Math.random() * funny_messages.length)
						]
					)}
				</small>
			</div>
			<div className={styles.footer_copyright_container}>
				<small>© NORXND 2022 - All rights reserved.</small>
			</div>
		</footer>
	);
}

export default Footer;
