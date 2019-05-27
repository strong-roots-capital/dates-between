import { datesBetween, allDatesBetween } from '../src/dates-between'
import moment from 'moment'

const newYears = moment.utc().startOf('year').toDate()
const today = moment.utc().startOf('year').add(1, 'week').toDate()

for (const date of datesBetween(newYears, today)) {
    console.log(date)
}
//=>2019-01-01T00:00:00.000Z
//=>2019-01-02T00:00:00.000Z
//=>2019-01-03T00:00:00.000Z
//=>2019-01-04T00:00:00.000Z
//=>2019-01-05T00:00:00.000Z
//=>2019-01-06T00:00:00.000Z
//=>2019-01-07T00:00:00.000Z
//=>2019-01-08T00:00:00.000Z

const allDates = allDatesBetween(newYears, today)
console.log(allDates)
//=>[ 2019-01-01T00:00:00.000Z,
//    2019-01-02T00:00:00.000Z,
//    2019-01-03T00:00:00.000Z,
//    2019-01-04T00:00:00.000Z,
//    2019-01-05T00:00:00.000Z,
//    2019-01-06T00:00:00.000Z,
//    2019-01-07T00:00:00.000Z,
//    2019-01-08T00:00:00.000Z ]
