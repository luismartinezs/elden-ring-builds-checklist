// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Only include Matomo tracking script in production */}
					{process.env.NODE_ENV === 'production' && (
						<script
							dangerouslySetInnerHTML={{
								__html: `
									var _paq = window._paq = window._paq || [];
									/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
									_paq.push(['trackPageView']);
									_paq.push(['enableLinkTracking']);
									(function() {
										var u="https://eldenringbuildsvercelapp.matomo.cloud/";
										_paq.push(['setTrackerUrl', u+'matomo.php']);
										_paq.push(['setSiteId', '1']);
										var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
										g.async=true; g.src='https://cdn.matomo.cloud/eldenringbuildsvercelapp.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
									})();
								`,
							}}
						/>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
