import { IEquipment } from "./interfaces";

// Abstract class that provides a common structure for all equipment.
export abstract class Equipment implements IEquipment {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Abstract method that each subclass must implement.
  abstract operate(): Promise<void>;
}
