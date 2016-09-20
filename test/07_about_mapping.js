import { Observable } from 'rxjs/Rx'

QUnit.module('Mapping')

const __ = 'Fill in the blank'

test('flatMap can be a cartesian product', () => {
  const results = []
  Observable.range(1, 3)
    .flatMap((x, i) => Observable.range(__, __))
    .subscribe(::results.push)

  equal('234', results.join(''))
})

test('switchMap only gets us the latest value', () => {
  const results = []
  Observable.range(1, 3)
    .switchMap(x => Observable.range(x, __))
    .subscribe(::results.push)

  equal('12345', results.join(''))
})
