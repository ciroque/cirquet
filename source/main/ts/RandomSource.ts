"use strict";

import IRandomSource from "./IRandomSource";

export default class RandomSource implements IRandomSource {
    getEmfCount(): number {
        let emfCount = Math.floor(Math.random() * (6 - 1) + 1);
        console.log("emfCount = " + emfCount + "\n");
        return emfCount;
    }
    getResistorCount(): number {
        let resistorCount = Math.floor(Math.random() * (12 - 1) + 1);
        console.log("resistorCount = " + resistorCount + "\n");
        return resistorCount;
    }

    getVoltage(): number {
        let voltage = Math.floor(Math.random() * (240 - 1) + 1);
        console.log("voltage = " + voltage + "\n");
        return voltage;
    }
    
    getResistance(iecSeries: number = 12): number {
        let getDecade = function() {
            let multipliers = [1, 10, 100, 1000, 10000, 100000, 1000000];
            let multiplierIndex = Math.floor(Math.random() * multipliers.length);
            return multipliers[multiplierIndex];
        };

        // Do it the Maths way. Doesn't work.
        // let base = parseFloat(Math.pow(10, ( 1 / iecSeries)).toFixed(3));
        // let decade = getDecade();
        // let index = Math.floor(Math.random() * (iecSeries - 1) + 1);
        // let baseResistance = parseFloat(Math.pow(base, index).toFixed(1));
        // let resistance = baseResistance * decade;
        // console.log(`>>> BASE(${base}), INDEX(${index}), DECADE(${decade}), BASERESISTANCE(${baseResistance}), RESISTANCE(${resistance})`);

        let baseResistances = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1];
        let resistanceIndex = Math.floor(Math.random() * (baseResistances.length));
        return baseResistances[resistanceIndex] * getDecade();
    }

    getAmperage(): number {
        return 0;
    }
}