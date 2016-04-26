import IEmfProperties from "./IEmfProperties";

export default class EmfSource implements IEmfProperties {
    voltage: number;
    amperage: number;

    constructor(voltage: number, amperage: number) {
        this.voltage = voltage;
        this.amperage = amperage;
    }
}