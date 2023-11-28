[![CI Workflow](https://github.com/bpolaszek/match-operator/actions/workflows/ci.yml/badge.svg)](https://github.com/bpolaszek/match-operator/actions/workflows/ci.yml)

# Match Operator

PHP has a control structure named [match](https://www.php.net/manual/en/control-structures.match.php), 
which has been introduced as of PHP8.0.

It's like a simplification of the `switch` control structure.

Example:

```php
$food = 'strawberry';
$description = match ($food) {
  'apple' => 'This food is an apple',
  'strawberry', 'raspberry' => 'This food is a red fruit',
}; // This food is a red fruit

$food = 'unknown';
$description = match ($food) {
  'apple' => 'This food is an apple',
  'strawberry', 'raspberry' => 'This food is a red fruit',
}; // UnhandledMatchError

$food = 'unknown';
$description = match ($food) {
  'apple' => 'This food is an apple',
  'strawberry', 'raspberry' => 'This food is a red fruit',
  default => 'This food is unknown',
}; // This food is unknown
```

# Usage

This package is an attempt to port that control structure to a JS function, the closest possible way.

Example:
```js
import match from 'match-operator'

const food = 'strawberry'
const description = match(food, [
  ['apple', 'This food is an apple'],
  ['strawberry', 'raspberry', 'This food is a red fruit'],
]) // This food is a red fruit

const food = 'unknown'
const description = match(food, [
  ['apple', 'This food is an apple'],
  ['strawberry', 'raspberry', 'This food is a red fruit'],
]) // UnhandledMatchError

const food = 'unknown'
const description = match(food, [
  ['apple', 'This food is an apple'],
  ['strawberry', 'raspberry', 'This food is a red fruit'],
  [match.default, 'This food is unknown']
]) // This food is unknown
```

## Alternate syntax

You can use an array of subjects if you find it more readable.

```js
const description = match(food, [
  [['strawberry', 'raspberry'], 'This food is a red fruit'],
]) 
```

# Installation

```
npm install match-operator --save # If you're using NPM
yarn add match-operator # If you're using Yarn
```

# Tests

```
npm run test # If you're using NPM
yarn test # If you're using Yarn
```

# Disclaimer

This is my first Typescript package - please be kind!

# License

MIT.
