/**
 * Created by swagner on 4/3/16.
 */

"use strict";

import ICircuit from "./ICircuit";

interface ICircuitAnalyzer {
    analyze(circuit: ICircuit): ICircuit;
}

export default ICircuitAnalyzer;
