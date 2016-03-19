var Rx = require('rx'),
Observable = Rx.Observable;

QUnit.module('Error Handling');

var __ = 'Fill in the blank';

test('onError is called when Error is thrown', function () {
  var result;
  var throwingObservable = Observable.throw(new Error());

  throwingObservable.subscribe(
    function (x) { result = 'safe & sound'; }, //onNext
    function (e) { result = 'uh oh'; } //onError
  );

  equal(result, __);
});

test('class level catch moves to the next sequence on error', function () {
  Observable.catch(
    Observable.throw(new Error('If at first you dont succeed')),
    Observable.throw(new Error('Try, try, try again')),
    Observable.just(42)
  ).subscribe(function (x) { equal(x, __); });
});

test('instance level catch moves to the next sequence on error', function () {
  var throwingObservable = Observable.throw(new Error(__));

  throwingObservable.catch(function (e) {
    return e.message === 'help' ? Observable.just('I need somebody') : Observable.just('not just anybody');
  }).subscribe(function (msg) { equal(msg, 'I need somebody'); });
});

test('continue a stream that is terminated normally or by an Error with the next stream ', function () {
  var easy = [];
  var source = Rx.Observable.onErrorResumeNext(
    Rx.Observable.just('A'),
    Rx.Observable.throw(new Error()),
    Rx.Observable.just('B'),
    Rx.Observable.throw(new Error()),
    Rx.Observable.just('C')
  ).subscribe(easy.push.bind(easy));

  equal(easy.join(''), __);
});

asyncTest('retry a sequence a number of times', function () {
  var count = 0;
  var received;
  var source = Rx.Observable.interval(10)
  .selectMany(function () {
    if (++count < 2) {
      return Rx.Observable.throw(new Error());
    }
    return Rx.Observable.return(42);
  })
  .retry(__).subscribe(
    function (x) { received = x; },
    function (e) { /*woops*/}
  );

  setTimeout(function () {
    start();
    equal(received, 42);
  }, 50);
});

test('finally invokes action after the sequence ends', function () {
  var result = [];
  Observable.throw(new Error())
  .finally(function () { result.push('some good news')})
  .subscribe(
    function (x) { result.push('hope for the best'); },
    function (e) { result.push('finally'); }
  );

  equal(result.join(' '), __);
});
