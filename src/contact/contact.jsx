/*
    src/contact/contact.jsx
    --
    Contact page component.

    Written by NORXND
    (C) NORXND 2022
*/
import React, { useEffect } from 'react';
import styles from './contact.scss';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom';
import contacts_config from './contacts.json';

import { Discord, EMail, Messenger, Twitter } from './icons';

const icons_config = {
	Discord: <Discord />,
	EMail: <EMail />,
	Messenger: <Messenger />,
	Twitter: <Twitter />,
};

function Contact(props) {
	useEffect(() => {
		document.title = props.t('Title-Contact');
		props.setPageName('Contact');
	});
	const contacts = [];

	for (const contact in contacts_config) {
		contacts.push(
			<li className={styles.contacts_list_item_container} key={contact}>
				<a
					className={styles.contacts_list_item}
					href={contacts_config[contact].Link}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className={styles.contacts_list_item_element}>
						{icons_config[contacts_config[contact].Icon]}
					</div>
					<div className={styles.contacts_list_item_element}>
						{props.t(contacts_config[contact].Name)}
					</div>
					<div className={styles.contacts_list_item_element}>—</div>
					<div className={styles.contacts_list_item_element}>
						{contacts_config[contact].Value}
					</div>
				</a>
			</li>
		);
	}
	return (
		<div className={styles.contact_container}>
			<h1 className={styles.contact_title}>{props.t('Contact-Title')}</h1>
			<ul className={styles.contacts_list}>{contacts}</ul>
			<p>
				<Trans i18nKey="Contact-Notice" t={props.t}>
					Some of my{' '}
					<Link className={styles.contacts_notice_link} to="/socials">
						social media platforms
					</Link>{' '}
					got an option to send a message. You can also contact me
					that way! Just note, I will answer faster if you use sites
					listed above ;)
				</Trans>
			</p>
		</div>
	);
}

export default Contact;
