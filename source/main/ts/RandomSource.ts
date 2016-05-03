"use strict";

import IRandomSource from "./IRandomSource";

export default class RandomSource implements IRandomSource {

    standardResistances = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1];

    getEmfCount(): number {
        let emfCount = parseInt(Math.random() * (6 - 1) + 1);
        console.log("emfCount = " + emfCount + "\n");
        return emfCount;
    }
    getResistorCount(): number {
        let resistorCount = parseInt(Math.random() * (12 - 1) + 1);
        console.log("resistorCount = " + resistorCount + "\n");
        return resistorCount;
    }

    getVoltage(): number {
        let voltage = parseInt(Math.random() * (240 - 1) + 1);
        console.log("voltage = " + voltage + "\n");
        return voltage;
    }
    
    getResistance(): number {
        let multipliers = [1, 10, 100, 1000, 10000, 100000, 1000000];

        let resistanceIndex = parseInt(Math.random() * (this.standardResistances.length));
        let multiplierIndex = parseInt(Math.random() * (multipliers.length));
        let baseResistance = this.standardResistances[resistanceIndex];
        let decade = multipliers[multiplierIndex];

        return baseResistance * decade;
    }

    getAmperage(): number {
        return 0;
    }
}