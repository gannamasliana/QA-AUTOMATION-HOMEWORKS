import { expect } from 'chai'; // Import Chai assertion library
import { ConveyorBelt } from '../src/conveyor-belt'; // Import the ConveyorBelt class

describe('ConveyorBelt Class', () => {
    it('should create an instance of ConveyorBelt', () => {
    // Create a new ConveyorBelt instance
        const conveyor = new ConveyorBelt('Test Conveyor', 3);

        // Assert that the instance is actually of type ConveyorBelt
        expect(conveyor).to.be.instanceOf(ConveyorBelt);
    });

    it('should execute operate() method and print logs', async () => {
    // Create a new ConveyorBelt instance
        const conveyor = new ConveyorBelt('Test Conveyor', 3);

        // Call the operate() method and ensure it executes without errors
        await conveyor.operate();
    });
});
