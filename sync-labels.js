'use strict';

const githubLabelSync = require('github-label-sync');
const labels = require('./labels');

const syncLabels = ({accessToken, repo, logger}) =>
		githubLabelSync({
			accessToken,
			repo,
			allowAddedLabels: true,
			dryRun: false,
			labels,
			log: {
				info: logger.info,
				warn: logger.warning
			}
		})


module.exports = {syncLabels}
