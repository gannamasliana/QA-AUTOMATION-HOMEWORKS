// Abstract class representing manufacturing equipment.
export abstract class Equipment {
    protected name: string; // Protected: Only accessible within this class and subclasses.

    public constructor(name: string) {
        this.name = name;
    }

    // Abstract method that must be implemented by subclasses.
    public abstract operate(): Promise<void>;
}

