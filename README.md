[![CI Workflow](https://github.com/bpolaszek/match-operator/actions/workflows/ci.yml/badge.svg)](https://github.com/bpolaszek/match-operator/actions/workflows/ci.yml)

# Match Operator

This package is an attempt to port the `match` control structure, which exists in various languages (Rust, Scala, Kotlin, PHP, ...) as a JS function, the closest possible way.

Example:
```js
import match from 'match-operator'

const food = 'strawberry'
const description = match(food, [
  ['apple', 'This food is an apple'],
  ['strawberry', 'raspberry', 'This food is a red fruit'], // First array items are subjects, last one is the result
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

## Lazy expressions

You can also use a function to evaluate the result, which will be called only if the subject matches:

```js
const food = 'banana'
const description = match(food, [
  ['apple', () => 'This food is an apple'], // it won't be evaluated because it's a banana
  ['strawberry', () => "This function won't be evaluated"], // same here
  [match.default, (subject) => `We don't know this food, but it looks like ${subject}`],
])
```

## Alternate syntaxes


### Array of subjects
You can use an array of subjects if you find it more readable.

```js
const description = match(food, [
  [['strawberry', 'raspberry', 'cherry'], 'This food is a red fruit'],
  [['peach', 'pineapple'], 'This food is a yellow fruit'],
]) 
```

## Object-style rules

You can also use a simple object to define your matching rules, which can be more concise for simple key-value matches:

```js
const fallback = () => 'This food is unknown'
const description = match(food, {
  'apple': 'This food is an apple',
  'strawberry': 'This food is a red fruit'
}, fallback)
```

This is equivalent to the array syntax and supports all features including function evaluation:

```js
const description = match(food, {
  'apple': (subject) => `This food is an ${subject}`,
  'strawberry': 'This food is a red fruit'
})
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
