import { Equipment } from './equipment';

export class RobotArm extends Equipment {
    private precision: number; // Encapsulation: precision is specific to the robot arm.

    public constructor(name: string, precision: number) {
        super(name);
        this.precision = precision;
    }

    public async operate(): Promise<void> {
        console.log(`${this.name} Robot Arm is initializing...`);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`${this.name} Robot Arm is operating with precision ${this.precision}.`);
    }
}
