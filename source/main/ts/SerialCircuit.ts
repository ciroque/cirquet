/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ResistorProperties from "./IResistorProperties";
import Circuit from "./ICircuit";
import Cloneable from "./Cloneable";

export default class SerialCircuit extends Cloneable implements Circuit {
    resistors: ResistorProperties[] = [];
    amperageTotal: number = 0;
    voltageTotal: number = 0;
    resistanceTotal: number = 0;

    constructor() { super(); }

    withAmperage(amperage: number) {
        this.amperageTotal = amperage;
        return this;
    }

    withVoltage(voltage: number) {
        this.voltageTotal = voltage;
        return this;
    }

    addResistor(resistor: ResistorProperties) {
        this.resistors.push(resistor);
        this.resistanceTotal += resistor.ohmic;
        return this;
    }
}
