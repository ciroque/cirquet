/**
 * Created by swagner on 4/4/16.
 */

import ICloneable from "./ICloneable";

export default class Cloneable implements ICloneable {
    clone(overrides: Object): any {
        // var cloned = new (<any>this.constructor());
        var cloned = {};
        for(var attr in this) {
            // if(typeof(this[attr]) === "object") {
            //     console.log("$$>>> " + attr);
            //     cloned[attr] = this[attr].clone();
            // } else {
                cloned[attr] = this[attr];
            // }
        }

        for(var attr in overrides) {
            cloned[attr] = overrides[attr];
        }

        return cloned;
    }
}