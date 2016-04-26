"use strict";

/// <reference path="../../typings/mocha/mocha.d.ts" />
/// <reference path="../../typings/chai/chai.d.ts" />

import chai = require('chai');

import Resistor from "../main/ts/Resistor";
import CircuitAnalyzer from "../main/ts/CircuitAnalyzer";
import SerialCircuit from "../main/ts/SerialCircuit";
import EmfSource from "../main/ts/EmfSource";

var expect = chai.expect;

describe('CircuitAnalyzer', () => {
    describe('Bad ICircuit', () => {
        it('to throw on invalid values', () => {
            let circuit = new SerialCircuit();
            let calculator = new CircuitAnalyzer();
            expect(() => calculator.analyze(circuit)).to.throw("Invalid circuit");
        });
    });

    describe('analyze resistance', () => {
        it('6 Ohms, 12 Volts is 2 amps : two EMF sources', () => {
            let resistor = new Resistor(6, 0, 0);
            let emfSource1 = new EmfSource(6, 0);
            let emfSource2 = new EmfSource(6, 0);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource1).addEmf(emfSource2).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('6 Ohms, 12 Volts is 2 amps', () => {
            let resistor = new Resistor(6, 0, 0);
            let emfSource = new EmfSource(12, 0);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('8 Ohms, 12 Volts is 1.5 amps', () => {
            let resistor = new Resistor(8, 0, 0);
            let emfSource = new EmfSource(12, 0);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.5);
            expect(resolvedCircuit.resistanceTotal).to.eq(8);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('10 Ohms, 12 Volts is 1.2 amps', () => {
            let resistor = new Resistor(10, 0, 0);
            let emfSource = new EmfSource(12, 0);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.resistanceTotal).to.eq(10);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('12 Ohms, 12 Volts is 1 amp', () => {
            let resistor = new Resistor(12, 0, 0);
            let emfSource = new EmfSource(12, 0);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(12);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('6 Ohms, 6 Volts is 1 amp', () => {
            let resistor = new Resistor(6, 0, 0);
            let emfSource = new EmfSource(6, 0);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(6);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });
    });

    describe('analyze voltage', () => {
        it('6 Ohms, 12 Volts is 2 amps : two EMF sources', () => {
            let resistor = new Resistor(6, 0, 0);
            let emfSource1 = new EmfSource(0, 1);
            let emfSource2 = new EmfSource(0, 1);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource1).addEmf(emfSource2).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('6 Ohms, 12 Volts is 2 amps', () => {
            let resistor = new Resistor(6, 0, 0);
            let emfSource = new EmfSource(0, 2);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('8 Ohms, 12 Volts is 1.5 amps', () => {
            let resistor = new Resistor(8, 0, 0);
            let emfSource = new EmfSource(0, 1.5);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.5);
            expect(resolvedCircuit.resistanceTotal).to.eq(8);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('10 Ohms, 12 Volts is 1.2 amps', () => {
            let resistor = new Resistor(10, 0, 0);
            let emfSource = new EmfSource(0, 1.2);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.resistanceTotal).to.eq(10);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('12 Ohms, 12 Volts is 1 amp', () => {
            let resistor = new Resistor(12, 0, 0);
            let emfSource = new EmfSource(0, 1);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(12);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });

        it('6 Ohms, 6 Volts is 1 amp', () => {
            let resistor = new Resistor(6, 0, 0);
            let emfSource = new EmfSource(0, 1);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource).addResistor(resistor);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(6);
            expect(resolvedCircuit.resistors.length).to.eq([resistor].length);
        });
    });

    describe('analyze current', () => {
        it('6 Ohms, 12 Volts is 2 amps : two EMF sources', () => {
            let emfSource1 = new EmfSource(6, 0.5);
            let emfSource2 = new EmfSource(6, 1.5);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource1).addEmf(emfSource2);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
        });

        it('6 Ohms, 12 Volts is 2 amps', () => {
            let emfSource = new EmfSource(12, 2);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(2);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('8 Ohms, 12 Volts is 1.5 amps', () => {
            let emfSource = new EmfSource(12, 1.5);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.5);
            expect(resolvedCircuit.resistanceTotal).to.eq(8);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('10 Ohms, 12 Volts is 1.2 amps', () => {
            let emfSource = new EmfSource(12, 1.2);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.resistanceTotal).to.eq(10);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('12 Ohms, 12 Volts is 1 amp', () => {
            let emfSource = new EmfSource(12, 1);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(12);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });

        it('6 Ohms, 6 Volts is 1 amp', () => {
            let emfSource = new EmfSource(6, 1);
            let calculator = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource);
            let resolvedCircuit = calculator.analyze(circuit);

            expect(resolvedCircuit.amperageTotal).to.eq(1);
            expect(resolvedCircuit.resistanceTotal).to.eq(6);
            expect(resolvedCircuit.voltageTotal).to.eq(6);
            expect(resolvedCircuit.resistors.length).to.eq(0);
        });
    });

    describe('resolve resistor values', () => {

        it('calculates total resistance and power for no resistors', () => {
            let emfSource = new EmfSource(24, 2);
            let analyzer = new CircuitAnalyzer();
            let circuit = new SerialCircuit().addEmf(emfSource);
            let resolvedCircuit = analyzer.analyze(circuit);

            expect(resolvedCircuit.resistanceTotal).to.eq(12);
        });

        it('calculates total resistance and power for one resistor: 10-ohm', () => {
            let emfSource = new EmfSource(12, 0);
            let analyzer = new CircuitAnalyzer();
            let r1 = new Resistor(10, 0, 0);
            let circuit = new SerialCircuit()
                .addEmf(emfSource)
                .addResistor(r1);

            let resolvedCircuit = analyzer.analyze(circuit);

            expect(resolvedCircuit.resistanceTotal).to.eq(r1.ohmic);
            expect(resolvedCircuit.amperageTotal).to.eq(1.2);
            expect(resolvedCircuit.voltageTotal).to.eq(12);
            expect(resolvedCircuit.wattageTotal).to.eq(resolvedCircuit.amperageTotal * resolvedCircuit.voltageTotal);
        });

       it('calculates total resistance and power for each of three resistors: 5-ohms, 10-ohms, and 15-ohms', () => {
           let analyzer = new CircuitAnalyzer();
           let r1 = new Resistor(5, 0, 0);
           let r2 = new Resistor(10, 0, 0);
           let r3 = new Resistor(15, 0, 0);
           let emfSource = new EmfSource(120, 0);
           let circuit = new SerialCircuit()
               .addEmf(emfSource)
               .addResistor(r1)
               .addResistor(r2)
               .addResistor(r3);

           let resolvedCircuit = analyzer.analyze(circuit);

           expect(resolvedCircuit.resistors[0].powerUsed).to.eq(80);
           expect(resolvedCircuit.resistors[1].powerUsed).to.eq(160);
           expect(resolvedCircuit.resistors[2].powerUsed).to.eq(240);
           expect(resolvedCircuit.wattageTotal).to.eq(480);
       });
    });
});
