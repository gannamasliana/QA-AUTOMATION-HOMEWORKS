import { expect } from 'chai'; // Import Chai assertion library
import { RobotArm } from '../src/robot-arm'; // Import the RobotArm class

describe('RobotArm Class', () => {
    it('should create an instance of RobotArm', () => {
    // Create a new RobotArm instance
        const robot = new RobotArm('Test Robot', 0.02);

        // Assert that the instance is actually of type RobotArm
        expect(robot).to.be.instanceOf(RobotArm);
    });

    it('should execute operate() method and print logs', async () => {
    // Create a new RobotArm instance
        const robot = new RobotArm('Test Robot', 0.02);

        // Call the operate() method and ensure it executes without errors
        await robot.operate();
    });
});
