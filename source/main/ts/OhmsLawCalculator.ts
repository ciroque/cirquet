/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import Circuit from "./Circuit";
import Calculator from "./Calculator";

export class OhmsLawCalculator implements Calculator {
    calculate(circuit: Circuit): Circuit {
        return circuit;
    }
}