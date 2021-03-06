# dates-between [![Build status](https://travis-ci.org/strong-roots-capital/dates-between.svg?branch=master)](https://travis-ci.org/strong-roots-capital/dates-between) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/dates-between.svg)](https://npmjs.org/package/@strong-roots-capital/dates-between) [![codecov](https://codecov.io/gh/strong-roots-capital/dates-between/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/dates-between)

> Generator returning all dates from start date to end date, inclusive

## Install

```shell
npm install @strong-roots-capital/dates-between
```

## Use

```typescript
import { datesBetween, allDatesBetween } from '@strong-roots-capital/dates-between'
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

```
