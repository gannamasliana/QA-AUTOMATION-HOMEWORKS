import { Equipment } from './equipment';

// Function that operates any type of manufacturing equipment.
export async function runEquipment(equipment: Equipment): Promise<void> {
    await equipment.operate(); // Calls the implemented "operate()" method.
}
