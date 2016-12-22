module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify : {
            distjs : {
                options : {
                    mangle : false  //renommer les variable  : mangle
                },
                files : {
                    'public/js/scripts.min.js' : [
                        'public/bower_components/angular/angular.min.js',
                        'public/bower_components/angular-route/angular-route.min.js',
                        'public/bower_components/jquery/dist/jquery.min.js',
                        'public/bower_components/bootstrap/dist/js/bootstrap.min.js',
                        'public/bower_components/material-design-lite/material.min.js',
                        'public/app.js',
                        'public/controllers/*.js'
                    ]
                } 
            }
                
        },
        jshint : {
            all: ['public/app.js','public/controllers/*.js']  //  '!fichierNonTretter.js'
        },
        cssmin : {
            distcss : {
                files : {
                    'public/css/allStyles.min.css' : [
                        'public/bower_components/bootstrap/dist/css/bootstrap.min.css',
                        'public/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
                        'public/bower_components/material-design-lite/material.min.css',
                        'public/css/style.css'
                    ]
                }
            }
        },
        watch : {
            js : {
                files : ["public/js/*.js",'public/app.js','public/controllers/*.js', "!public/js/*.min.js"],
                tasks : ["uglify:distjs"],
                options : {spawn : false}
            },
            css : {
                files : ["public/css/*.css", "!public/css/*.min.css"],
                tasks : ["cssmin"],
                options : {spawn : false}
            }
        }
    });

   /* //Load the plugin that provides the "uglify" task.
    //minifier et compresser tout les fichier js
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //Load the plugin that provides the "watch" task.
    //watcher et ecouter tout les actions qui se faites au niveau des fichier js 
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Load the plugin that provides the "jshint" task.
    //tester tout les fichier js
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //minification de tout les fichier css
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-bower-concat');*/
    /*
    on peut remplacer tout les "grunt.loadNpmTasks" par : require('load-grunt-tasks')(grunt);
     */
    require('load-grunt-tasks')(grunt);



    //Default task(s).
    grunt.registerTask('default', ['jshint:all', 'uglify:distjs', 'cssmin', 'watch']);

};