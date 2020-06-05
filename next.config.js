const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									removeViewBox: false,
								},
							],
						},
					},
				},
			],
		});

		return config;
	},
});
