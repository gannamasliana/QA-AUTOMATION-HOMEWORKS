
import { Equipment } from './equipment';

export class ConveyorBelt extends Equipment {
    private speed: number; // Encapsulation: speed is specific to the conveyor belt.

    public constructor(name: string, speed: number) {
        super(name);
        this.speed = speed;
    }

    // Asynchronous operation implementation.
    public async operate(): Promise<void> {
        console.log(`${this.name} Conveyor Belt is starting...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(`${this.name} Conveyor Belt is operating at ${this.speed} m/s.`);
    }
}
