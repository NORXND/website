/*
    src/navbar/navbar.jsx
    --
    Primary component for navbar.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useState, useEffect, useRef, createRef } from 'react';
import styles from './navbar.scss';

// Components
import Logo from './logo';
import Links from './links';
import Buttons from './buttons';

const move_links_down_breakpoint = 700;
const move_buttons_down_breakpoint = 350;

/* Navbar */
function Navbar(props) {
	const navbar = createRef();
	const [loadLinksInBottom, _setLoadLinksInBottom] = useState(false);
	const [loadButtonsInBottom, _setLoadButtonsInBottom] = useState(false);

	const loadLinksInBottomRef = useRef(loadLinksInBottom);
	const setLoadLinksInBottom = (data) => {
		loadLinksInBottomRef.current = data;
		_setLoadLinksInBottom(data);
	};

	const loadButtonsInBottomRef = useRef(loadLinksInBottom);
	const setLoadButtonsInBottom = (data) => {
		loadButtonsInBottomRef.current = data;
		_setLoadButtonsInBottom(data);
	};

	function onResize() {
		// Check move links
		if (window.innerWidth < move_links_down_breakpoint) {
			if (!loadLinksInBottomRef.current) {
				setLoadLinksInBottom(true);
			}
		} else {
			if (loadLinksInBottomRef.current) {
				setLoadLinksInBottom(false);
			}
		}

		// Check move buttons
		if (window.innerWidth < move_buttons_down_breakpoint) {
			if (!loadButtonsInBottomRef.current) {
				setLoadButtonsInBottom(true);
			}
		} else {
			if (loadButtonsInBottomRef.current) {
				setLoadButtonsInBottom(false);
			}
		}
	}

	useEffect(() => {
		// Bind ResizeObserver
		function outputsize(e) {
			document.body.style.paddingTop = e[0].target.offsetHeight + 'px';
		}
		new ResizeObserver(outputsize).observe(navbar.current);

		// Bind onResize
		onResize();
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return (
		<nav id="navbar" className={styles.navbar} ref={navbar}>
			<div className={styles.navbar_top}>
				<Logo />
				{!loadLinksInBottom && (
					<Links
						t={props.t}
						i18n={props.i18n}
						pageName={props.pageName}
					/>
				)}
				{!loadButtonsInBottom && (
					<Buttons
						t={props.t}
						i18n={props.i18n}
						theme={props.theme}
						setTheme={props.setTheme}
					/>
				)}
			</div>
			<div className={styles.navbar_bottom}>
				{loadLinksInBottom && (
					<Links
						t={props.t}
						i18n={props.i18n}
						pageName={props.pageName}
					/>
				)}
				{loadButtonsInBottom && (
					<Buttons
						t={props.t}
						i18n={props.i18n}
						theme={props.theme}
						setTheme={props.setTheme}
					/>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
