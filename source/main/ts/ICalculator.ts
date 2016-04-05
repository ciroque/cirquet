/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import Circuit from "./ICircuit";

interface ICalculator {
    calculate(circuit: Circuit): Circuit;
}

export default ICalculator;
