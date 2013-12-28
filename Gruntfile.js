module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["./css"]
        },
        files: {
          "./css/style.css": "./css/style.less"
        }
      }
    },
    watch: {
      files: "./css/*.less",
      tasks: ["less"]
    }
  });

  // npm install grunt-contrib-less, etc
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
