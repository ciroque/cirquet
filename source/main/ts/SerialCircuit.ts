"use strict";

import IEmfProperties from "./IEmfProperties";
import IResistorProperties from "./IResistorProperties";
import ICircuit from "./ICircuit";
import Cloneable from "./Cloneable";

export default class SerialCircuit extends Cloneable implements ICircuit {
    electromotiveForces: IEmfProperties[] = [];
    resistors: IResistorProperties[] = [];
    amperageTotal: number = 0;
    voltageTotal: number = 0;
    resistanceTotal: number = 0;
    wattageTotal: number = 0;

    constructor() { super(); }

    addResistor(resistor: IResistorProperties) {
        this.resistors.push(resistor);
        this.resistanceTotal += resistor.ohmic;
        return this;
    }

    addEmf(emf: IEmfProperties) {
        this.electromotiveForces.push(emf);
        this.voltageTotal += emf.voltage;
        this.amperageTotal += emf.amperage;
        return this;
    }

    toString() {
        return `amps: ${this.amperageTotal}\nvolts: ${this.voltageTotal}\nwattage: ${this.wattageTotal}\nohms: ${this.resistanceTotal}`;
    }
}
