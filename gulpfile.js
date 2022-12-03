
var gulp = require('gulp') // Подключаем Gulp
const sass = require('gulp-sass')(require('sass')); // Подключаем Sass пакет
var browserSync = require('browser-sync').create(); // Подключаем Browser-sync
var reload      = browserSync.reload;

gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src('./style/sass/**/*.sass', './style/sass/**/*.sass') // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('style/css')) // Выгружаем результата в папку css
});

gulp.task('watch', function() {
    gulp.watch('./style/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами в папке sass
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on("change", reload);
});

gulp.task('default', gulp.series('serve', 'watch'));