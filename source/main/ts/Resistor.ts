import IResistorProperties from "./IResistorProperties";

export default class Resistor implements IResistorProperties {
    ohmic: number;
    voltageDrop: number;
    powerUsed: number;

    constructor(ohmic: number, voltageDrop: number = 0, powerUsed: number = 0) {
        this.ohmic = ohmic;
        this.voltageDrop = voltageDrop;
        this.powerUsed = powerUsed;
    }
}
