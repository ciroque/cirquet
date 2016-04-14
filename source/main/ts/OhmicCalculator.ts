/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import Circuit from "./ICircuit";
import Calculator from "./ICalculator";
import ICircuit from "./ICircuit";

export default class OhmicCalculator implements Calculator {
    calculate(circuit: Circuit): Circuit {

        var validate = (c: ICircuit) => {
            if(c.amperageTotal === 0 && c.resistanceTotal === 0 && c.voltageTotal === 0) {
                throw "Invalid circuit";
            }
        };

        validate(circuit);

        var cloned = circuit.clone({});

        if(cloned.amperageTotal === 0 && cloned.voltageTotal !== 0) {
            cloned = cloned.withAmperage(cloned.voltageTotal / cloned.resistanceTotal );
        } else if(cloned.amperageTotal !== 0 && cloned.voltageTotal === 0) {
            cloned = cloned.withVoltage(cloned.amperageTotal * cloned.resistanceTotal);
        } else if(cloned.amperageTotal !== 0 && cloned.voltageTotal !== 0) {
            cloned.withTotalResistance(cloned.voltageTotal / cloned.amperageTotal);
        }
        
        return cloned;
    }
}
