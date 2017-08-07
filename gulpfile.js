var gulp = require('gulp');
//自动加载package.json中的插件
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('js',function(){
	gulp.src('js/*.js')
		.pipe(plugins.babel({
			presets: ['es2015']
		}))
		.pipe(plugins.concat('all.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('dist'))
})

// gulp.task('watcher', function() {
//   plugins.livereload.listen(); //要在这里调用listen()方法
//   gulp.watch('js/*.js', ['default']);
// });


// // 默认任务
// gulp.task('default', ['js','watch']);
// // 监听任务
// gulp.task('watch', function() {
// 	 // 建立浏览器自动刷新服务器
//     browserSync.init({
//         server: {
//             baseDir: "./"//默认目录（代码）
//         }
//     });
//     gulp.watch('js/*.js',['js'])
//       // 自动刷新
//       gulp.watch("*.html").on('change', browserSync.reload);
// });


gulp.task('js-watch', ['js'], browserSync.reload);

// 使用默认任务启动Browsersync，监听JS文件
gulp.task('default', ['js'], function () {

    // 从这个项目的根目录启动服务器
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // 添加 browserSync.reload 到任务队列里
    // 所有的浏览器重载后任务完成。
    gulp.watch("js/*.js", ['js-watch']);
});
