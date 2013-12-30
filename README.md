# Hanson Grunt-Plugin

A Grunt plugin to convert <a href="https://github.com/timjansen/hanson">HanSON</a> files to JSON.

## Getting Started

Installing the plugin in your Grunt environment:
>npm install grunt-hanson-plugin --save-dev

Load the plugin in your Gruntfile:
>grunt.loadNpmTasks('grunt-hanson-plugin');

## The "hanson" task

### Overview
In your project's Gruntfile, add a section named `hanson` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  hanson: {
    your_target: {
        options: {
        	keepLineNumbers: false
        },
        files: [{
          expand: true,
          flatten: false,
          ext: '.outputExtension',
          cwd: 'working/directory/of/intput/files',
          src: ['list/of/input/filters/**/*.hson', '!exclusions'],
          dest: 'destination/directory'
        }],
    },
  },
})
```

### Options

#### options.keepLineNumbers
Type: `Boolean`
Default value: `false`

If true, the HanSON processor will insert newlines so line numbers in output file and input file match.



