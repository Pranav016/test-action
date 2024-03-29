module.exports = {
	release: {
		branches: ['master'],
		repositoryUrl: 'https://github.com/Pranav016/test-action',
		plugins: [
			'@semantic-release/commit-analyzer',
			'@semantic-release/release-notes-generator',
			[
				'@semantic-release/github',
				{
					assets: [
						{ path: 'build.zip', label: 'build' },
						{ path: 'coverage.zip', label: 'coverage' },
					],
				},
			],
		],
	},
};
