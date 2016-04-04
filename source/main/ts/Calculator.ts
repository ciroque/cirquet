/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import Circuit from "./Circuit";

interface Calculator {
    calculate(circuit: Circuit): Circuit;
}

export default Calculator;
