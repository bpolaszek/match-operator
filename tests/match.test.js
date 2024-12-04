import match from '@/index.ts';
import {it, describe, expect} from 'vitest';

describe('match operator', () => {
  it('works', () => {
    const alternatives = [
      ['apple', 'Apple'],
      [['strawberry', 'raspberry'], 'Red fruit'],
      ['banana', 'pineapple', 'Yellow fruit'],
    ]

    expect(match('apple', alternatives)).toBe('Apple')
    expect(match('strawberry', alternatives)).toBe('Red fruit')
    expect(match('raspberry', alternatives)).toBe('Red fruit')
    expect(match('banana', alternatives)).toBe('Yellow fruit')
    expect(match('pineapple', alternatives)).toBe('Yellow fruit')
  });

  it.fails('yells when no default value is provided', () => {

    const alternatives = [
      ['apple', 'Apple'],
      [['strawberry', 'raspberry'], 'Red fruit'],
    ]

    match('blueberry', alternatives)
  });

  it('falls back to a default value yells when no default value is provided', () => {

    const alternatives = [
      ['apple', 'Apple'],
      [['strawberry', 'raspberry'], 'Red fruit'],
      [match.default, 'Fruit']
    ]

    expect(match('blueberry', alternatives)).toBe('Fruit')
  });

  it('returns the 1st matched value', () => {

    const alternatives = [
      ['apple', 'First'],
      ['apple', 'Second'],
    ]

    expect(match('apple', alternatives)).toBe('First')
  });

  it('works with objects', () => {
    const foo = {foo: 'bar'}
    const bar = {bar: 'foo'}
    const alternatives = [
      [{...foo}, 1],
      [bar, 2],
      [foo, 3],
    ]

    expect(match(foo, alternatives)).toBe(3)
  });

});
