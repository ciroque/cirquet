"use strict";

/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');

var expect = chai.expect;

import RandomSource from "../main/ts/RandomSource";

describe('RandomSource', () => {
    describe('Generates random number in appropriate ranges', () => {
        it('Random voltage between 0 and 240', () => {
            let randomSource = new RandomSource();
            let voltage = randomSource.getVoltage();
            expect(voltage).to.be.within(0, 240);
        });

        it('Random EMF count between 1 and 6', () => {
            let randomSource = new RandomSource();
            let voltage = randomSource.getEmfCount();
            expect(voltage).to.be.within(1, 6);
        });

        it('Random Resistor count between 1 and 6', () => {
            let randomSource = new RandomSource();
            let resistorCount = randomSource.getResistorCount();
            expect(resistorCount).to.be.within(1, 12);
        });

        it('does the things', () => {
            let randomSource = new RandomSource();
            console.log('--- JOIN THE RESISTANCE ---');
            console.log(randomSource.getResistance());
            console.log(randomSource.getResistance());
            console.log(randomSource.getResistance());
            console.log(randomSource.getResistance());
            console.log(randomSource.getResistance());
        });
    });
});