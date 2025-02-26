"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RobotArm = void 0;
const equipment_1 = require("./equipment");
// RobotArm class extends Equipment with additional properties.
class RobotArm extends equipment_1.Equipment {
    constructor(name, precision) {
        super(name);
        this.precision = precision;
    }
    // Asynchronous operation method.
    operate() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${this.name} Robot Arm is initializing...`);
            yield new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating delay.
            console.log(`${this.name} Robot Arm is operating with precision ${this.precision}.`);
        });
    }
}
exports.RobotArm = RobotArm;
