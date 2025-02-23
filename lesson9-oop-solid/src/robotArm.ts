import { Equipment } from "./equipment";

// RobotArm class extends Equipment with additional properties.
export class RobotArm extends Equipment {
  precision: number;

  constructor(name: string, precision: number) {
    super(name);
    this.precision = precision;
  }

  // Asynchronous operation method.
  async operate(): Promise<void> {
    console.log(`${this.name} Robot Arm is initializing...`);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating delay.
    console.log(`${this.name} Robot Arm is operating with precision ${this.precision}.`);
  }
}
