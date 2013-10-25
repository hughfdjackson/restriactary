'use strict';

module.exports = {
    nullary: function(fn){ return function(){ return fn() } },
    unary: function(fn){ return function(a){ return fn(a) } },
    binary: function(fn){ return function(a, b){ return fn(a, b) } },
    ternary: function(fn){ return function(a, b, c){ return fn(a, b, c) } },
}
