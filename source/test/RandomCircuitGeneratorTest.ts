"use strict";

/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');

var expect = chai.expect;

describe('RandomCircuitGenerator', () => {
    describe('serial circuit generation', () => {
        it('is true', () => {
           expect(true).to.eq(true);
        });

        // it('does the things', () => {
        //    let generator = new RandomCircuitGenerator();
        //    let generated = generator.newSerialCircuit();
        // });
    });
});