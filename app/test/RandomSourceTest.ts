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

        it('generates valid resistance values', () => {
            let randomSource = new RandomSource();

            for(var index = 0; index < 20; index++) {
                let resistance = randomSource.getResistance();
                let oom = Math.floor(Math.log2(resistance) * (1 / Math.log2(10)));
                let baseResistance = resistance / Math.pow(10, oom);
                expect(baseResistance).to.be.oneOf(randomSource.standardResistances);
            }
        });

        it('generates random amperage between 0 and 240', () => {
           let randomSource = new RandomSource();
           let amperage = randomSource.getAmperage();

            expect(amperage).to.be.within(0, 240);
        });

        it('generates voltages from a sequence of common voltages', () => {
            let randomSource = new RandomSource();
            let voltage = randomSource.getCommonVoltage();
            expect(voltage).to.be.oneOf(randomSource.standardVoltages);
        })
    });
});
