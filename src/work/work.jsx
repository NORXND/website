/*
    src/work/work.jsx
    --
    Work page component.

    Written by NORXND
    (C) NORXND 2022 - Present
*/
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styles from './work.scss';
import main_styles from '../main.scss';

// For tags
import og_image from '../assets/images/og_image.png';
import twitter_image from '../assets/images/twitter_image.png';

import { cpt, wt, mt, ost } from './templates';

function Thumbnail(props) {
	return (
		<a
			className={styles.thumbnail_container}
			href={props.Link}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div
				className={styles.thumbnail}
				key={props.Name}
				id={props.Name}
				style={{
					backgroundImage: `url(${props.Image})`,
				}}
			>
				<small className={styles.thumbnail_text}>
					{props.Description}
				</small>
			</div>
		</a>
	);
}

function Work(props) {
	useEffect(() => {
		props.setPageName('Work');
	});

	// Current Work
	const current_projects = [];
	for (const project in cpt) {
		current_projects.push(
			<Thumbnail
				Name={project}
				Image={cpt[project].Image}
				Description={cpt[project].Description}
				Link={cpt[project].Link}
				key={project}
			/>
		);
	}

	// Current Work
	const websites = [];
	for (const website in wt) {
		websites.push(
			<Thumbnail
				Name={website}
				Image={wt[website].Image}
				Description={wt[website].Description}
				Link={wt[website].Link}
				key={website}
			/>
		);
	}

	// Misc
	const misc = [];
	for (const entry in mt) {
		misc.push(
			<Thumbnail
				Name={entry}
				Image={mt[entry].Image}
				Description={mt[entry].Description}
				Link={mt[entry].Link}
				key={entry}
			/>
		);
	}

	// Old Stuff
	const old_stuff = [];
	for (const entry in ost) {
		old_stuff.push(
			<Thumbnail
				Name={entry}
				Image={ost[entry].Image}
				Description={ost[entry].Description}
				Link={ost[entry].Link}
				key={entry}
			/>
		);
	}

	return (
		<React.Fragment>
			<Helmet>
				<link rel="canonical" href="https://norxnd.com/work" />
				<title>{props.t('Title-Work')}</title>
				<meta
					name="description"
					content="Official Work (Portfolio) Page for NORXND."
				/>

				<meta name="og:title" content="Work - NORXND" />
				<meta name="og:site_name" content="NORXND - Official Website" />
				<meta name="og:url" content="https://norxnd.com/work" />
				<meta
					name="og:description"
					content="Official Work (Portfolio) Page for NORXND."
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
				<meta name="twitter:title" content="Work - NORXND" />
				<meta
					name="twitter:image"
					content={`https://norxnd.com${twitter_image}`}
				/>
				<meta name="twitter:image:alt" content="NORXND" />
				<meta name="twitter:site" content="@NORXND_Unname" />
				<meta
					name="twitter:description"
					content="Official Work (Portfolio) Page for NORXND."
				/>

				<meta name="theme-color" content="#ffd300"></meta>
			</Helmet>
			<div className={styles.work_container}>
				<h1 className={styles.main_title}>{props.t('Work-Title')}</h1>
				<div className={main_styles.row}>
					<div className={main_styles.col}>
						<h3 className={styles.cat_title}>
							{props.t('Work-CurrentProjects')}
						</h3>
						<div className={styles.scrollable_grid}>
							{current_projects}
						</div>
					</div>
					<div className={main_styles.col}>
						<h3 className={styles.cat_title}>
							{props.t('Work-Websites')}
						</h3>
						<div className={styles.scrollable_grid}>{websites}</div>
					</div>
				</div>
				<div className={main_styles.row}>
					<div className={main_styles.col}>
						<h3 className={styles.cat_title}>
							{props.t('Work-Misc')}
						</h3>
						<div className={styles.scrollable_grid}>{misc}</div>
					</div>
					<div className={main_styles.col}>
						<h3 className={styles.cat_title}>
							{props.t('Work-Old')}
						</h3>
						<div className={styles.scrollable_grid}>
							{old_stuff}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Work;
