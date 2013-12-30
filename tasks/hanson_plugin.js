/*
 * grunt-hanson-plugin
 * https://github.com/timjansen/hanson
 *
 * Public Domain. Use, modify and distribute it any way you like. No attribution required.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 * For details, see LICENSE or http://unlicense.org/
 */

'use strict';

var hanson = require('hanson');

function getOutputFileName(file) {
	return file.replace(/\.hson$/, '') + '.json';
}

module.exports = function(grunt) {
	grunt.registerMultiTask('hanson', 'Converts HanSON files into JSON.',
		function() {
			var options = this.options({
				keepLineNumbers : false
			});

			this.files.forEach(function(f) {
				var src = f.src.filter(function(filepath) {
					// Warn on and remove invalid source files (if nonull was set).
					if (!grunt.file.exists(filepath)) {
						grunt.log.warn('Source file "' + filepath + '" not found.');
						return false;
					} else {
						return true;
					}
				});

				var result, hson;
				try {
					hson =  grunt.file.read(src);
					result = hanson.toJSON(hson, options.keepLineNumbers);
				}
				catch (e) {
					var err = new Error('HanSON conversion failed.');
					if (e.msg) {
						err.message += ', ' + e.msg + '.';
					}
					err.origError = e;
					grunt.log.warn('HanSON source "' + src + '" conversion failed.');
					grunt.fail.warn(err);
				}
				
				grunt.file.write(f.dest, result);
				grunt.log.writeln('File "' + f.dest + '" created.');
			});
		});
};
