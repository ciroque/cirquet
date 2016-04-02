"use strict";

interface ResistorProperties {
    ohmic: number;
    voltageDrop: number;
    powerUsed: number;
}

interface Circuit {
    resistors: ResistorProperties[];
    amperageTotal: number;
    voltageTotal: number;
    resistanceTotal: number;
}

class SerialCircuit implements Circuit {
    resistors: ResistorProperties[];
    amperageTotal: number;
    voltageTotal: number;
    resistanceTotal: number = 0;

    constructor(resistors: ResistorProperties[], amperage: number, voltage: number) {
        this.resistors = resistors;
        this.amperageTotal = amperage;
        this.voltageTotal = voltage;
    }

}

interface Calculator {
    calculate(circuit: Circuit): Circuit;
}

class OhmsLawCalculator implements Calculator {
    calculate(circuit: Circuit): Circuit {

        return circuit;
    }
}