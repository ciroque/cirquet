/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import Circuit from "./ICircuit";
import Calculator from "./ICalculator";

export default class OhmicCalculator implements Calculator {
    calculate(circuit: Circuit): Circuit {

        var cloned = circuit.clone({});

        if(cloned.amperageTotal === 0) {
            cloned = cloned.withAmperage( cloned.voltageTotal / cloned.resistanceTotal );
        }

        return cloned;
    }
}
