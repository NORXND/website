/*
    src/socials/socials.jsx
    --
    Socials page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from 'react';
import styles from './socials.scss';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import socials_config from './socials.json';

import {
	Twitter,
	Facebook,
	YouTube,
	Github,
	SoundCloud,
	Roblox,
} from './icons';

const icons_config = {
	Twitter: <Twitter />,
	Facebook: <Facebook />,
	YouTube: <YouTube />,
	Github: <Github />,
	SoundCloud: <SoundCloud />,
	Roblox: <Roblox />,
};

function Socials(props) {
	useEffect(() => {
		document.title = props.t('Title-Socials');
		props.setPageName('Socials');
	});
	const content = [];

	for (const cat in socials_config) {
		const data = socials_config[cat];
		const list = [];

		for (const item in data.Items) {
			list.push(
				<li
					className={styles.socials_category_list_item_container}
					key={item}
				>
					<a
						className={styles.socials_category_list_item}
						href={data.Items[item].Link}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div
							className={
								styles.socials_category_list_item_element
							}
						>
							{icons_config[data.Items[item].Icon]}
						</div>
						<div
							className={
								styles.socials_category_list_item_element
							}
						>
							{props.t(data.Items[item].Name)}
						</div>
						<div
							className={
								styles.socials_category_list_item_element
							}
						>
							—
						</div>
						<div
							className={
								styles.socials_category_list_item_element
							}
						>
							{data.Items[item].Value}
						</div>
					</a>
				</li>
			);
		}

		content.push(
			<div className={styles.socials_category_container} key={cat}>
				<h3 className={styles.socials_category_title}>
					{props.t(data.Name)}
				</h3>
				<p className={styles.socials_category_description}>
					{props.t(data.Description)}
				</p>
				<ul className={styles.socials_category_list}>{list}</ul>
			</div>
		);
	}

	return (
		<div className={styles.socials_container}>
			<h1 className={styles.socials_title}>{props.t('Socials-Title')}</h1>
			{content}
			<p className={styles.socials_notice}>
				<Trans i18nKey="Socials-Notice" t={props.t}>
					Make sure you choose platform I often check when{' '}
					<Link className={styles.socials_notice_link} to="/contact">
						contacting me
					</Link>
					!<br></br>You can just search for{' '}
					<span className={styles.socials_notice_highlight}>
						NORXND
					</span>{' '}
					and white dog's face to find me somewhere!
				</Trans>
			</p>
		</div>
	);
}

export default Socials;
