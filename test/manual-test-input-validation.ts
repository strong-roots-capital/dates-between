import test from 'ava'

/**
 * Library under test
 */

import { datesBetween } from '../src/dates-between'

/* Note: TypeScript prevents this test from compiling */
// test('should take only a date for start', t => {
//     const generator = datesBetween(new Date(), 1)
//     const error = t.throws(() => generator.next())
//     t.is(error.name, 'ArgumentError')
// })

/* Note: TypeScript prevents this test from compiling */
// test('should take only a date for end', t => {
//     const generator = datesBetween(1, new Date())
//     const error = t.throws(() => generator.next())
//     t.is(error.name, 'ArgumentError')
// })
