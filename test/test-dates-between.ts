import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import { allDatesBetween } from '../src/dates-between'

test('generates one date when start and end date are equal', t => {
    const dates = allDatesBetween(new Date(), new Date())
    t.is(1, dates.length)
})

test('generates three dates when start and end are two dates apart', t => {
    const dates = allDatesBetween(
        moment.utc().startOf('day').toDate(),
        moment.utc().startOf('day').add(2, 'days').toDate()
    )
    t.is(3, dates.length)
})

test('generates dates starting at midnight', t => {
    const dates = allDatesBetween(new Date(), new Date())
    t.true(moment.utc(dates[0]).isSame(moment.utc().startOf('day')))
})

test('allDatesBetween is curried', t => {
    const dates = allDatesBetween(new Date())(new Date())
    t.is(1, dates.length)
})
