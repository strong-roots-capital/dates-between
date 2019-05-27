/**
 * dates-between
 * Generator returning all dates from start date to end date, inclusive
 */

import ow from 'ow'
import moment from 'moment'


/**
 * Return a generator yielding each `Date` between `start` and `end`,
 * inclusive.
 *
 * @remarks
 * - each `Date` represents midnight of the specified date
 *
 * @param start
 * @param end
 * @returns Generator yielding each date between start and end, inclusive.
 */
export function* datesBetween(start: Date, end: Date): IterableIterator<Date> {

    ow(start, ow.date)
    ow(end, ow.date)

    const date = moment.utc(start).startOf('day')
    while (date.isSameOrBefore(end)) {
        yield date.toDate()
        date.add(1, 'day')
    }
}

/**
 * Return a list of `Date`s between `start` and `end`, inclusive.
 *
 * @remarks
 * - this function supports currying.
 * - this function is the non-generator form of `datesBetween`
 * - each `Date` represents midnight of the specified date
 *
 * @param start
 * @param end
 * @returns List of dates between start and end, inclusive
 */
export function allDatesBetween(start: Date): (end: Date) => Date[]
export function allDatesBetween(start: Date, end: Date): Date[]
export function allDatesBetween(start: Date, end?: Date): Date[] | ((end: Date) => Date[]) {

    ow(start, ow.date)

    const curried = (end: Date) => [...datesBetween(start, end)]

    return end === undefined ? curried : curried(end)
}
