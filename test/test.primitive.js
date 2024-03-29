/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var tape = require( 'tape' );
var Symbol = require( '@stdlib/symbol-ctor' );
var Object = require( '@stdlib/object-ctor' );
var hasSymbols = require( '@stdlib/assert-has-symbol-support' );
var isSymbol = require( './../lib/primitive.js' );


// VARIABLES //

var opts = {
	'skip': !hasSymbols()
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof isSymbol, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `true` if provided a primitive symbol', opts, function test( t ) {
	t.strictEqual( isSymbol( Symbol( 'a' ) ), true, 'returns true' );
	t.end();
});

tape( 'the function returns `false` if provided a Symbol object', opts, function test( t ) {
	t.strictEqual( isSymbol( Object( Symbol( 'a' ) ) ), false, 'returns false' );
	t.end();
});

tape( 'the function returns `false` if not provided a symbol', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( isSymbol( values[i] ), false, 'returns false when provided '+values[i] );
	}
	t.end();
});
