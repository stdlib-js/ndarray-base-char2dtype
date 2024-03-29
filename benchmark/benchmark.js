/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var dtypeChar = require( '@stdlib/ndarray-base-dtype-char' );
var pkg = require( './../package.json' ).name;
var char2dtype = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var chars;
	var out;
	var ch;
	var i;

	chars = [
		dtypeChar( 'float64' ),
		dtypeChar( 'float32' ),
		dtypeChar( 'int8' ),
		dtypeChar( 'uint8' ),
		dtypeChar( 'int16' ),
		dtypeChar( 'uint16' ),
		dtypeChar( 'int32' ),
		dtypeChar( 'uint32' ),

		dtypeChar( 'binary' ),
		dtypeChar( 'generic' ),
		dtypeChar( 'uint8c' )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		ch = chars[ i%chars.length ];
		out = char2dtype( ch );
		if ( typeof out !== 'string' && out !== null ) {
			b.fail( 'should return a string or null' );
		}
	}
	b.toc();
	if ( typeof out !== 'string' && out !== null ) {
		b.fail( 'should return a string or null' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
