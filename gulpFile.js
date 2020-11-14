const gulp = require('gulp');
const tsc = require('gulp-typescript');
const tsProject = tsc.createProject('tsconfig.json');

function build() {
	return gulp.src('src/**/*.ts').pipe(tsProject()).pipe(gulp.dest('dist'));
}

exports.build = build;

