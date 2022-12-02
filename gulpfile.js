
var gulp = require('gulp') // Подключаем Gulp
const sass = require('gulp-sass')(require('sass')); // Подключаем Sass пакет

gulp.task('sass', function() { // Создаем таск "sass"
    return gulp.src('./style/sass/**/*.sass', './style/sass/**/*.sass') // Берем источник
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('style/css')) // Выгружаем результата в папку css
});

gulp.task('watch', function() {
    gulp.watch('./style/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', gulp.series('watch'));