const gulp = require("gulp");
const shelljs = require("shelljs");
const open = require("open");

gulp.task("dev", function() {
    shelljs.exec("node_modules\\.bin\\node-sass site.scss site.css");

    shelljs.exec("START node_modules\\.bin\\http-server", {async: true});

    open("http://localhost:8080");
});
