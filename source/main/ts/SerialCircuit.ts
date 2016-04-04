/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ResistorProperties from "./ResistorProperties";
import Circuit from "./Circuit";

export default class SerialCircuit implements Circuit {
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
