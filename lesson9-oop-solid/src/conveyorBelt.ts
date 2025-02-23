import { Equipment } from "./equipment";

// ConveyorBelt class extends Equipment and implements its own operation logic.
export class ConveyorBelt extends Equipment {
  speed: number;

  constructor(name: string, speed: number) {
    super(name); // Call the parent class constructor.
    this.speed = speed;
  }

  // Asynchronous operation method.
  async operate(): Promise<void> {
    console.log(`${this.name} Conveyor Belt is starting...`);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating delay.
    console.log(`${this.name} Conveyor Belt is operating at ${this.speed} m/s.`);
  }
}
