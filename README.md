# Hanson Grunt-Plugin

A Grunt plugin to convert <a href="https://github.com/timjansen/hanson">HanSON</a> files to JSON.

## Getting Started

Installing the plugin in your Grund environment:
>npm install grunt-hanson-plugin --save-dev

Load the plugin in your Gruntfile:
>grunt.loadNpmTasks('grunt-hanson-plugin');

## The "hanson" task

### Overview
In your project's Gruntfile, add a section named `hanson` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  hanson_plugin: {
    your_target: {
        options: {
        	keepLineNumbers: true
        },
        files: {
          'converted-file.json': 'input-file.hson',
        },
    },
  },
})
```

### Options

#### options.keepLineNumbers
Type: `Boolean`
Default value: `false`

If true, the HanSON processor will insert newlines so line numbers in output file and input file match.


