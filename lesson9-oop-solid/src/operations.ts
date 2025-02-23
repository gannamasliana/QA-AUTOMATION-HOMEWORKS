import { IEquipment } from "./interfaces";

// Function to run any equipment that implements IEquipment.
export async function runEquipment(equipment: IEquipment): Promise<void> {
  await equipment.operate(); // Await the asynchronous "operate" method.
}
