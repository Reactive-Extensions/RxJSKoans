import { Observable } from 'rxjs/Rx'

QUnit.module('Imperative')

const __ = 'Fill in the blank'

test('can make a decision with an if with no else', () => {
  const results = []
  Observable.range(1, 10)
    .flatMap(x => Observable.if(
      () => x % 2 === 0,
      Observable.of(x)
    ))
    .subscribe(::results.push)

  equal(__, results.join(''))
})

test('can make a decision with an if with an else', () => {
  const results = []
  Observable.range(1, 5)
    .flatMap((x, i) => Observable.if(
      () => x % 2 === 0,
      Observable.of(x),
      Observable.range(x, i)
    ))
    .subscribe(::results.push)

  equal(__, results.join(''))
})

// XXX `case` not yet implemented
// test('we can make test cases', () => {
//   let result = ''

//   const cases = {
//     'matt': Observable.of(1),
//     'erik': Observable.of(2),
//     'bart': Observable.of(3),
//     'wes': Observable.of(4)
//   }

//   Observable.of(__)
//     .flatMap(x => Observable.case(
//       () => x,
//       cases
//     ))
//     .subscribe(x => { result = x })

//   equal(4, result)
// })

// XXX `case` not yet implemented
// test('we can also have a default case', () => {
//   let result = ''

//   const cases = {
//     'matt': Observable.of(1),
//     'erik': Observable.of(2),
//     'bart': Observable.of(3),
//     'wes': Observable.of(4)
//   }

//   Observable.of('RxJS')
//     .flatMap(x => Observable.case(
//       () => x,
//       cases,
//       Observable.of(__)
//     ))
//     .subscribe(x => { result = x })

//   equal(5, result)
// })

// XXX `while` not yet implemented
// test('while does something until proven false', () => {
//   let i = 0
//   const result = []

//   Observable
//     .while(
//       () => ++i < 3,
//       Observable.of(__)
//     )
//     .subscribe(::result.push)

//   equal('4242', result.join(''))
// })
