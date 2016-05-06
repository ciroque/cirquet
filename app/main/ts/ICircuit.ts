"use strict";

import IEmfProperties from "./IEmfProperties";
import IResistorProperties from "./IResistorProperties";
import ICloneable from "./ICloneable";

interface ICircuit extends ICloneable {
    resistors: IResistorProperties[];
    electromotiveForces: IEmfProperties[];
    amperageTotal: number;
    voltageTotal: number;
    resistanceTotal: number;
    wattageTotal: number;
}

export default ICircuit;
