// Define an interface for lean manufacturing equipment.
// An interface is a contract that ensures any equipment has an "operate" method.
export interface IEquipment {
    operate(): Promise<void>; // Use Promise<void> for asynchronous operations.
  }
  