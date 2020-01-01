import { Application } from "typedoc";

/**
 * Abstract base class for a TypeDoc plugin option.
 * @typeparam T The type of the value for this option.
 */
export abstract class TypeDocPluginOptionBase<T> {
    /** Name of the command line parameter used for this option. */
    protected nameInCommandLine: string;

    /** Help message for the option in the command line. */
    protected helpInCommandLine: string;

    /** Default value of the option. */
    protected defaultValue: T;

    /** Current value of the option. */
    protected value: T;

    /**
     * Returns the value of the options.
     * @returns The option's value.
     */
    get val(): T {
        return this.value;
    }

    /**
     * Initializes a new option.
     * @param nameInCommandLine Name of the command line parameter used for this option.
     * @param helpInCommandLine Help message for the option in the command line.
     * @param defaultValue Default value of the option.
     */
    constructor(nameInCommandLine: string, helpInCommandLine: string, defaultValue: T) {
        this.nameInCommandLine = nameInCommandLine;
        this.helpInCommandLine = helpInCommandLine;
        this.defaultValue = defaultValue;

        // ensure default value
        this.value = defaultValue;
    }

    /**
     * Adds the option to the application's options.
     * @param typedoc The TypeDoc application.
     */
    public abstract addToApplication(typedoc: Application): void;

    /**
     * Reads the value of the option from the application's options.
     * @param typedoc The TypeDoc application.
     */
    public abstract readValueFromApplication(typedoc: Application): void;
}
