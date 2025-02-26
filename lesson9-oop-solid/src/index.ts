import { ConveyorBelt } from './conveyor-belt';
import { RobotArm } from './robot-arm';
import { runEquipment } from './operations';

async function main(): Promise<void> {
    console.log('Initializing lean manufacturing process...');

    const conveyor: ConveyorBelt = new ConveyorBelt('Main Line', 2.5);
    const robot: RobotArm = new RobotArm('Welding Unit', 0.01);

    await runEquipment(conveyor);
    await runEquipment(robot);

    console.log('Manufacturing process completed.');
}

// Execute the main function.
main().catch((error) => console.error('Error in manufacturing process:', error));
