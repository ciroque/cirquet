"use strict";

/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import IRandomSource from '../main/ts/IRandomSource';
import RandomCircuitGenerator from '../main/ts/RandomCircuitGenerator';

import chai = require('chai');

var expect = chai.expect;

class MockRandomSource implements IRandomSource {
    amperage: number;
    emfCount: number;
    resistance: number;
    resistorCount: number;
    voltage: number;
    commonVoltage: number;
    
    constructor(amperage, emfCount, resistance, resistorCount, voltage, commonVoltage = 3.3) {
        this.amperage = amperage;
        this.emfCount = emfCount;
        this.resistance = resistance;
        this.resistorCount = resistorCount;
        this.voltage = voltage;
        this.commonVoltage = commonVoltage;
    }

    getAmperage(): number { return this.amperage; }
    getEmfCount(): number { return this.emfCount; };
    getResistance(): number { return this.resistance; };
    getResistorCount(): number { return this.resistorCount };
    getVoltage(): number { return this.voltage; };
    getCommonVoltage(): number { return this.commonVoltage; };
}

describe('RandomCircuitGenerator', () => {

    describe('serial circuit generation', () => {
        it('is true', () => {
           expect(true).to.eq(true);
        });

        it('generates a random circuit using the RandomSource and non-common voltages', () => {
           let randomSource = new MockRandomSource(0, 1, 4.7, 1, 17);
           let generator = new RandomCircuitGenerator(randomSource);
           let generated = generator.createSerialCircuit(false);

           expect(generated.resistors.length).to.eq(1);
           expect(generated.electromotiveForces.length).to.eq(1);
           expect(generated.electromotiveForces[0].voltage).to.eq(17);
           expect(generated.electromotiveForces[0].amperage).to.eq(0);
           expect(generated.resistors[0].ohmic).to.eq(4.7);
           expect(generated.resistors[0].voltageDrop).to.eq(0);
           expect(generated.voltageTotal).to.eq(17);
           expect(generated.resistanceTotal).to.eq(4.7);
        });

        it('generates a random circuit with common voltages', () => {
           let randomSource = new MockRandomSource(0, 1, 4.7, 1, 5);
           let generator = new RandomCircuitGenerator(randomSource);
           let generated = generator.createSerialCircuit();

           expect(generated.resistors.length).to.eq(1);
           expect(generated.electromotiveForces.length).to.eq(1);
           expect(generated.electromotiveForces[0].voltage).to.eq(3.3);
           expect(generated.electromotiveForces[0].amperage).to.eq(0);
           expect(generated.resistors[0].ohmic).to.eq(4.7);
           expect(generated.resistors[0].voltageDrop).to.eq(0);
           expect(generated.voltageTotal).to.eq(3.3);
           expect(generated.resistanceTotal).to.eq(4.7);
        });

        it('generates a true random circuit', () => {
            let generator = new RandomCircuitGenerator();
            let generated = generator.createSerialCircuit();
            console.log(JSON.stringify(generated));
        });
    });
});