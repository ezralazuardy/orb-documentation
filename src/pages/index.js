import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
	{
		title: <>🚀 Easy to use</>,
		description: (
			<>
				Orb was designed from the ground up to be easily installed and
				used to monitor Android network status.
			</>
		),
	},
	{
		title: <>👌 Simple & Concise API</>,
		description: (
			<>
				Orb provides you a simple API, so that you can focus on functionality and
				let the Orb do the job.
			</>
		),
	},
	{
		title: <>🔄 Backward Compatible</>,
		description: (
			<>
				Orb gives you backward compatibility with minimum supported API level 16 (Android 4.1 Jelly Bean).
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
			description="Android network monitoring made easy 🎉">
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
