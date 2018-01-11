var  gulp=require("gulp");
//var  concat=require("gulp-concat");
var  sass=require("gulp-sass");

gulp.task("sass",function(){
	
	gulp.src("src/index.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css/"))
})