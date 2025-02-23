import { ConveyorBelt } from "./conveyorBelt";
import { RobotArm } from "./robotArm";
import { runEquipment } from "./operations";

async function main() {
  console.log("Initializing lean manufacturing process...");

  // Create instances of different equipment.
  const conveyor = new ConveyorBelt("Main Line", 2.5);
  const robot = new RobotArm("Welding Unit", 0.01);

  // Run both equipment asynchronously.
  await runEquipment(conveyor);
  await runEquipment(robot);

  console.log("Manufacturing process completed.");
}

// Execute the main function.
main().catch((error) => console.error("Error in manufacturing process:", error));
