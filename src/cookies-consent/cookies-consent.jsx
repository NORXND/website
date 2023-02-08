/*
    src/cookies-consent/cookie-consent.jsx
    --
    Cookie consent component.

    Written by NORXND
    (C) NORXND 2022 - Present
*/
import React from 'react';
import styles from './cookies-consent.scss';
import cookie_icon from '../assets/icons/cookie.svg';
import Cookies from 'js-cookie';

function CookiesConsent(props) {
	function acceptCookies() {
		Cookies.set('cookie-consent', 'true', {
			sameSite: 'Lax',
			expires: 3650,
		});
		window.location.reload();
	}

	return (
		<div className={styles.container}>
			<div className={styles.window}>
				<img className={styles.icon} src={cookie_icon}></img>
				<h1 className={styles.title}>We are using cookies!</h1>
				<p className={styles.text}>
					Blah blah blah in order for every extra features in this
					site to be enabled, we will need to store some data (called
					cookies) on your device. because of EU law we need to tell
					you about this. just click the button below, thats it!
				</p>
				<button className={styles.button} onClick={acceptCookies}>
					Accept cookies and enter the website
				</button>
			</div>
		</div>
	);
}

export default CookiesConsent;
