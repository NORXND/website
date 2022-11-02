/*
    src/about-me/about-me.jsx
    --
    About Me page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './about-me.scss';
import main_styles from '../main.scss';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';

// For tags
import og_image from '../assets/images/og_image.png';
import twitter_image from '../assets/images/twitter_image.png';

function Contact(props) {
	useEffect(() => {
		props.setPageName('AboutMe');
	});

	return (
		<React.Fragment>
			<Helmet>
				<link rel="canonical" href="https://norxnd.cf/about-me" />
				<title>{props.t('Title-AboutMe')}</title>
				<meta
					name="description"
					content="Official About Me Page for NORXND."
				/>

				<meta name="og:title" content="About Me - NORXND" />
				<meta name="og:site_name" content="NORXND - Official Website" />
				<meta name="og:url" content="https://norxnd.cf/about-me" />
				<meta
					name="og:description"
					content="Official About Me Page for NORXND."
				/>
				<meta
					name="og:image"
					content={`https://norxnd.cf${og_image}`}
				/>
				<meta
					property="og:image:secure_url"
					content={`https://norxnd.cf${og_image}`}
				/>
				<meta name="og:image:width" content="1200" />
				<meta name="og:image:height" content="627" />
				<meta name="og:image:alt" content="NORXND" />
				<meta name="og:type" content="website" />
				<meta name="og:locale" content="en_US" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="About Me - NORXND" />
				<meta
					name="twitter:image"
					content={`https://norxnd.cf${twitter_image}`}
				/>
				<meta name="twitter:image:alt" content="NORXND" />
				<meta name="twitter:site" content="@NORXND_Unname" />
				<meta
					name="twitter:description"
					content="Official About Me Page for NORXND."
				/>

				<meta name="theme-color" content="#ffd300"></meta>
			</Helmet>
			<div className={styles.aboutme_container}>
				<div
					className={`${main_styles.row} ${styles.aboutme_no_padding_left}`}
				>
					<div
						className={`${main_styles['col-4']} ${styles.aboutme_no_padding_left}`}
					>
						<div className={styles.aboutme_header_image}></div>
					</div>
					<div className={`${main_styles['col']}`}>
						<h1 className={styles.aboutme_title}>
							{props.t('AboutMe-Title')}
						</h1>
						<p>
							{/* prettier-ignore-start */}
							<Trans i18nKey="AboutMe-Main" t={props.t}>
								I'm NORXND, also known by my real name Norbert.
								I'm a 15-year-old guy living in Koszalin,
								Poland.
								<br></br>
								I'm a hobbyist programming student. I also
								sometimes produce music and make graphics (You
								could notice I'm obsessed with CANAL+ and other
								Étienne Robial's work).
								<br></br>
								I'm programming in Python, Lua (and Luau), C#
								and know the basics of JS, I can also do
								websites both in the traditional way or in
								React. In the future, I want to become a
								freelancer software developer, create games and
								apps to make people happy.<br></br>I sometimes
								play some games like FE2 (on Roblox), GTA V,
								Portal 2, Subnautica or something else.
								<br></br>You probably know me because I'm a
								friend of the founder and former owner of the
								popular Roblox game. In 2021, I worked with him
								in the "Inertia" games studio which was
								eventually closed.
								<br></br>From 2020 to this day I'm the director
								of{' '}
								<a href="https://chojrakdev.cf/">
									Chojrak Development
								</a>{' '}
								studio. There, I work on Neotrax, a new
								alternative for certain Roblox game I mentioned
								above.<br></br>
								For now, I'm not open for commissions or jobs
								but soon, I plan to open a website-making
								commission (Stay tuned for that!).<br></br>What
								am I doing right now? Check the{' '}
								<Link to="/work">Work</Link> page. Where can you
								find me? Check the{' '}
								<Link to="/socials">Socials</Link> page.
								<br></br>I'm a furry. Yes. <br></br>That's all
								that you should know about me, I think so at
								least. Have any more questions, don't hesitate
								to contact me, I'm very friendly and like to
								talk with people, alternatively join my{' '}
								<a
									href="https://discord.com/invite/Vr8rnvGFNQ"
									target="_blank"
								>
									Discord Server
								</a>
								!
							</Trans>
						</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Contact;
