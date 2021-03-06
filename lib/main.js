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

var objectInverse = require( '@stdlib/utils-object-inverse' );
var dtypeChar = require( '@stdlib/ndarray-base-dtype-char' );


// VARIABLES //

var TABLE;


// MAIN //

/**
* Returns the data type string associated with a provided single letter abbreviation.
*
* @param {string} ch - single letter character abbreviation
* @returns {(Object|string|null)} data type string
*
* @example
* var obj = char2dtype();
* // returns {...}
*
* @example
* var out = char2dtype( 'd' );
* // returns 'float64'
*
* out = char2dtype( '(' );
* // returns null
*/
function char2dtype( ch ) {
	if ( arguments.length === 0 ) {
		return objectInverse( dtypeChar() );
	}
	if ( TABLE === void 0 ) {
		TABLE = objectInverse( dtypeChar() );
	}
	return TABLE[ ch ] || null;
}


// EXPORTS //

module.exports = char2dtype;
