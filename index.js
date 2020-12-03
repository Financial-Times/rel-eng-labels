'use strict';

const core = require('@actions/core');
const {syncLabels} = require('./sync-labels')

void async function () {
	try {
		await syncLabels(
			accessToken: core.getInput('github-token'),
			repo: process.env.GITHUB_REPOSITORY,
			logger: core
		});
	} catch (error) {
		core.setFailed(error.message);
	}
}();
