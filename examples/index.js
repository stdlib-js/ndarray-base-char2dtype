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

var dtypeChar = require( '@stdlib/ndarray-base-dtype-char' );
var char2dtype = require( './../lib' );

var chars;
var out;
var i;

chars = [
	dtypeChar( 'float64' ),
	dtypeChar( 'float32' ),
	dtypeChar( 'int8' ),
	dtypeChar( 'uint8' ),
	dtypeChar( 'uint8c' ),
	dtypeChar( 'int16' ),
	dtypeChar( 'uint16' ),
	dtypeChar( 'int32' ),
	dtypeChar( 'uint32' ),
	dtypeChar( 'binary' ),
	dtypeChar( 'generic' ),
	'('
];

for ( i = 0; i < chars.length; i++ ) {
	out = char2dtype( chars[ i ] );
	console.log( '%s => %s', chars[ i ], out );
}