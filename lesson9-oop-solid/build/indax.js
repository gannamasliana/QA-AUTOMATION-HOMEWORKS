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
const conveyor_belt_1 = require("./conveyor-belt");
const robot_arm_1 = require("./robot-arm");
const operations_1 = require("./operations");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Initializing lean manufacturing process...');
        const conveyor = new conveyor_belt_1.ConveyorBelt('Main Line', 2.5);
        const robot = new robot_arm_1.RobotArm('Welding Unit', 0.01);
        yield (0, operations_1.runEquipment)(conveyor);
        yield (0, operations_1.runEquipment)(robot);
        console.log('Manufacturing process completed.');
    });
}
// Execute the main function.
main().catch((error) => console.error('Error in manufacturing process:', error));
