# Learn the Reactive Extensions for JavaScript (RxJS) with RxJS Koans #

The Koans walk you along the path to enlightenment in order to learn [RxJS](https://github.com/Reactive-Extensions/RxJS). The goal is to learn the RxJS library. We also teach you culture. Testing is not just something we pay lip service to, but something we live. It is essential in your quest to learn and do great things in the library.

## Structure ##

The koans are broken out into areas by file, events are covered in about_events.js, time is introduced in about_time.js, etc. They are presented in order in the index.js file.

Each koan builds up your knowledge of RxJS and builds upon itself.

Some koans simply need to have the correct answer substituted for an incorrect one. Some, however, require you to supply your own answer. If you see the method __ (a double underscore) listed, it is a hint to you to supply your own code in order to make it work correctly.

## Installing Node.js ##

In order to run the koans you need Node.js installed. If you do not already have Node.js set up, please visit the [Node.js](http://nodejs.org/) site to install Node.js.

To verify your installation, in your terminal window simply type:
```bash
$ node --version
```
Any response for Node with a version number greater than 0.10.x is fine.

## Installing the RxJS Koans ##

First, you should have [Mocha](http://mochajs.org/) installed globally in order to get started:
```bash
$ {sudo} npm install -g mocha
```

To install the RxJS Koans, download via Git and add the depdencies via NPM:
```bash
$ git clone https://github.com/Reactive-Extensions/RxJSKoans.git
$ cd RxJSKoans
[RxJSKoans ]$ npm install
```

## The Path to Enlightenment ##

You can run the tests by calling `npm test` at your terminal window.
```bash
[RxJSKoans] $ npm test
```

## Red, Green, Refactor ##

In test-driven development (TDD) the mantra has always been red: write a failing test and run it, green: make the test pass, and refactor: look at the code and see if you can make it any better.

With the koans, you will need to run the tests and see it fail (red), make the test pass (green), then take a moment and reflect upon the test to see what it is teaching you and improve the code to better communicate its intent (refactor).

The very first time you run it you will see the following output:
```bash
  Observable Streams
    1) simple subscription

  1) Observable Streams simple subscription:
     Error: expected 42 to equal undefined
```

You have come to the first error. You then open up the `about_streams.js` file in your text editor and look at `simple subscription`:

```js
test('simple subscription', function () {
  Observable.just(42).subscribe(function (x) { equal(x, __); });
});
```

You then change `__` to `42` and run the tests again. You should now have fixed the error.

Before moving on, think about what you are learning.

In this specific case, ignore everything except the method name  and the parts inside the method. The goal is for you to see that if you pass a value to the proper assertion method method, it will either ensure it is true and continue on, or fail if in fact the statement is false.

## License ##

Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions
and limitations under the License.
