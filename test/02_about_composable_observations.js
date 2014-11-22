var Rx = require('rx'),
    Observable = Rx.Observable,
    Subject = Rx.Subject,
    Range = require('../util/range');

QUnit.module('Composable Observations');

var __ = 'Fill in the blank';

test('composable add', function () {
  var received = 0,
      numbers = [10, 100, __];

  Observable.from(numbers).sum().subscribe(function (x) { received = x; });

  equal(1110, received);
});

test('composable before and after', function () {
  var names = Range.create(1, 6),
      a = '',
      b = '';

  Observable.from(names)
    .tap(function (n) { a += n; })
    .filter(function (n) { return n % 2 === 0; })
    .tap(function (n) { b += n; })
    .subscribe();

  equal(__, a);
  equal('246', b);
});

test('we wrote this', function () {
  var received = [],
      names = ["Bart", "Marge", "Wes", "Linus", "Erik", "Matt"];

  Observable.from(names)
    .filter(function (n) { return n.length <= __; })
    .subscribe(received.push.bind(received));

  equal('Bart,Wes,Erik,Matt', received);
});

test('converting events', function () {
  var received = '',
      names = ["wE", "hOpE", "yOU", "aRe", "eNJoyIng", "tHiS"];

  Observable.from(names)
    .map(function (x) { return x.__(); })
    .subscribe(function (x) { received += x + ' '; });

  equal('we hope you are enjoying this ', received);
});

test('create a more relevant stream', function () {
  var received = '',
      mouseXMovements = [100, 200, 150],
      relativemouse = Observable.from(mouseXMovements).map(function (x) { return x - __; });

  relativemouse.subscribe(function (x) { received += x + ', '; });

  equal('50, 150, 100', receieved);
});

test('checking everything', function () {
  var received = null,
      names = [2,4,6,8];

  Observable.from(names)
    .every(function (x) { return x % 2 === 0; })
    .subscribe(function (x) { received = x; });

  equal(__, received);
});

test('', function () {
  var received = 0,
      numbers = Observable.range(1, 10);

  numbers.filter(function (x) { return x > __; })
    .sum()
    .subscribe(function (x) { received = x; });

  equal(19, received);
});
