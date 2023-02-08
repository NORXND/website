/*
    src/navbar/links.jsx
    --
    Links for the navbar.

    Written by NORXND
    (C) NORXND 2022 - Present
*/
import React, {
	createRef,
	useState,
	useEffect,
	useRef,
	useLayoutEffect,
} from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.scss';

/* Configuration */
const links_config = {
	AboutMe: '/about-me',
	Work: '/work',
	Socials: '/socials',
	Contact: '/contact',
};

/* Dropdown itself */
function Dropdown(props) {
	let content = [];
	for (const link in props.links) {
		content.push(props.links[link]);
	}

	return <div className={styles.navbar_dropdown}>{content}</div>;
}

/* Container for dropdown (including button) */
function DropdownContainer(props) {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const buttonRef = createRef();
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

	useEffect(() => {
		const style = window.getComputedStyle(buttonRef.current);
		props.dropdownButtonWidth.current =
			buttonRef.current.offsetWidth +
			(parseInt(style.marginRight) || 0) +
			(parseInt(style.marginLeft) || 0);
		return () => {
			props.dropdownButtonWidth.current = 0;
		};
	}, []);

	return (
		<div
			className={styles.navbar_dropdown_container}
			ref={dropdownContainer}
		>
			<button
				className={styles.navbar_dropdown_button}
				onClick={handleClick}
				ref={buttonRef}
			>
				{props.t('Navbar-More')}
				<svg
					className={styles.navbar_dropdown_button_arrow}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 16 16"
				>
					<path
						fillRule="evenodd"
						d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
					/>
				</svg>
				{dropdownOpen && <Dropdown links={props.links} />}
			</button>
		</div>
	);
}

/* Main body of links */
function LinksContainer(props) {
	const container = useRef();
	const dropdownButtonWidth = useRef(0);
	const [links, _setLinks] = useState([]);
	const [lang, setLang] = useState('en');
	let content = [];

	// Refs
	const linksRef = useRef(links);
	const setLinks = (data) => {
		linksRef.current = data;
		_setLinks(data);
	};

	function onChange() {
		for (const link in linksRef.current) {
			if (linksRef.current[link].Ref.current != null) {
				const element = linksRef.current[link].Ref.current;
				const style = window.getComputedStyle(element);

				const breakpoint = Math.round(
					element.getBoundingClientRect().right +
						(parseInt(style.marginRight) || 0) +
						dropdownButtonWidth.current +
						1
				);

				if (breakpoint != linksRef.current[link].Breakpoint) {
					linksRef.current[link].Breakpoint = breakpoint;
				}
			}

			let border = 0;
			if (container.current != null) {
				let nextElement = container.current.nextSibling;
				if (nextElement != null) {
					border = nextElement.getBoundingClientRect().x;
				} else {
					border = window.innerWidth;
				}
			} else {
				border = window.innerWidth;
			}

			if (border < linksRef.current[link].Breakpoint) {
				if (linksRef.current[link].Hidden == false) {
					linksRef.current[link].Hidden = true;
					setLinks({ ...linksRef.current });
				}
			} else {
				if (linksRef.current[link].Hidden == true) {
					linksRef.current[link].Hidden = false;
					setLinks({ ...linksRef.current });
				}
			}
		}
	}

	useLayoutEffect(() => {
		const newLinks = [];
		for (const link in links_config) {
			const elementRef = createRef();
			let active = false;
			if (props.pageName == link) {
				active = true;
			}

			newLinks.push({
				Component: (
					<Link
						className={styles.navbar_link}
						to={links_config[link]}
						key={link}
						ref={elementRef}
						data-isactive={active}
					>
						{props.t('Navbar-' + link)}
					</Link>
				),
				Ref: elementRef,
				Breakpoint: 0,
				Hidden: false,
			});
		}

		setLinks([...newLinks]);
	}, [lang, props.pageName]);

	useLayoutEffect(() => {
		// Bind onChange
		window.addEventListener('resize', onChange);
		return () => {
			window.removeEventListener('resize', onChange);
		};
	}, []);

	useEffect(() => {
		// A bit hacky :)
		if (lang != props.i18n.language) {
			setLang(props.i18n.language);
		}
		onChange();
	});

	// Prepare things for render
	let dropdownLinks = [];
	for (const link in links) {
		if (links[link].Hidden == false) {
			content.push(links[link].Component);
		} else {
			dropdownLinks.push(links[link].Component);
		}
	}

	return (
		<div className={styles.navbar_links_container} ref={container}>
			{content}
			{dropdownLinks.length > 0 && (
				<DropdownContainer
					key="_Dropdown"
					links={dropdownLinks}
					t={props.t}
					i18n={props.i18n}
					dropdownButtonWidth={dropdownButtonWidth}
				/>
			)}
		</div>
	);
}

export default LinksContainer;
