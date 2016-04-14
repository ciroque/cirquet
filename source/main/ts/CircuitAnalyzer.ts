/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ICalculator from "./ICircuitAnalyzer";
import ICircuit from "./ICircuit";

export default class CircuitAnalyzer implements ICalculator {
    analyze(circuit: ICircuit): ICircuit {

        var validate = () => {
            if(circuit.amperageTotal === 0
                && circuit.resistanceTotal === 0
                && circuit.voltageTotal === 0) {
                throw "Invalid circuit";
            }
        };

        var applyOhmsLaw = (): ICircuit => {
            var cloned = circuit.clone({});

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

        validate();

        return applyOhmsLaw();
    }
}
