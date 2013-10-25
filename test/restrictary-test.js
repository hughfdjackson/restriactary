'use strict';

var a = require('assert')
var r = require('../');
var returnArgs = function(){ return [].slice.call(arguments) }

describe('nullary', function(){
    a.deepEqual(r.nullary(returnArgs)(1, 2, 3, 4), []);
});

describe('unary', function(){
    a.deepEqual(r.unary(returnArgs)(1, 2, 3, 4), [1]);
});

describe('binary', function(){
    a.deepEqual(r.binary(returnArgs)(1, 2, 3, 4), [1, 2]);
});

describe('ternary', function(){
    a.deepEqual(r.ternary(returnArgs)(1, 2, 3, 4), [1, 2, 3]);
});
