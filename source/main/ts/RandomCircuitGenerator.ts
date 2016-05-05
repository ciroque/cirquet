"use strict";

import IRandomSource from './IRandomSource';
import RandomSource from './RandomSource';
import ICircuit from "./ICircuit";
import SerialCircuit from "./SerialCircuit";
import EmfSource from "./EmfSource";
import Resistor from "./Resistor";
import CircuitAnalyzer from "./CircuitAnalyzer";

export default class RandomCircuitGenerator  {
    randomSource: IRandomSource;

    constructor(randomSource: IRandomSource = new RandomSource()) {
        this.randomSource = randomSource;
    }

    createSerialCircuit(): ICircuit {
        let circuit = new SerialCircuit();

        for(var index = 0; index < this.randomSource.getEmfCount(); index++) {
            circuit.addEmf(new EmfSource(this.randomSource.getVoltage(), 0));
        }
        
        for(var index = 0; index < this.randomSource.getResistorCount(); index++) {
            circuit.addResistor(new Resistor(this.randomSource.getResistance()));
        }

        let analyzer = new CircuitAnalyzer();

        return analyzer.analyze(circuit);
    }
}
