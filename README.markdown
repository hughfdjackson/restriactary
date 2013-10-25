# restrictary

Higher-order functions that restrict the arity of a function.

## Why

To be more useful with other higher-order functions, of course!

```
var r = require('restrictary');

['100', '200', '3'].map(r.unary(parseInt));
```

## API

The following functions are offered:

* nullary - restricts a function to take no arguments
* unary - restricts a function to take a single argument
* binary - restricts a function to take two arguments
* ternary - restricts a function to take three arguments

## Install

### npm

```bash
npm install restrictary
```
