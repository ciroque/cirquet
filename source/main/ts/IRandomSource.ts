"use strict";

interface IRandomSource {
    getAmperage(): number;
    getEmfCount(): number;
    getResistance(): number;
    getResistorCount(): number;
    getVoltage(): number;
}

export default IRandomSource;
