/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ResistorProperties from "./ResistorProperties";

interface Circuit {
    resistors: ResistorProperties[];
    amperageTotal: number;
    voltageTotal: number;
    resistanceTotal: number;
}

export default Circuit;
