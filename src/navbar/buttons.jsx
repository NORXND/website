/*
    src/navbar/buttons.jsx
    --
    Buttons at the right side of the navigation bar.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { createRef, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';
import Cookies from 'js-cookie';

// SVGs
import pl_flag from '../assets/icons/language_pl.svg';
import en_flag from '../assets/icons/language_en.svg';
import dark_theme_icon from '../assets/icons/dark_theme.svg';
import light_theme_icon from '../assets/icons/light_theme.svg';

const languages_names = {
	pl: 'Polski (Polish)',
	en: 'English (English)',
};

const flags = {
	pl: pl_flag,
	en: en_flag,
};

/* Options dropdown */
function Options(props) {
	let languagesList = [];
	let themesList = [];

	function languageChange(e) {
		props.i18n.changeLanguage(e.target.value);
		document.documentElement.setAttribute('lang', e.target.value);
		Cookies.set('lang', e.target.value, {
			sameSite: 'Lax',
			expires: 3650,
		});
	}

	// Setup languages
	const availableLanguages = Object.keys(
		props.i18n.services.resourceStore.data
	);
	for (const id in availableLanguages) {
		let disabled = null;
		if (availableLanguages[id] == props.i18n.language) {
			disabled = true;
		}

		languagesList.push(
			<button
				className={styles.navbar_options_button}
				value={availableLanguages[id]}
				onClick={languageChange}
				key={availableLanguages[id]}
				disabled={disabled}
			>
				<img
					className={styles.navbar_options_icon}
					src={flags[availableLanguages[id]]}
				/>
				{languages_names[availableLanguages[id]]}
			</button>
		);
	}

	// Setup themes
	function themeChange(e) {
		props.setTheme(e.target.value);
	}

	let dark_disabled = null;
	let light_disabled = null;

	// Dark
	if (props.theme == 'dark') {
		dark_disabled = true;
	}

	themesList.push(
		<button
			className={styles.navbar_options_button}
			value="dark"
			onClick={themeChange}
			key="dark"
			disabled={dark_disabled}
		>
			<img className={styles.navbar_options_icon} src={dark_theme_icon} />
			{props.t('Navbar-DarkTheme')}
		</button>
	);

	// Light
	if (props.theme == 'light') {
		light_disabled = true;
	}

	themesList.push(
		<button
			className={styles.navbar_options_button}
			value="light"
			onClick={themeChange}
			key="light"
			disabled={light_disabled}
		>
			<img
				className={styles.navbar_options_icon}
				src={light_theme_icon}
			/>
			{props.t('Navbar-LightTheme')}
		</button>
	);

	return (
		<div className={styles.navbar_options_dropdown}>
			<h2 className={styles.navbar_options_dropdown_title}>
				{props.t('Navbar-Languages')}
			</h2>
			<div className={styles.navbar_options_content}>{languagesList}</div>
			<h2 className={styles.navbar_options_dropdown_title}>
				{props.t('Theme')}
			</h2>
			<div className={styles.navbar_options_content}>{themesList}</div>
		</div>
	);
}

function OptionsContainer(props) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownContainer = createRef();

	function handleClick() {
		setDropdownOpen(!dropdownOpen);
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (
				dropdownContainer.current &&
				!dropdownContainer.current.contains(event.target)
			) {
				setDropdownOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [dropdownContainer]);

	return (
		<div
			className={styles.navbar_options_container}
			ref={dropdownContainer}
			alt={props.t('Navbar-Options')}
			type=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={styles.navbar_options_icon}
				onClick={handleClick}
				onKeyDown={handleClick}
				tabIndex="0"
				viewBox="0 0 16 16"
			>
				<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
				<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
			</svg>
			{dropdownOpen && (
				<Options
					t={props.t}
					i18n={props.i18n}
					theme={props.theme}
					setTheme={props.setTheme}
				/>
			)}
		</div>
	);
}

/* Buttons */
const buttons_breakpoint = 450;

function ButtonsContainer(props) {
	const container = useRef();
	const [useIcon, _setUseIcon] = useState(false);

	const useIconRef = useRef(useIcon);
	const setUseIcon = (data) => {
		useIconRef.current = data;
		_setUseIcon(data);
	};

	function onResize() {
		if (container.current != null) {
			const style = window.getComputedStyle(container.current);
			if (window.innerWidth < buttons_breakpoint) {
				if (!useIconRef.current) {
					setUseIcon(true);
				}
			} else {
				if (useIconRef.current) {
					setUseIcon(false);
				}
			}
		}
	}

	// On Mount
	useEffect(() => {
		// Bind onResize
		onResize();
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	// On Update
	useState(() => {
		onResize();
	});

	let supportButtonContent = props.t('Navbar-SupportMe');
	if (useIcon) {
		supportButtonContent = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				className={styles.navbar_support_icon}
			>
				<path
					fillRule="evenodd"
					d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"
				/>
				<path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
			</svg>
		);
	}

	return (
		<div className={styles.navbar_buttons_container} ref={container}>
			<a
				href="https://chojrakdev.cf/"
				className={styles.navbar_cd_button}
				alt="Chojrak Development"
			>
				<svg
					version="1.1"
					className={styles.navbar_cd_icon}
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 0 16 16"
					xmlSpace="preserve"
					alt="Chojrak Development Logo"
				>
					<path
						d="M14.4,14.5H4.5c-0.9,0-1.6-0.8-1.6-1.8V7.2C2.9,7,3,6.8,3.2,6.8S3.6,7,3.6,7.2v5.5c0,0.6,0.4,1.1,0.9,1.1h9.9
			c0.5,0,0.9-0.5,0.9-1.1V7.2c0-0.2,0.2-0.4,0.4-0.4C15.8,6.8,16,7,16,7.2v5.5C16,13.7,15.3,14.5,14.4,14.5z"
					/>
					<path
						d="M4.2,7.8c-0.1,0-0.2,0-0.3-0.1C3.8,7.5,3.8,7.3,4,7.1c0.9-0.7,2.8-1.8,5.4-1.8c0,0,0,0,0,0
			c2.6,0,4.5,1.1,5.3,1.7c0.2,0.1,0.2,0.3,0.1,0.5c-0.1,0.2-0.3,0.2-0.5,0.1c-0.8-0.6-2.5-1.6-4.9-1.6c0,0,0,0,0,0
			c-2.4,0-4.2,1-5,1.7C4.3,7.8,4.3,7.8,4.2,7.8z"
					/>
					<path
						d="M3.3,6.5C2,6.5,0.9,5.4,0.9,4S2,1.5,3.3,1.5S5.8,2.7,5.8,4S4.7,6.5,3.3,6.5z M3.3,2.3c-1,0-1.8,0.8-1.8,1.8
			s0.8,1.8,1.8,1.8S5.1,5,5.1,4S4.3,2.3,3.3,2.3z"
					/>
					<path
						d="M6.4,4.4C6.2,4.4,6.1,4.2,6.1,4c0-1.1-0.4-1.8-0.6-1.8c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4
			c0.2,0,0.7,0.1,1,0.8c0.2,0.4,0.3,1,0.3,1.6C6.8,4.2,6.6,4.4,6.4,4.4z"
					/>
					<path
						d="M0.4,4.4C0.2,4.4,0,4.2,0,4c0-0.6,0.1-1.2,0.3-1.6c0.3-0.7,0.8-0.8,1-0.8c0.2,0,0.4,0.2,0.4,0.4
			S1.5,2.3,1.3,2.3C1.1,2.3,0.7,2.9,0.7,4C0.7,4.2,0.6,4.4,0.4,4.4z"
					/>
				</svg>
			</a>
			<Link to="/support">
				<button className={styles.navbar_support_button}>
					{supportButtonContent}
				</button>
			</Link>
			<OptionsContainer
				t={props.t}
				i18n={props.i18n}
				theme={props.theme}
				setTheme={props.setTheme}
			/>
		</div>
	);
}

export default ButtonsContainer;
