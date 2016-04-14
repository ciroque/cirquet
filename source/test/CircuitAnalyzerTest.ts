"use strict";

/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');

import SerialCircuit from "../main/ts/SerialCircuit";
import Resistor from "../main/ts/Resistor";
import OhmicCalculator from "../main/ts/CircuitAnalyzer";

var expect = chai.expect;

describe('CircuitAnalyzer', () => {
    describe('Bad ICircuit', () => {
        it('to throw on invalid values', () => {
            let circuit = new SerialCircuit();
            let calculator = new OhmicCalculator();
            expect(() => calculator.analyze(circuit)).to.throw("Invalid circuit");
        });
    });

    describe('analyze resistance', () => {
        it('6 Ohms, 12 Volts is 2 amps', () => {
            let resistor = new Resistor(6, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('8 Ohms, 12 Volts is 1.5 amps', () => {
            let resistor = new Resistor(8, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.5);
            expect(resolvedCircuit.resistanceTotal).to.eq(8);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('10 Ohms, 12 Volts is 1.2 amps', () => {
            let resistor = new Resistor(10, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.resistanceTotal).to.eq(10);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('12 Ohms, 12 Volts is 1 amp', () => {
            let resistor = new Resistor(12, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(12).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(12);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('6 Ohms, 6 Volts is 1 amp', () => {
            let resistor = new Resistor(6, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withVoltage(6).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(6);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });
    });

    describe('analyze voltage', () => {
        it('6 Ohms, 12 Volts is 2 amps', () => {
            let resistor = new Resistor(6, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(2).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('8 Ohms, 12 Volts is 1.5 amps', () => {
            let resistor = new Resistor(8, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1.5).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.5);
            expect(resolvedCircuit.resistanceTotal).to.eq(8);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('10 Ohms, 12 Volts is 1.2 amps', () => {
            let resistor = new Resistor(10, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1.2).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.resistanceTotal).to.eq(10);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('12 Ohms, 12 Volts is 1 amp', () => {
            let resistor = new Resistor(12, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(12);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('6 Ohms, 6 Volts is 1 amp', () => {
            let resistor = new Resistor(6, 0, 0);
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(6);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });
    });

    describe('analyze current', () => {
        it('6 Ohms, 12 Volts is 2 amps', () => {
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(2).withVoltage(12);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('8 Ohms, 12 Volts is 1.5 amps', () => {
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1.5).withVoltage(12);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.5);
            expect(resolvedCircuit.resistanceTotal).to.eq(8);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('10 Ohms, 12 Volts is 1.2 amps', () => {
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1.2).withVoltage(12);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.resistanceTotal).to.eq(10);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('12 Ohms, 12 Volts is 1 amp', () => {
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1).withVoltage(12);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(12);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('6 Ohms, 6 Volts is 1 amp', () => {
            let calculator = new OhmicCalculator();
            let circuit = new SerialCircuit().withAmperage(1).withVoltage(6);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(6);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });
    });
});
