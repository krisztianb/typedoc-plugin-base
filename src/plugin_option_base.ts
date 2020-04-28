import { DeclarationOption } from "typedoc";

/**
 * Abstract base class for a TypeDoc plugin option.
 * @typeparam T The type of the value for this option.
 */
export abstract class PluginOptionBase<T> {
    /** Name of the command line parameter used for this option. */
    protected nameInCommandLine: string;

    /** Help message for the option in the command line. */
    protected helpInCommandLine: string;

    /** Default value of the option. */
    protected defaultValue: T;

    /** Current value of the option. */
    public value: T;

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
     * Returns the name of the plugin option.
     * @returns The name of the plugin option.
     */
    get name(): string {
        return this.nameInCommandLine;
    }

    /**
     * Returns a declaration option representing the plugin option.
     * @returns The declaration option representing the plugin option.
     */
    abstract get asDeclaration(): DeclarationOption;
}
