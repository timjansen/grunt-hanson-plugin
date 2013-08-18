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
							var src = f.src;
							var dest = f.dest ? f.dest : src && getOutputFileName(src);

							if (!src || !grunt.file.exists(src))
								grunt.log.warn('JSON input file "' + src + '" not found.');
							else {
								var hson = grunt.file.read(src);
								var json = hanson.toJSON(hson, options.keepLineNumbers);
								grunt.file.write(dest, json);
								grunt.log.writeln('JSON file "' + dest + '" written.');
							}
						});

			});
};

