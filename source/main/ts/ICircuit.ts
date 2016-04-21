/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ResistorProperties from "./IResistorProperties";
import ICloneable from "./ICloneable";

interface ICircuit extends ICloneable {
    resistors: ResistorProperties[];
    amperageTotal: number;
    voltageTotal: number;
    resistanceTotal: number;
    wattageTotal: number;
}

export default ICircuit;
