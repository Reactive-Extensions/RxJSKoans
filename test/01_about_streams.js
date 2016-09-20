import { Observable, Subject } from 'rxjs/Rx'
import Range from '../util/range'

QUnit.module('Observable Streams')

const __ = 'Fill in the blank'

test('simple subscription', () => {
  Observable.of(42).subscribe(x => { equal(x, __) })
})

test('what comes in goes out', () => {
  Observable.of(__).subscribe(x => { equal(x, 101) })
})

// Which interface Rx apply? (hint: what does "of()" return)
test('this is the same as an event stream', () => {
  const events = new Subject()
  events.subscribe(x => { equal(__, x) })
  events.next(37)
})

// What is the relationship between "this is the same as an event stream" and "simple subscription"?
test('how event streams relate to observables', () => {
  let observableResult = 1
  Observable.of(73).subscribe(x => { observableResult = x })

  let eventStreamResult = 1
  const events = new Subject()
  events.subscribe(x => { eventStreamResult = x })
  events.__(73)

  equal(observableResult, eventStreamResult)
})

// What does Observable.of() map to for a Subject?
test('event streams have multiple results', () => {
  let eventStreamResult = 0
  const events = new Subject()
  events.subscribe(x => { eventStreamResult += x })

  events.next(10)
  events.next(7)

  equal(__, eventStreamResult)
})

// What does Observable.of() map to for a Subject?
test('simple return', () => {
  let received = ''
  Observable.of('foo').subscribe(x => { received = x })

  equal(__, received)
})

test('the last event', () => {
  let received = ''
  const names = ['foo', 'bar']
  Observable.from(names).subscribe(x => { received = x })

  equal(__, received)
})

test('everything counts', () => {
  let received = 0
  const numbers = [3, 4]
  Observable.from(numbers).subscribe(x => { received += x })

  equal(__, received)
})

test('this is still an event stream', () => {
  let received = 0
  const numbers = new Subject()
  numbers.subscribe(x => { received += x })

  numbers.next(10)
  numbers.next(5)

  equal(__, received)
})

test('all events will be received', () => {
  let received = 'Working '
  const numbers = Range.create(9, 5)

  Observable.from(numbers).subscribe(x => { received += x })

  equal(__, received)
})

test('do things in the middle', () => {
  const status = []
  const daysTilTest = Observable.from(Range.create(4, 1))

  daysTilTest
    .do(d => { status.push(d + '=' + (d === 1 ? 'Study Like Mad' : __)) })
    .subscribe()

  equal('4=Party,3=Party,2=Party,1=Study Like Mad', status.toString())
})

test('nothing listens until you subscribe', () => {
  let sum = 0
  const numbers = Observable.from(Range.create(1, 10))
  const observable = numbers.do(n => { sum += n })

  equal(0, sum)
  observable.__()

  equal(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10, sum)
})

test('events before you subscribe do not count', () => {
  let sum = 0
  const numbers = new Subject()
  const observable = numbers.do(n => { sum += n })

  numbers.next(1)
  numbers.next(2)

  observable.subscribe()

  numbers.next(3)
  numbers.next(4)

  equal(__, sum)
})

test('events after you unsubscribe do not count', () => {
  let sum = 0
  const numbers = new Subject()
  const observable = numbers.do(n => { sum += n })
  const subscription = observable.subscribe()

  numbers.next(1)
  numbers.next(2)

  subscription.unsubscribe()

  numbers.next(3)
  numbers.next(4)

  equal(__, sum)
})

test('events while subscribing', () => {
  const received = []
  const words = new Subject()
  const observable = words.do(::received.push)

  words.next('Peter')
  words.next('said')

  const subscription = observable.subscribe()

  words.next('you')
  words.next('look')
  words.next('pretty')

  subscription.unsubscribe()

  words.next('ugly')

  equal(__, received.join(' '))
})
