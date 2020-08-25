import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: <>🎉 Easy to use</>,
		// imageUrl: 'img/undraw_docusaurus_mountain.svg',
		description: (
			<>
				Heimdall was designed from the ground up to be easily installed and
				configured to get your OAuth 2.0 Server up and running quickly.
			</>
		),
	},
	{
		title: <>🧰 Built for CodeIgniter 4</>,
		// imageUrl: 'img/undraw_docusaurus_tree.svg',
		description: (
			<>
				Heimdall lets you focus on your functionality needs, and it&apos;ll do the chores. All
				of the Heimdall API's also compatible with CodeIgniter framework.
			</>
		),
	},
	{
		title: <>🌟 Based on the best practices</>,
		// imageUrl: 'img/undraw_docusaurus_react.svg',
		description: (
			<>
				Heimdall is implemented from <a href="https://github.com/thephpleague/oauth2-server" target="_blank" rel="noopener noreferrer">
				OAuth 2.0 Server</a> library by <a href="https://thephpleague.com" target="_blank" rel="noopener noreferrer">
				thephpleague.</a> All of Heimdall API's are based on them which
				means Heimdall also support the best practices flow that recommended for OAuth 2.0 protocol.
			</>
		),
	},
];

function Feature({imageUrl, title, description}) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={styles.featureImage} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;
	return (
		<Layout
			description="Painless OAuth 2.0 Server for CodeIgniter 4 🔥">
			<header className={clsx('hero hero--primary', styles.heroBanner)}>
				<div className="container">
					<h1 className="hero__title">{siteConfig.title}</h1>
					<p className="hero__subtitle">{siteConfig.tagline}</p>
					<div className={styles.buttons}>
						<Link
							className={clsx(
								'button button--outline button--secondary button--lg',
								styles.getStarted,
							)}
							to={useBaseUrl('documentation')}>
							Get Started
						</Link>
					</div>
				</div>
			</header>
			<main>
				{features && features.length > 0 && (
					<section className={styles.features}>
						<div className="container">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
