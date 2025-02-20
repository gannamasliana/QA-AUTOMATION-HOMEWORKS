"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction["Up"] = "100";
    Direction["Down"] = "101";
    Direction[Direction["Left"] = 200] = "Left";
    Direction["Right"] = "some mode description for Right enum value";
})(Direction || (exports.Direction = Direction = {}));
console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right);
const context = {
    up: Direction.Up
};
console.log(context);
const context2 = {};
context2[Direction.Up] = 'Up';
context2[Direction.Right] = 'Right';
const context3 = {};
context3[Direction.Down] = 'Down';
context3[Direction.Left] = 'Left';
console.log(context, context2, context3);
const objectPropDemo = [...Object.keys(context), ...Object.values(context3)];
console.log(objectPropDemo);
