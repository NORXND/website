/*
    src/home/home.jsx
    --
    Home page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from 'react';
import styles from './home.scss';
import main_styles from '../main.scss';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Home(props) {
	useEffect(() => {
		document.title = props.t('Title-Home');
		props.setPageName('Home');
	});

	return (
		<div className={styles.home_container}>
			<div className={`${main_styles.row} ${styles.home}`}>
				<div className={main_styles.col}>
					<h1
						className={`${main_styles['display-2']} ${styles.home_welcome_title}`}
					>
						{props.t('Home-Welcome')}
					</h1>
					<p>{props.t('Home-Message_1')}</p>
					<p>
						<Trans i18nKey="Home-Message_2" t={props.t}>
							Want to do more? Look at the
							<Link to="/about-me" className={styles.home_link}>
								About Me
							</Link>{' '}
							page! On the right side, you can see my feed. More
							you can find on the{' '}
							<Link to="/social" className={styles.home_link}>
								Socials
							</Link>{' '}
							page!
						</Trans>
					</p>
				</div>
				<div className={main_styles['col-xl-6']}>
					<TwitterTimelineEmbed
						autoHeight
						screenName="NORXND_Unname"
						sourceType="profile"
						theme={props.theme}
						lang={props.i18n.language}
						key={'_' + Math.random().toString(36).substring(2, 9)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
