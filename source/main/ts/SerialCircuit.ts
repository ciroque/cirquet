/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ResistorProperties from "./IResistorProperties";
import ICircuit from "./ICircuit";
import Cloneable from "./Cloneable";

export default class SerialCircuit extends Cloneable implements ICircuit {
    resistors: ResistorProperties[] = [];
    amperageTotal: number = 0;
    voltageTotal: number = 0;
    resistanceTotal: number = 0;
    wattageTotal: number = 0;

    constructor() { super(); }

    withAmperage(amperage: number) {
        this.amperageTotal = amperage;
        return this;
    }

    withVoltage(voltage: number) {
        this.voltageTotal = voltage;
        return this;
    }

    withTotalResistance(resistance: number) {
        this.resistanceTotal = resistance;
        return this;
    }

    withTotalWattage(wattage: number) {
        this.wattageTotal = wattage;
        return this;
    }

    addResistor(resistor: ResistorProperties) {
        this.resistors.push(resistor);
        this.resistanceTotal += resistor.ohmic;
        return this;
    }

    toString() {
        return `amps: ${this.amperageTotal}\nvolts: ${this.voltageTotal}\nwattage: ${this.wattageTotal}\nohms: ${this.resistanceTotal}`;
    }
}
