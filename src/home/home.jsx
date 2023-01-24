/*
    src/home/home.jsx
    --
    Home page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './home.scss';
import main_styles from '../main.scss';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

// For tags
import og_image from '../assets/images/og_image.png';
import twitter_image from '../assets/images/twitter_image.png';

function Home(props) {
	useEffect(() => {
		props.setPageName('Home');
	});

	return (
		<React.Fragment>
			<Helmet>
				<link rel="canonical" href="https://norxnd.com" />
				<title>{props.t('Title-Home')}</title>
				<meta
					name="description"
					content="Official Website of NORXND."
				/>

				<meta name="og:title" content="Home - NORXND" />
				<meta name="og:site_name" content="NORXND - Official Website" />
				<meta name="og:url" content="https://norxnd.com" />
				<meta
					name="og:description"
					content="Official Website of NORXND."
				/>
				<meta
					name="og:image"
					content={`https://norxnd.com${og_image}`}
				/>
				<meta
					property="og:image:secure_url"
					content={`https://norxnd.com${og_image}`}
				/>
				<meta name="og:image:width" content="1200" />
				<meta name="og:image:height" content="627" />
				<meta name="og:image:alt" content="NORXND" />
				<meta name="og:type" content="website" />
				<meta name="og:locale" content="en_US" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Home - NORXND" />
				<meta
					name="twitter:image"
					content={`https://norxnd.com${twitter_image}`}
				/>
				<meta name="twitter:image:alt" content="NORXND" />
				<meta name="twitter:site" content="@NORXND_Unname" />
				<meta
					name="twitter:description"
					content="Official Website of NORXND."
				/>

				<meta name="theme-color" content="#ffd300"></meta>
			</Helmet>
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
								<Link
									to="/about-me"
									className={styles.home_link}
								>
									About Me
								</Link>{' '}
								page! On the right side, you can see my feed.
								More you can find on the{' '}
								<Link to="/social" className={styles.home_link}>
									Socials
								</Link>{' '}
								page!
							</Trans>
						</p>
					</div>
					<div
						className={`${main_styles['col-xl-6']} ${styles.twitter_container}`}
					>
						<TwitterTimelineEmbed
							autoHeight
							screenName="NORXND_Unname"
							sourceType="profile"
							theme={props.theme}
							lang={props.i18n.language}
							key={
								'_' + Math.random().toString(36).substring(2, 9)
							}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Home;
