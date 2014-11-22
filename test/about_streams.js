var Rx = require('rx'),
    Observable = Rx.Observable,
    Subject = Rx.Subject;

QUnit.module('Observable Streams');

var __ = undefined;

test('simple subscription', function () {
  Observable.just(42).subscribe(function (x) { equal(x, __); });
});

test('what comes in goes out', function () {
  Observable.just(__).subscribe(function (x) { equal(x, 101); });
});

// Which interface Rx apply? (hint: what does "just()" return)
test('this is the same as an event stream', function () {
  var events = new Subject();
  subject.subscribe(function (x) { equal(__, x); });
  subject.onNext(37);
});

// What is the relationship between "this is the same as an event stream" and "simple subscription"?
test('how event streams relate to observables', function () {
  var observableResult = 1;
  Observable.just(73).subscribe(function (x) { observableResult = x; });

  var eventStreamResult = 1;
  var events = new Subject();
  events.subscribe(function (x) { eventStreamResult = x; });
  events.__(73);

  equal(observableResult, eventStreamResult);
});

// What does Observable.just() map to for a Subject?
test('event streams have multiple results', function () {
  var eventStreamResult = 0;
  var events = new Subject();
  events.subscribe(function (x) { eventStreamResult += x; });

  events.onNext(10);
  events.onNext(7);

  equal(__, eventStreamResult);
});

// What does Observable.just() map to for a Subject?
test('simple return', function () {
  var received = '';
  Observable.just('foo').subscribe(function (x) { received = x; });

  equal(__, received);
});

			var received = "";
			Observable.Return("Foo").Subscribe((string s) => received = s);
			Assert.AreEqual(___, received);
