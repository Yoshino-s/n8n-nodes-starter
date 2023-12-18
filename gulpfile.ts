import path from 'node:path';

import { dest, src, task } from 'gulp';

task('build:icons', copyIcons);

function copyIcons() {
	const nodeSource = path.resolve('src', 'nodes', '**', '*.{png,svg,json}');
	const nodeDestination = path.resolve('dist', 'nodes');

	src(nodeSource).pipe(dest(nodeDestination));

	const credSource = path.resolve('src', 'credentials', '**', '*.{png,svg,json}');
	const credDestination = path.resolve('dist', 'credentials');

	return src(credSource).pipe(dest(credDestination));
}
