"use strict";

/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');

import SerialCircuit from "../main/ts/SerialCircuit";
import Resistor from "../main/ts/Resistor";
import OhmicCalculator from "../main/ts/OhmicCalculator";

var expect = chai.expect;

describe('ohmicCalculator', () => {
    describe('calculate resistance', () => {
        it('6 Ohms, 12 Volts is 2 amps', () => {
            let resistor = new Resistor(6, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.calculate(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('8 Ohms, 12 Volts is 1.5 amps', () => {
            let resistor = new Resistor(8, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.calculate(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.5);
            expect(resolvedCircuit.resistanceTotal).to.eq(8);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('10 Ohms, 12 Volts is 1.2 amps', () => {
            let resistor = new Resistor(10, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.calculate(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.resistanceTotal).to.eq(10);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('12 Ohms, 12 Volts is 1 amp', () => {
            let resistor = new Resistor(12, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.calculate(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(12);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });
    });

    describe('calculate voltage', () => {
        it('6 Ohms, 12 Volts is 2 amps', () => {
            let resistor = new Resistor(6, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(2).addResistor(resistor);
            let resolvedCircuit = calculator.calculate(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });
    });
});
