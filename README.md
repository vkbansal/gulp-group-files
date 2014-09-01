#gulp-group-files [![Build Status](https://travis-ci.org/vkbansal/gulp-group-files.svg?branch=master)](https://travis-ci.org/vkbansal/gulp-group-files)
A gulp plugin for grouping files via an object for further processing

##Install
```
npm install gulp-group-files --save-dev
```

##Use case
This gives you a solution to build different packages out of objects. Given this structure:
```
bower_components
├─── undescore
|    └─── underscore.js
├─── backbone
|    └─── backbone.js
├─── backbone.stickit
|    └─── backbone.stickit.js
├─── bootstrap
|    ├─── less
|    |    └─── bootstrap.less
|    ├─── less
|    |    └─── bootstrap.js
|    └─── fonts
|         └─── [somefontfiles]
├─── bootstrap-plugin
|    ├─── less
|    |    └─── bootstrap-plugin.less
|    └─── js
|         └─── bootstrap-plugin.js
└─── font-awesome
     ├─── less
     |    └─── font-awesome.less
     └─── fonts
          └─── [somefontfiles]
```

It is very easy to build

```
dist
└─── js
     ├─── backbone.js //contains underscore, backbone and backbone.stickit
     └─── bootstrap.js //contains bootstrap and bootstrap-plugin
```

##Usage
```js

var gulp = require ('gulp'),
    concat = require('gulp-concat'),
    group = require('gulp-group-files');

var scripts = {
    'backbone': [
        'bower_components/underscore/underscore.js', 
        'bower_components/backbone/backbone.js',
        'bower_components/backbone.stickit/backbone.stickit.js'
    ],
    'bootstrap':[
        'bootstrap/js/bootstrap.js',
        'bootstrap-plugin/js/bootstrap-plugin.js'
    ]
};

gulp.task('scripts',group(scripts, function(name,files){
    return gulp.src(files)
            .pipe(concat(name + ".js"))
            .pipe(gulp.dest("dist/js/"));
});
```

##License
The MIT License (MIT)