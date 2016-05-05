"use strict";

import IRandomSource from "./IRandomSource";

export default class RandomSource implements IRandomSource {
    standardResistances = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1];
    standardVoltages = [1.8, 3.3, 5, 9, 12, 15, 18, 24, 48, 120, 220, 240];

    getEmfCount(): number {
        let emfCount = Math.floor(Math.random() * (6 - 1) + 1);
        // console.log("emfCount = " + emfCount + "\n");
        return emfCount;
    }

    getResistorCount(): number {
        let resistorCount = Math.floor(Math.random() * (12 - 1) + 1);
        // console.log("resistorCount = " + resistorCount + "\n");
        return resistorCount;
    }

    getVoltage(): number {
        let voltage = Math.floor(Math.random() * (240 - 1) + 1);
        // console.log("voltage = " + voltage + "\n");
        return voltage;
    }
    
    getResistance(): number {
        let multipliers = [1, 10, 100, 1000, 10000, 100000, 1000000];
        let resistanceIndex = Math.floor(Math.random() * (this.standardResistances.length));
        let multiplierIndex = Math.floor(Math.random() * (multipliers.length));
        return this.standardResistances[resistanceIndex] * multipliers[multiplierIndex];
    }

    getAmperage(): number {
        let amperage = Math.floor(Math.random() * (240 - 1) + 1);
        // console.log("amperage = " + amperage + "\n");
        return amperage;
    }

    getCommonVoltage(): number {
        let voltageIndex = Math.floor(Math.random() * (this.standardVoltages.length));
        return this.standardVoltages[voltageIndex];
    }
}