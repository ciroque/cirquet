/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ICalculator from "./ICircuitAnalyzer";
import ICircuit from "./ICircuit";

export default class CircuitAnalyzer implements ICalculator {
    analyze(circuit: ICircuit): ICircuit {

        var validate = (c: ICircuit) => {
            if(c.amperageTotal === 0
                && c.resistanceTotal === 0
                && c.voltageTotal === 0) {
                throw "Invalid circuit";
            }
        };

        var applyOhmsLaw = (c: ICircuit): ICircuit => {
            var cloned = c.clone({});

            // I = E / R
            if(cloned.amperageTotal === 0 && cloned.voltageTotal !== 0) {
                cloned = cloned.withAmperage(cloned.voltageTotal / cloned.resistanceTotal );

            // E = I * R
            } else if(cloned.amperageTotal !== 0 && cloned.voltageTotal === 0) {
                cloned = cloned.withVoltage(cloned.amperageTotal * cloned.resistanceTotal);

            // R = E / I
            } else if(cloned.amperageTotal !== 0 && cloned.voltageTotal !== 0) {
                cloned.withTotalResistance(cloned.voltageTotal / cloned.amperageTotal);
            }

            return cloned;
        };

        var calculateResistorValues = (c: ICircuit) => {
          var wattage = 0;
          for(let index = 0; index < c.resistors.length; index++) {
            let r = c.resistors[index];
            r.powerUsed = (c.amperageTotal * c.amperageTotal) * r.ohmic;
            wattage += r.powerUsed;
          }

          c.wattageTotal = wattage;

          return c;
        };

        validate(circuit);

        return calculateResistorValues(applyOhmsLaw(circuit));
    }
}
