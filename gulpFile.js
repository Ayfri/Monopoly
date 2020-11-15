const gulp = require('gulp');
const clean = require("gulp-clean")
const tsc = require('gulp-typescript');
const rename = require('gulp-rename');
const tsProject = tsc.createProject('tsconfig.json');

function build() {
	return gulp.src('src/**/*.ts')
	           .pipe(tsProject())
	           .pipe(rename(path => path.extname = '.mjs'))
	           .pipe(gulp.dest('dist'))
}

function cleanup() {
	return gulp.src('dist/**/*.', {read: false})
		.pipe(clean({force:true}))
}

exports.build = gulp.series([cleanup, build]);

