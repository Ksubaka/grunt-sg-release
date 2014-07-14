'use strict';

var grunt = require('grunt');

var messages = require('../tasks/lib/messages');
var gitHelper = require('../tasks/lib/helpers/git');
var stdoutEqual = require('./helpers/stdout_equal.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sg_release = {

  setUp: function (done) {
    // setup here if necessary
    done();
  },


  // ---


  noGitAvailable: function (test) {
    test.expect(1);

    var gitExecName = gitHelper.execName;
    var gruntFatal = grunt.fatal;

    gitHelper.execName = 'nonExistingGitCommand';
    grunt.fatal = function mockGruntFatal(msg) {
      test.equal(msg, messages.noGitError);
    };

    gitHelper.check(grunt);

    gitHelper.execName = gitExecName;
    grunt.fatal = gruntFatal;

    test.done();
  },


  // ---


  default_options: function (test) {
    test.expect(1);

    test.ok(true);

    test.done();
  },


  // ---


  custom_options: function (test) {
    test.expect(1);

    test.ok(true);

    test.done();
  }
};

