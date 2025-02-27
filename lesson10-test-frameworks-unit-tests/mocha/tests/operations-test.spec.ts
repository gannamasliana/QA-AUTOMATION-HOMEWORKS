import { expect } from 'chai'; // Import Chai assertion library
import { runEquipment } from '../src/operations'; // Import the runEquipment function
import { ConveyorBelt } from '../src/conveyor-belt'; // Import the ConveyorBelt class
import { RobotArm } from '../src/robot-arm'; // Import the RobotArm class

describe('runEquipment Function', () => {
    it('should execute operate() method on ConveyorBelt without errors', async () => {
    // Create an instance of ConveyorBelt
        const conveyor = new ConveyorBelt('Test Conveyor', 3);

        // Run the equipment
        await runEquipment(conveyor);

        // If no errors occur, the test is successful
        expect(true).to.be.true;
    });

    it('should execute operate() method on RobotArm without errors', async () => {
    // Create an instance of RobotArm
        const robot = new RobotArm('Test Robot', 0.02);

        // Run the equipment
        await runEquipment(robot);

        // If no errors occur, the test is successful
        expect(true).to.be.true;
    });
});
