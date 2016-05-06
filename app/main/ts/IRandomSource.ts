"use strict";

interface IRandomSource {
    getAmperage(): number;
    getEmfCount(): number;
    getResistance(): number;
    getResistorCount(): number;
    getVoltage(): number;
    getCommonVoltage(): number;
}

export default IRandomSource;
