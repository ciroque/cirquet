/**
 * Created by swagner on 4/3/16.
 */

"use strict";

/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');

var expect = chai.expect;

describe('1st tests', () => {
    it('true is true', () => expect(true).to.equals(true));
});
