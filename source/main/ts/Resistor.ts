/**
 * Created by swagner on 4/3/16.
 */

import IResistorProperties from "./IResistorProperties";

export default class Resistor implements IResistorProperties {
    ohmic: number;
    voltageDrop: number;
    powerUsed: number;

    constructor(ohmic: number, voltageDrop: number, powerUsed: number) {
        this.ohmic = ohmic;
        this.voltageDrop = voltageDrop;
        this.powerUsed = powerUsed;
    }
}
