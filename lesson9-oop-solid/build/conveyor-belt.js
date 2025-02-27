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
exports.ConveyorBelt = void 0;
const equipment_1 = require("./equipment");
class ConveyorBelt extends equipment_1.Equipment {
    constructor(name, speed) {
        super(name);
        this.speed = speed;
    }
    // Asynchronous operation implementation.
    operate() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${this.name} Conveyor Belt is starting...`);
            yield new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(`${this.name} Conveyor Belt is operating at ${this.speed} m/s.`);
        });
    }
}
exports.ConveyorBelt = ConveyorBelt;
